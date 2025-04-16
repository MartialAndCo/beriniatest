"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "1 Mai", conversion: 4.0 },
  { date: "5 Mai", conversion: 4.2 },
  { date: "10 Mai", conversion: 5.1 },
  { date: "15 Mai", conversion: 5.8 },
  { date: "20 Mai", conversion: 7.2 },
  { date: "25 Mai", conversion: 7.8 },
  { date: "30 Mai", conversion: 8.2 },
]

export function ConversionChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Chargement du graphique...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="date" className="text-xs" />
        <YAxis domain={[0, 10]} className="text-xs" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Line
          type="monotone"
          dataKey="conversion"
          name="Taux de conversion (%)"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
