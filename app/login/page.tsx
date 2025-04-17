/**
 * Page de connexion
 *
 * Cette page permet aux utilisateurs de se connecter à l'application.
 * Elle utilise le hook useAuth pour gérer l'authentification.
 */

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import AnimatedGradient from "@/components/animated-gradient"
import { useAuth } from "@/hooks/useAuth"
import { ErrorMessage } from "@/components/ui/error-message"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Utiliser le hook d'authentification
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Appeler la fonction de connexion du hook useAuth
      await login({
        email,
        password,
        rememberMe,
      })
      // La redirection est gérée dans le hook useAuth
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue lors de la connexion")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex items-center justify-center py-12">
        <AnimatedGradient />

        <div className="relative z-10 w-full max-w-md mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>

              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2">Connexion</h1>
                <p className="text-gray-600 dark:text-gray-400">Accédez à votre compte BerinIA</p>
              </div>

              <div className="space-y-4 mb-6">
                <Button variant="outline" className="w-full" type="button">
                  <img src="/placeholder.svg?height=24&width=24" alt="Google" className="h-5 w-5 mr-2" />
                  Continuer avec Google
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  <img src="/placeholder.svg?height=24&width=24" alt="Microsoft" className="h-5 w-5 mr-2" />
                  Continuer avec Microsoft
                </Button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                    ou continuer avec
                  </span>
                </div>
              </div>
            </div>

            {error && <ErrorMessage message={error} className="mb-4" onDismiss={() => setError(null)} />}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nom@entreprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link
                    href="#"
                    className="text-sm font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                  disabled={isLoading}
                />
                <Label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Se souvenir de moi
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connexion en cours...
                  </>
                ) : (
                  "Se connecter"
                )}
              </Button>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pas encore de compte?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    S'inscrire
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
