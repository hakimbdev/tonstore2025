"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTonWallet } from "@/components/ton-connect-provider"
import { Copy, CheckCircle, ExternalLink } from "lucide-react"

export default function ConnectWalletButton() {
  const { isConnected, connect, disconnect, balance, address } = useTonWallet()
  const [copied, setCopied] = useState(false)

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Format address for display
  const formatAddress = (addr: string) => {
    if (!addr) return ""
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  // Update the connect function to handle the case when tonConnectUI might be null
  const handleConnect = async () => {
    if (isConnected) {
      return
    }

    try {
      await connect()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  if (isConnected) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            {formatAddress(address)}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your TON Wallet</DialogTitle>
            <DialogDescription>Connected wallet details and balance</DialogDescription>
          </DialogHeader>

          <div className="p-4 bg-blue-50 rounded-lg mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Balance</span>
              <span className="text-lg font-bold">{balance} TON</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Address</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono">{formatAddress(address)}</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={copyAddress}>
                  {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <Button asChild variant="outline">
              <a
                href={`https://tonscan.org/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                View on TONScan
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="destructive" onClick={disconnect}>
              Disconnect Wallet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // Replace the return statement for the not connected state
  return (
    <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleConnect}>
      Connect Wallet
    </Button>
  )
}

