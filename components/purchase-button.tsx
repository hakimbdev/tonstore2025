"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTonWallet } from "@/components/ton-connect-provider"
import { Loader2 } from "lucide-react"
import { useState } from "react"

interface PurchaseButtonProps {
  productId: string
  color: "blue" | "purple"
  className?: string
}

export default function PurchaseButton({ productId, color, className }: PurchaseButtonProps) {
  const router = useRouter()
  const { isConnected, connect } = useTonWallet()
  const [isLoading, setIsLoading] = useState(false)

  const handlePurchase = async () => {
    if (!isConnected) {
      try {
        await connect()
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
      return
    }

    setIsLoading(true)

    // Add a small delay to show loading state
    setTimeout(() => {
      router.push(`/checkout/${productId}`)
    }, 500)
  }

  const buttonClass = color === "blue" ? "bg-blue-400 hover:bg-blue-500" : "bg-purple-400 hover:bg-purple-500"

  return (
    <Button className={`w-full ${buttonClass} ${className}`} onClick={handlePurchase} disabled={isLoading}>
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : !isConnected ? (
        "Connect Wallet to Purchase"
      ) : (
        "Purchase Now"
      )}
    </Button>
  )
}

