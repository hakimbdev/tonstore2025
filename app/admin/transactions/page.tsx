import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Download, Filter } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

// Sample transaction data
const transactions = [
  {
    id: "TX123456",
    product: "Telegram Premium 6 Months",
    amount: "22 TON",
    date: "3/29/2025, 11:32:10 AM",
    status: "completed",
    wallet: "UQDrP...8dKP",
  },
  {
    id: "TX123455",
    product: "Telegram Stars 1000 Pack",
    amount: "13 TON",
    date: "3/28/2025, 09:15:22 AM",
    status: "completed",
    wallet: "UQB7L...2xFR",
  },
  {
    id: "TX123454",
    product: "Telegram Premium 1 Month",
    amount: "4.5 TON",
    date: "3/27/2025, 14:45:01 PM",
    status: "completed",
    wallet: "UQCJ9...7mHT",
  },
  {
    id: "TX123453",
    product: "Telegram Premium 1 Month",
    amount: "4.5 TON",
    date: "3/26/2025, 18:22:45 PM",
    status: "failed",
    wallet: "UQF5K...1pQZ",
  },
  {
    id: "TX123452",
    product: "Telegram Stars 1000 Pack",
    amount: "13 TON",
    date: "3/25/2025, 10:11:32 AM",
    status: "completed",
    wallet: "UQA3R...9sLM",
  },
  {
    id: "TX123451",
    product: "Telegram Premium 12 Months",
    amount: "38 TON",
    date: "3/24/2025, 16:05:18 PM",
    status: "completed",
    wallet: "UQE2T...5vNB",
  },
  {
    id: "TX123450",
    product: "Telegram Stars 500 Pack",
    amount: "7 TON",
    date: "3/23/2025, 12:48:33 PM",
    status: "completed",
    wallet: "UQH8P...3kLM",
  },
  {
    id: "TX123449",
    product: "Telegram Premium 1 Month",
    amount: "4.5 TON",
    date: "3/22/2025, 08:30:55 AM",
    status: "failed",
    wallet: "UQJ4R...6pQZ",
  },
  {
    id: "TX123448",
    product: "Telegram Stars 2500 Pack",
    amount: "28 TON",
    date: "3/21/2025, 19:22:10 PM",
    status: "completed",
    wallet: "UQL1S...4tRV",
  },
  {
    id: "TX123447",
    product: "Telegram Premium 6 Months",
    amount: "22 TON",
    date: "3/20/2025, 14:15:40 PM",
    status: "completed",
    wallet: "UQN7D...2bCX",
  },
]

export default function TransactionsPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <Link href="/" className="font-bold text-xl">
            TON Store
          </Link>
          <p className="text-xs text-muted-foreground mt-1">Admin Dashboard</p>
        </div>

        <div className="flex-1 p-4">
          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
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
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              Dashboard
            </Link>
            <Link
              href="/admin/transactions"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium"
            >
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
                className="h-4 w-4"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Transactions
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
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
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Products
            </Link>
            <Link
              href="/admin/users"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
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
                className="h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Users
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start">
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
              className="mr-2 h-4 w-4"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <header className="bg-white border-b p-4 md:p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Transactions</h1>
            <p className="text-muted-foreground">Manage and monitor all transactions</p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </header>

        <main className="p-4 md:p-6">
          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Search</label>
                  <Input placeholder="Search transactions..." />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Product</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Products</SelectItem>
                      <SelectItem value="premium-1">Premium 1 Month</SelectItem>
                      <SelectItem value="premium-6">Premium 6 Months</SelectItem>
                      <SelectItem value="premium-12">Premium 12 Months</SelectItem>
                      <SelectItem value="stars-500">Stars 500</SelectItem>
                      <SelectItem value="stars-1000">Stars 1000</SelectItem>
                      <SelectItem value="stars-2500">Stars 2500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Date Range</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="yesterday">Yesterday</SelectItem>
                      <SelectItem value="week">Last 7 days</SelectItem>
                      <SelectItem value="month">Last 30 days</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle>All Transactions</CardTitle>
              <div className="text-sm text-muted-foreground">
                Showing <strong>10</strong> of <strong>253</strong> transactions
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Wallet</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell className="font-medium">{tx.id}</TableCell>
                      <TableCell>{tx.product}</TableCell>
                      <TableCell>{tx.amount}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell className="font-mono text-sm">{tx.wallet}</TableCell>
                      <TableCell>
                        {tx.status === "completed" ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            <Check className="h-3 w-3 mr-1" /> Completed
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                            <X className="h-3 w-3 mr-1" /> Failed
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex items-center justify-between p-4">
                <div className="text-sm text-muted-foreground">Showing 1-10 of 253 transactions</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

