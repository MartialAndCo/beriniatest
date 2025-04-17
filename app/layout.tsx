import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"

// Remplacer Open Sans par Lato
import { Lato } from "next/font/google"

// Configurer la police Lato
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "BerinIA - Solutions d'automatisation IA",
  description: "BerinIA transforme votre service client avec des solutions d'IA avancées",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${lato.variable} font-lato overflow-x-hidden max-w-[100vw]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen w-full overflow-x-hidden max-w-[100vw]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'