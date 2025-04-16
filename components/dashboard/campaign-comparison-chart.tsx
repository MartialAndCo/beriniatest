"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Immobilier Paris",
    leads: 342,
    conversion: 7.8,
  },
  {
    name: "Avocats Lyon",
    leads: 215,
    conversion: 5.2,
  },
  {
    name: "Architectes Bordeaux",
    leads: 189,
    conversion: 9.1,
  },
  {
    name: "RH Lille",
    leads: 78,
    conversion: 3.2,
  },
  {
    name: "Cliniques vétérinaires",
    leads: 156,
    conversion: 6.5,
  },
]

export function CampaignComparisonChart() {
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
        <YAxis yAxisId="right" orientation="right" domain={[0, 10]} className="text-xs" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Bar yAxisId="left" dataKey="leads" name="Leads" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar yAxisId="right" dataKey="conversion" name="Conversion (%)" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
