"use client"

import { useEffect, useState } from "react"
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart } from "recharts"

const data = [
  { name: "Immobilier", conversion: 7.8, cpl: 1.85 },
  { name: "Juridique", conversion: 5.2, cpl: 2.1 },
  { name: "Architecture", conversion: 9.1, cpl: 1.65 },
  { name: "RH", conversion: 3.2, cpl: 3.45 },
  { name: "Santé", conversion: 6.5, cpl: 2.25 },
  { name: "Restauration", conversion: 4.8, cpl: 2.75 },
  { name: "Éducation", conversion: 2.3, cpl: 4.85 },
  { name: "Tourisme", conversion: 2.1, cpl: 5.2 },
]

export function NichePerformanceChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Chargement du graphique...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="name" className="text-xs" />
        <YAxis yAxisId="left" orientation="left" className="text-xs" />
        <YAxis yAxisId="right" orientation="right" domain={[0, 6]} className="text-xs" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Bar
          yAxisId="left"
          dataKey="conversion"
          name="Taux de conversion (%)"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          yAxisId="right"
          dataKey="cpl"
          name="Coût par lead (€)"
          fill="hsl(var(--destructive))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
