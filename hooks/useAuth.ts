"use client"

/**
 * Hook personnalisé pour gérer l'authentification
 *
 * Ce hook encapsule la logique d'authentification et fournit des méthodes
 * pour se connecter, s'inscrire et se déconnecter, ainsi que l'état de l'utilisateur.
 */

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { authService, type User, type LoginRequest, type RegisterRequest } from "@/services/api/auth-service"
import { useApi } from "./useApi"

interface UseAuthReturn {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  error: Error | null
  login: (credentials: LoginRequest) => Promise<void>
  register: (userData: RegisterRequest) => Promise<void>
  logout: () => Promise<void>
}

/**
 * Hook pour gérer l'authentification
 *
 * @returns État et fonctions pour gérer l'authentification
 */
export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  // Utiliser le hook useApi pour gérer les appels API d'authentification
  const loginApi = useApi(authService.login.bind(authService))
  const registerApi = useApi(authService.register.bind(authService))
  const logoutApi = useApi(authService.logout.bind(authService))
  const getCurrentUserApi = useApi(authService.getCurrentUser.bind(authService))

  // Vérifier si l'utilisateur est déjà authentifié au chargement
  useEffect(() => {
    const checkAuth = async () => {
      if (authService.isAuthenticated()) {
        try {
          const userData = await getCurrentUserApi.execute()
          setUser(userData)
        } catch (error) {
          // Si la récupération de l'utilisateur échoue, on considère qu'il n'est pas authentifié
          console.error("Failed to get current user:", error)
          authService.clearToken()
        }
      }
    }

    checkAuth()
  }, [])

  // Fonction de connexion
  const login = useCallback(
    async (credentials: LoginRequest) => {
      try {
        const response = await loginApi.execute(credentials)
        setUser(response.user)
        router.push("/dashboard")
      } catch (error) {
        console.error("Login failed:", error)
        throw error
      }
    },
    [loginApi, router],
  )

  // Fonction d'inscription
  const register = useCallback(
    async (userData: RegisterRequest) => {
      try {
        const response = await registerApi.execute(userData)
        setUser(response.user)
        router.push("/dashboard")
      } catch (error) {
        console.error("Registration failed:", error)
        throw error
      }
    },
    [registerApi, router],
  )

  // Fonction de déconnexion
  const logout = useCallback(async () => {
    try {
      await logoutApi.execute()
      setUser(null)
      router.push("/login")
    } catch (error) {
      console.error("Logout failed:", error)
      throw error
    }
  }, [logoutApi, router])

  return {
    user,
    isLoading: loginApi.isLoading || registerApi.isLoading || logoutApi.isLoading || getCurrentUserApi.isLoading,
    isAuthenticated: !!user,
    error: loginApi.error || registerApi.error || logoutApi.error || getCurrentUserApi.error,
    login,
    register,
    logout,
  }
}
