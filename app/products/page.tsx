import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import ConnectWalletButton from "@/components/connect-wallet-button"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            TON Store
          </Link>
          <ConnectWalletButton />
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">All Products</h1>
            <p className="text-muted-foreground text-lg">
              Browse all available Telegram Premium subscriptions and Stars packs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
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
                <Button className="w-full bg-blue-400 hover:bg-blue-500">Purchase Now</Button>
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
                <Button className="w-full bg-blue-400 hover:bg-blue-500">Purchase Now</Button>
              </CardFooter>
            </Card>

            {/* Telegram Premium 12 Months */}
            <Card className="bg-white">
              <div className="bg-blue-500 text-white p-4 rounded-t-lg relative">
                <Badge className="absolute top-2 right-2 bg-yellow-400 text-black font-medium">30% OFF</Badge>
                <h3 className="font-bold">Telegram Premium</h3>
                <p className="text-sm">12 Months Subscription</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-2xl font-bold mb-6">38 TON</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Everything in 6-month plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>Early access to new features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-blue-500" />
                    <span>30% discount vs monthly</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-400 hover:bg-blue-500">Purchase Now</Button>
              </CardFooter>
            </Card>

            {/* Telegram Stars 500 */}
            <Card className="bg-white">
              <div className="bg-purple-500 text-white p-4 rounded-t-lg">
                <h3 className="font-bold">Telegram Stars</h3>
                <p className="text-sm">500 Stars Pack</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-2xl font-bold mb-6">7 TON</p>
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
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-400 hover:bg-purple-500">Purchase Now</Button>
              </CardFooter>
            </Card>

            {/* Telegram Stars 1000 */}
            <Card className="bg-white">
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
                <Button className="w-full bg-purple-400 hover:bg-purple-500">Purchase Now</Button>
              </CardFooter>
            </Card>

            {/* Telegram Stars 2500 */}
            <Card className="bg-white">
              <div className="bg-purple-500 text-white p-4 rounded-t-lg relative">
                <Badge className="absolute top-2 right-2 bg-yellow-400 text-black font-medium">15% OFF</Badge>
                <h3 className="font-bold">Telegram Stars</h3>
                <p className="text-sm">2500 Stars Pack</p>
              </div>
              <CardContent className="pt-6">
                <p className="text-2xl font-bold mb-6">28 TON</p>
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
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span>15% bonus stars</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-400 hover:bg-purple-500">Purchase Now</Button>
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

