"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Check, X, ExternalLink } from "lucide-react"

// Sample transaction data
const allTransactions = [
  {
    id: "TX78923",
    product: "Telegram Premium 6 Months",
    type: "premium",
    amount: "22 TON",
    date: "3/29/2025, 11:32:10 AM",
    status: "completed",
    hash: "97f6d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b9",
  },
  {
    id: "TX78922",
    product: "Telegram Stars 1000 Pack",
    type: "stars",
    amount: "13 TON",
    date: "3/28/2025, 10:15:22 AM",
    status: "completed",
    hash: "87e6d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b8",
  },
  {
    id: "TX78921",
    product: "Telegram Premium 1 Month",
    type: "premium",
    amount: "4.5 TON",
    date: "3/27/2025, 09:45:01 AM",
    status: "completed",
    hash: "77d6d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b7",
  },
  {
    id: "TX78920",
    product: "Telegram Premium 1 Month",
    type: "premium",
    amount: "4.5 TON",
    date: "3/26/2025, 08:22:45 AM",
    status: "failed",
    hash: "67c6d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b6",
  },
  {
    id: "TX78919",
    product: "Telegram Stars 1000 Pack",
    type: "stars",
    amount: "13 TON",
    date: "3/25/2025, 23:11:32 PM",
    status: "completed",
    hash: "57b6d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b5",
  },
  {
    id: "TX78918",
    product: "Telegram Stars 500 Pack",
    type: "stars",
    amount: "7 TON",
    date: "3/24/2025, 14:05:18 PM",
    status: "completed",
    hash: "47a6d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b4",
  },
  {
    id: "TX78917",
    product: "Telegram Premium 12 Months",
    type: "premium",
    amount: "38 TON",
    date: "3/15/2025, 09:30:45 AM",
    status: "completed",
    hash: "3796d5a8e7b3c2d1a0b9c8d7e6f5a4b3c2d1a0b3",
  },
]

export default function WalletTransactions({ type }: { type?: string }) {
  const [page, setPage] = useState(1)
  const pageSize = 5

  // Filter transactions by type if specified
  const filteredTransactions = type ? allTransactions.filter((tx) => tx.type === type) : allTransactions

  const totalPages = Math.ceil(filteredTransactions.length / pageSize)
  const paginatedTransactions = filteredTransactions.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell className="font-medium">{tx.id}</TableCell>
              <TableCell>{tx.product}</TableCell>
              <TableCell>{tx.amount}</TableCell>
              <TableCell className="text-sm">{tx.date}</TableCell>
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
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                  <a
                    href={`https://tonscan.org/tx/${tx.hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on TONScan"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4">
          <div className="text-sm text-muted-foreground">
            Showing {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, filteredTransactions.length)} of{" "}
            {filteredTransactions.length} transactions
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                className={page === i + 1 ? "bg-blue-50" : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

