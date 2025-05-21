"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowLeft, Loader2 } from "lucide-react"
import { useTonWallet } from "@/components/ton-connect-provider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Product data
const products = {
  "premium-1": {
    name: "Telegram Premium 1 Month",
    price: "4.5",
    features: [
      "No ads in public channels",
      "4GB file uploads",
      "Faster download speed",
      "Premium stickers & reactions",
    ],
    color: "blue",
  },
  "premium-6": {
    name: "Telegram Premium 6 Months",
    price: "22",
    features: [
      "Everything in monthly plan",
      "Voice-to-text message conversion",
      "Premium app icons",
      "20% discount vs monthly",
    ],
    color: "blue",
    discount: "20% OFF",
  },
  "premium-12": {
    name: "Telegram Premium 12 Months",
    price: "38",
    features: [
      "Everything in 6-month plan",
      "Priority support",
      "Early access to new features",
      "30% discount vs monthly",
    ],
    color: "blue",
    discount: "30% OFF",
  },
  "stars-500": {
    name: "Telegram Stars 500 Pack",
    price: "7",
    features: ["Support content creators", "Special reactions to posts", "Access exclusive content"],
    color: "purple",
  },
  "stars-1000": {
    name: "Telegram Stars 1000 Pack",
    price: "13",
    features: [
      "Support content creators",
      "Special reactions to posts",
      "Access exclusive content",
      "Stand out in comments",
    ],
    color: "purple",
  },
  "stars-2500": {
    name: "Telegram Stars 2500 Pack",
    price: "28",
    features: [
      "Support content creators",
      "Special reactions to posts",
      "Access exclusive content",
      "Stand out in comments",
      "15% bonus stars",
    ],
    color: "purple",
    discount: "15% OFF",
  },
}

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const { isConnected, connect, balance } = useTonWallet()
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const productId = params.product as string
  const product = products[productId as keyof typeof products]

  // Redirect if not connected
  useEffect(() => {
    if (!isConnected) {
      router.push("/products")
    }
  }, [isConnected, router])

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    )
  }

  const handlePurchase = () => {
    if (!isConnected) {
      connect()
      return
    }

    setIsProcessing(true)

    // Simulate transaction processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
    }, 2000)
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    router.push("/wallet")
  }

  const hasEnoughBalance = isConnected && Number.parseFloat(balance) >= Number.parseFloat(product.price)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            TON Store
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" className="mb-6" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`bg-${product.color}-500 text-white p-4 rounded-lg h-16 w-16 flex items-center justify-center`}
                    >
                      {product.color === "blue" ? (
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
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      ) : (
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
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <p className="text-muted-foreground">{product.price} TON</p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Features included:</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className={`h-5 w-5 text-${product.color}-500`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{product.price} TON</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Network Fee</span>
                      <span>0.05 TON</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>{(Number.parseFloat(product.price) + 0.05).toFixed(2)} TON</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button
                    className={`w-full bg-${product.color}-500 hover:bg-${product.color}-600`}
                    onClick={handlePurchase}
                    disabled={isProcessing || !isConnected || !hasEnoughBalance}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : !isConnected ? (
                      "Connect Wallet to Purchase"
                    ) : !hasEnoughBalance ? (
                      "Insufficient Balance"
                    ) : (
                      "Complete Purchase"
                    )}
                  </Button>

                  {!isConnected && (
                    <p className="text-xs text-center text-muted-foreground">
                      You need to connect your TON wallet to make a purchase
                    </p>
                  )}

                  {isConnected && !hasEnoughBalance && (
                    <p className="text-xs text-center text-red-500">
                      Your wallet balance ({balance} TON) is insufficient for this purchase
                    </p>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={showSuccess} onOpenChange={handleSuccessClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Purchase Successful!</DialogTitle>
            <DialogDescription>Your purchase of {product.name} has been completed successfully.</DialogDescription>
          </DialogHeader>
          <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3 my-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="font-medium">Transaction completed</p>
              <p className="text-sm text-muted-foreground">Transaction ID: TX{Math.floor(Math.random() * 100000)}</p>
            </div>
          </div>
          <Button onClick={handleSuccessClose} className="w-full">
            View My Wallet
          </Button>
        </DialogContent>
      </Dialog>

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

