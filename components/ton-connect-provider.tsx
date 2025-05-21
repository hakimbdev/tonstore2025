"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { TonConnectUI, type TonConnectUiOptions, THEME } from "@tonconnect/ui"

// Define the wallet connection context type
type TonWalletContextType = {
  tonConnectUI: TonConnectUI | null
  wallet: any | null
  isConnected: boolean
  balance: string
  address: string
  connect: () => void
  disconnect: () => void
}

// Create the context
const TonWalletContext = createContext<TonWalletContextType>({
  tonConnectUI: null,
  wallet: null,
  isConnected: false,
  balance: "0",
  address: "",
  connect: () => {},
  disconnect: () => {},
})

// Options for TonConnect UI
const tonConnectOptions: TonConnectUiOptions = {
  manifestUrl: "https://ton-store.vercel.app/tonconnect-manifest.json",
  uiPreferences: {
    theme: THEME.LIGHT,
    colorsSet: {
      connectButton: {
        background: "#0088CC",
        foreground: "#FFFFFF",
      },
    },
  },
}

// Provider component
export function TonConnectProvider({ children }: { children: ReactNode }) {
  const [tonConnectUI, setTonConnectUI] = useState<TonConnectUI | null>(null)
  const [wallet, setWallet] = useState<any | null>(null)
  const [balance, setBalance] = useState<string>("0")
  const [address, setAddress] = useState<string>("")

  // Initialize TonConnect with a check to ensure it's in a browser environment
  useEffect(() => {
    // Only initialize in browser environment
    if (typeof window !== "undefined") {
      try {
        const tonConnect = new TonConnectUI(tonConnectOptions)
        setTonConnectUI(tonConnect)

        // Listen for wallet changes
        const unsubscribe = tonConnect.onStatusChange((wallet) => {
          setWallet(wallet)

          if (wallet) {
            // Format the balance from nano TON to TON
            const balanceValue = wallet.balance ? (Number.parseInt(wallet.balance) / 1000000000).toFixed(2) : "0"
            setBalance(balanceValue)

            // Get the wallet address
            if (wallet.account) {
              setAddress(wallet.account.address)
            }
          } else {
            setBalance("0")
            setAddress("")
          }
        })

        return () => {
          unsubscribe()
        }
      } catch (error) {
        console.error("Failed to initialize TonConnect:", error)
      }
    }
  }, [])

  // Connect wallet
  const connect = () => {
    if (tonConnectUI) {
      try {
        tonConnectUI.openModal()
      } catch (error) {
        console.error("Failed to open wallet modal:", error)
      }
    }
  }

  // Disconnect wallet
  const disconnect = () => {
    if (tonConnectUI) {
      try {
        tonConnectUI.disconnect()
      } catch (error) {
        console.error("Failed to disconnect wallet:", error)
      }
    }
  }

  const isConnected = !!wallet

  const value = {
    tonConnectUI,
    wallet,
    isConnected,
    balance,
    address,
    connect,
    disconnect,
  }

  return <TonWalletContext.Provider value={value}>{children}</TonWalletContext.Provider>
}

// Hook to use the wallet context
export const useTonWallet = () => useContext(TonWalletContext)

