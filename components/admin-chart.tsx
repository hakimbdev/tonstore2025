"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

type AdminChartProps = {
  type: "revenue" | "product" | "performance"
  data: any[]
  height?: number
  config?: any
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

export function AdminChart({ type, data, height = 300, config }: AdminChartProps) {
  if (type === "revenue") {
    return (
      <ChartContainer
        config={
          config || {
            premium: {
              label: "Premium",
              color: "hsl(var(--chart-1))",
            },
            stars: {
              label: "Stars",
              color: "hsl(var(--chart-2))",
            },
          }
        }
        className="h-[300px]"
      >
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => {
              return new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            }}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `${value} TON`} />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="premium"
            stroke="var(--color-premium)"
            strokeWidth={2}
            dot={{ fill: "var(--color-premium)" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="stars"
            stroke="var(--color-stars)"
            strokeWidth={2}
            dot={{ fill: "var(--color-stars)" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    )
  }

  if (type === "product") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} sales`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    )
  }

  if (type === "performance") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} sales`} />
          <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  return null
}

