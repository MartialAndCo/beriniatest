"use client"

import { useEffect, useState } from "react"
import { Scatter, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from "recharts"

const data = [
  { name: "Immobilier", conversion: 7.8, cpl: 1.85, leads: 440 },
  { name: "Juridique", conversion: 5.2, cpl: 2.1, leads: 215 },
  { name: "Architecture", conversion: 9.1, cpl: 1.65, leads: 189 },
  { name: "RH", conversion: 3.2, cpl: 3.45, leads: 78 },
  { name: "Santé", conversion: 6.5, cpl: 2.25, leads: 156 },
  { name: "Restauration", conversion: 4.8, cpl: 2.75, leads: 98 },
  { name: "Éducation", conversion: 2.3, cpl: 4.85, leads: 245 },
  { name: "Tourisme", conversion: 2.1, cpl: 5.2, leads: 45 },
]

export function NicheComparisonChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-[300px] flex items-center justify-center">Chargement du graphique...</div>
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          type="number"
          dataKey="conversion"
          name="Taux de conversion"
          unit="%"
          domain={[0, 10]}
          label={{ value: "Taux de conversion (%)", position: "bottom", className: "text-xs" }}
          className="text-xs"
        />
        <YAxis
          type="number"
          dataKey="cpl"
          name="Coût par lead"
          unit="€"
          domain={[0, 6]}
          label={{ value: "Coût par lead (€)", angle: -90, position: "left", className: "text-xs" }}
          className="text-xs"
        />
        <ZAxis type="number" dataKey="leads" range={[50, 400]} name="Leads" />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
          formatter={(value, name, props) => {
            if (name === "Coût par lead") return [`${value}€`, name]
            if (name === "Taux de conversion") return [`${value}%`, name]
            return [value, name]
          }}
        />
        <Scatter
          name="Niches"
          data={data}
          fill="hsl(var(--primary))"
          shape="circle"
          legendType="none"
          label={(props) => {
            const { x, y, width, height, value, index } = props
            return (
              <text
                x={x + width / 2}
                y={y - 10}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] fill-current"
              >
                {data[index].name}
              </text>
            )
          }}
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
