/**
 * Service d'authentification
 *
 * Gère toutes les opérations liées à l'authentification des utilisateurs.
 */

import { api, type ApiResponse } from "../api"

// Types
export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "manager" | "analyst" | "viewer"
  avatar?: string
  lastLogin?: string
  status: "active" | "inactive"
}

export interface LoginRequest {
  email: string
  password: string
  rememberMe?: boolean
}

export interface LoginResponse {
  user: User
  token: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
  company?: string
  jobTitle?: string
  agreeTerms: boolean
}

// Données mockées
const mockUsers: User[] = [
  {
    id: "1",
    name: "Admin",
    email: "admin@berinia.com",
    role: "admin",
    avatar: "A",
    lastLogin: "10/06/2023 15:45",
    status: "active",
  },
  {
    id: "2",
    name: "Jean Dupont",
    email: "jean.dupont@berinia.com",
    role: "manager",
    avatar: "JD",
    lastLogin: "10/06/2023 14:30",
    status: "active",
  },
]

/**
 * Service d'authentification
 */
class AuthService {
  /**
   * Connecte un utilisateur
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    // Simuler une vérification des identifiants
    const user = mockUsers.find((u) => u.email === credentials.email)

    if (!user) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      throw new Error("Identifiants invalides")
    }

    // Simuler une réponse d'API
    const mockResponse: LoginResponse = {
      user,
      token: "mock_jwt_token_" + Math.random().toString(36).substring(2),
    }

    const response = await api.post<LoginResponse>("/auth/login", credentials, mockResponse)

    // Stocker le token
    if (response.data.token) {
      api.setToken(response.data.token)
    }

    return response
  }

  /**
   * Inscrit un nouvel utilisateur
   */
  async register(userData: RegisterRequest): Promise<ApiResponse<LoginResponse>> {
    // Simuler une vérification de l'email
    if (mockUsers.some((u) => u.email === userData.email)) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      throw new Error("Cet email est déjà utilisé")
    }

    // Créer un nouvel utilisateur mock
    const newUser: User = {
      id: (mockUsers.length + 1).toString(),
      name: userData.name,
      email: userData.email,
      role: "viewer", // Rôle par défaut
      avatar: userData.name
        .split(" ")
        .map((n) => n[0])
        .join(""),
      lastLogin: new Date().toLocaleString(),
      status: "active",
    }

    // Simuler une réponse d'API
    const mockResponse: LoginResponse = {
      user: newUser,
      token: "mock_jwt_token_" + Math.random().toString(36).substring(2),
    }

    const response = await api.post<LoginResponse>("/auth/register", userData, mockResponse)

    // Stocker le token
    if (response.data.token) {
      api.setToken(response.data.token)
    }

    return response
  }

  /**
   * Déconnecte l'utilisateur
   */
  async logout(): Promise<ApiResponse<void>> {
    const response = await api.post<void>("/auth/logout", {}, undefined)
    api.clearToken()
    return response
  }

  /**
   * Récupère les informations de l'utilisateur connecté
   */
  async getCurrentUser(): Promise<ApiResponse<User>> {
    // Simuler une réponse d'API avec l'utilisateur admin
    return api.get<User>("/auth/me", mockUsers[0])
  }

  /**
   * Vérifie si l'utilisateur est connecté
   */
  isAuthenticated(): boolean {
    // Vérifier si un token est stocké
    const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
    return !!token
  }
}

export const authService = new AuthService()
