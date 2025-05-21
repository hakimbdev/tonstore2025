"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, Check } from "lucide-react"
import ConnectWalletButton from "@/components/connect-wallet-button"
import AdminLoginButton from "@/components/admin-login-button"
import { useTonWallet } from "@/components/ton-connect-provider"
import PurchaseButton from "@/components/purchase-button"

export default function Home() {
  const { isConnected, connect } = useTonWallet()

  const handlePurchase = (productId: string) => {
    if (!isConnected) {
      connect()
      return
    }

    // Navigate to checkout page when wallet is connected
    window.location.href = `/checkout/${productId}`
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold text-xl">
              TON Store
            </Link>
            <AdminLoginButton />
          </div>
          <ConnectWalletButton />
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Telegram Premium & Stars Marketplace</h1>
            <p className="text-muted-foreground text-lg">
              Purchase Telegram Premium subscriptions and Stars using TON coins
            </p>
          </div>

          <div className="mt-8 p-4 border rounded-lg bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full p-1 mt-0.5">
                <PlusCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-800">TON Connect Integration</h3>
                <p className="text-blue-700 text-sm mt-1">
                  This marketplace now uses TON Connect 2.0 protocol for direct integration with TON wallets like
                  Tonkeeper, TonHub, and others. Connect your wallet to make purchases directly on the TON blockchain.
                </p>

                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">Connection Options</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="secondary" className="bg-blue-500 text-white hover:bg-blue-600">
                      Connect Tonkeeper
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-purple-500 text-white hover:bg-purple-600">
                      Connect Tonhub
                    </Button>
                    <Button size="sm" variant="outline">
                      Test QR Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Transaction History Card */}
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-6">Transaction History</h3>
                <div className="flex items-center gap-4 border-l-4 border-green-500 pl-4 py-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Telegram Premium 6 Months</h4>
                    <p className="text-xs text-muted-foreground">3/29/2025, 11:32:10 AM</p>
                    <p className="text-xs text-green-600">completed</p>
                  </div>
                  <div className="font-bold">22 TON</div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram Premium 1 Month */}
            <Card className="bg-white">
              <div className="bg-blue-500 text-white p-4 rounded-t-lg">
                <h3 className="font-bold">Telegram Premium</h3>
                <p className="text-sm">1 Month Subscription</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-2xl font-bold mb-6">4.5 TON</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>No ads in public channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>4GB file uploads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Faster download speed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Premium stickers & reactions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <PurchaseButton productId="premium-1" color="blue" />
              </CardFooter>
            </Card>

            {/* Telegram Premium 6 Months */}
            <Card className="bg-white">
              <div className="bg-blue-500 text-white p-4 rounded-t-lg relative">
                <Badge className="absolute top-2 right-2 bg-yellow-400 text-black font-medium">20% OFF</Badge>
                <h3 className="font-bold">Telegram Premium</h3>
                <p className="text-sm">6 Months Subscription</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-2xl font-bold mb-6">22 TON</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Everything in monthly plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Voice-to-text message conversion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Premium app icons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>20% discount vs monthly</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <PurchaseButton productId="premium-6" color="blue" />
              </CardFooter>
            </Card>

            {/* Telegram Stars */}
            <Card className="bg-white md:col-start-2">
              <div className="bg-purple-500 text-white p-4 rounded-t-lg">
                <h3 className="font-bold">Telegram Stars</h3>
                <p className="text-sm">1000 Stars Pack</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-2xl font-bold mb-6">13 TON</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span>Support content creators</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span>Special reactions to posts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span>Access exclusive content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span>Stand out in comments</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <PurchaseButton productId="stars-1000" color="purple" />
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">TON Store</h3>
              <p className="text-gray-400">The easiest way to buy Telegram Premium & Stars with TON cryptocurrency.</p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

