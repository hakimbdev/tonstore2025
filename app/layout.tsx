import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TonConnectProvider } from "@/components/ton-connect-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TON Store - Telegram Premium & Stars Marketplace",
  description: "Buy Telegram Premium subscriptions and Stars using TON cryptocurrency",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TonConnectProvider>{children}</TonConnectProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

