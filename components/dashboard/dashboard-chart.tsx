"use client"

import { useEffect, useState } from "react"
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from "recharts"

const data = [
  { name: "1 Mai", leads: 120, conversion: 4.0 },
  { name: "5 Mai", leads: 180, conversion: 4.2 },
  { name: "10 Mai", leads: 250, conversion: 5.1 },
  { name: "15 Mai", leads: 310, conversion: 5.8 },
  { name: "20 Mai", leads: 410, conversion: 7.2 },
  { name: "25 Mai", leads: 520, conversion: 7.8 },
  { name: "30 Mai", leads: 620, conversion: 8.2 },
]

export function DashboardChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Chargement du graphique...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis yAxisId="left" orientation="left" className="text-xs" />
        <YAxis yAxisId="right" orientation="right" domain={[0, 10]} className="text-xs" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Bar yAxisId="left" dataKey="leads" name="Leads collectés" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="conversion"
          name="Taux de conversion (%)"
          stroke="hsl(var(--destructive))"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
