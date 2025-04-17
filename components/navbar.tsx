"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false)
    }
  }, [isDesktop])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="BerinIA Logo" width={140} height={40} className="h-8 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/a-propos"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/partenaires"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              Partenaires
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/conditions-utilisation"
              className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
            >
              Conditions
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950/50"
              asChild
            >
              <Link href="/admin">Accès Admin (Temporaire)</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
              asChild
            >
              <Link href="/login">Se connecter</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-4">
          <div className="container mx-auto px-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/a-propos"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/partenaires"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Partenaires
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/conditions-utilisation"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Conditions
              </Link>
            </nav>

            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
              <Button
                variant="outline"
                className="justify-center border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950/50"
                asChild
              >
                <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                  Accès Admin (Temporaire)
                </Link>
              </Button>
              <Button
                className="justify-center bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
                asChild
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Se connecter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
