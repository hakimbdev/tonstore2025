import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  Users,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  X,
  Calendar,
  Activity,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import AdminLayout from "@/components/admin-layout"
import { AdminChart } from "@/components/admin-chart"

// Real-world-like transaction data
const transactions = [
  {
    id: "TX78923",
    product: "Telegram Premium 6 Months",
    amount: "22 TON",
    date: "3/29/2025, 11:32:10 AM",
    status: "completed",
    wallet: "UQDrP...8dKP",
  },
  {
    id: "TX78922",
    product: "Telegram Stars 1000 Pack",
    amount: "13 TON",
    date: "3/29/2025, 10:15:22 AM",
    status: "completed",
    wallet: "UQB7L...2xFR",
  },
  {
    id: "TX78921",
    product: "Telegram Premium 1 Month",
    amount: "4.5 TON",
    date: "3/29/2025, 09:45:01 AM",
    status: "completed",
    wallet: "UQCJ9...7mHT",
  },
  {
    id: "TX78920",
    product: "Telegram Premium 1 Month",
    amount: "4.5 TON",
    date: "3/29/2025, 08:22:45 AM",
    status: "failed",
    wallet: "UQF5K...1pQZ",
  },
  {
    id: "TX78919",
    product: "Telegram Stars 1000 Pack",
    amount: "13 TON",
    date: "3/28/2025, 23:11:32 PM",
    status: "completed",
    wallet: "UQA3R...9sLM",
  },
]

// Revenue data for chart
const revenueData = [
  { date: "2025-03-23", premium: 126, stars: 91 },
  { date: "2025-03-24", premium: 143, stars: 105 },
  { date: "2025-03-25", premium: 135, stars: 82 },
  { date: "2025-03-26", premium: 157, stars: 98 },
  { date: "2025-03-27", premium: 162, stars: 110 },
  { date: "2025-03-28", premium: 184, stars: 123 },
  { date: "2025-03-29", premium: 172, stars: 131 },
]

// Product distribution data
const productData = [
  { name: "Premium 1 Month", value: 42 },
  { name: "Premium 6 Months", value: 28 },
  { name: "Premium 12 Months", value: 14 },
  { name: "Stars 500", value: 22 },
  { name: "Stars 1000", value: 32 },
  { name: "Stars 2500", value: 18 },
]

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="flex-1">
        <header className="bg-white border-b p-4 md:p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your TON Store marketplace</p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Mar 23 - Mar 29, 2025
            </Button>
            <Button size="sm">
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
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              New Product
            </Button>
          </div>
        </header>

        <main className="p-4 md:p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">1,245 TON</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>12% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
                    <p className="text-2xl font-bold">342</p>
                  </div>
                  <div className="bg-purple-100 p-2 rounded-full">
                    <ShoppingCart className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>8% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold">1,423</p>
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-green-600">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>24% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                    <p className="text-2xl font-bold">24%</p>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Activity className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-red-600">
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                  <span>3% from last week</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminChart
                  type="revenue"
                  data={revenueData}
                  height={300}
                  config={{
                    premium: {
                      label: "Premium",
                      color: "hsl(var(--chart-1))",
                    },
                    stars: {
                      label: "Stars",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <AdminChart type="product" data={productData} height={300} />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="weekly">
                  <TabsList className="mb-4">
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="daily">
                    <AdminChart
                      type="performance"
                      data={[
                        { name: "00:00", value: 12 },
                        { name: "03:00", value: 5 },
                        { name: "06:00", value: 8 },
                        { name: "09:00", value: 25 },
                        { name: "12:00", value: 32 },
                        { name: "15:00", value: 28 },
                        { name: "18:00", value: 35 },
                        { name: "21:00", value: 22 },
                      ]}
                      height={250}
                    />
                  </TabsContent>
                  <TabsContent value="weekly">
                    <AdminChart
                      type="performance"
                      data={[
                        { name: "Mon", value: 45 },
                        { name: "Tue", value: 52 },
                        { name: "Wed", value: 49 },
                        { name: "Thu", value: 63 },
                        { name: "Fri", value: 58 },
                        { name: "Sat", value: 48 },
                        { name: "Sun", value: 42 },
                      ]}
                      height={250}
                    />
                  </TabsContent>
                  <TabsContent value="monthly">
                    <AdminChart
                      type="performance"
                      data={[
                        { name: "Jan", value: 320 },
                        { name: "Feb", value: 350 },
                        { name: "Mar", value: 410 },
                        { name: "Apr", value: 0 },
                        { name: "May", value: 0 },
                        { name: "Jun", value: 0 },
                      ]}
                      height={250}
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Premium 6 Months</span>
                        <span className="text-sm font-medium">32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Stars 1000</span>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Premium 1 Month</span>
                        <span className="text-sm font-medium">24%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: "24%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Stars 2500</span>
                        <span className="text-sm font-medium">16%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{ width: "16%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/transactions">View All</Link>
              </Button>
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </AdminLayout>
  )
}

