/**
 * Service API principal pour BerinIA
 *
 * Ce service gère toutes les requêtes API de l'application.
 * Pour l'instant, il utilise des données mockées, mais il sera facile
 * de le connecter à une vraie API plus tard.
 */

// Types de base
export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Fonction générique pour simuler un délai réseau
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Fonction générique pour simuler une erreur API
const simulateError = (probability = 0.1): boolean => {
  return Math.random() < probability
}

/**
 * Classe principale du service API
 */
class ApiService {
  private baseUrl: string
  private token: string | null

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api"
    this.token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
  }

  /**
   * Configure le token d'authentification
   */
  setToken(token: string): void {
    this.token = token
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token)
    }
  }

  /**
   * Supprime le token d'authentification
   */
  clearToken(): void {
    this.token = null
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token")
    }
  }

  /**
   * Prépare les en-têtes pour les requêtes API
   */
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`
    }

    return headers
  }

  /**
   * Méthode générique pour effectuer des requêtes API
   * Pour l'instant, elle simule des réponses avec des données mockées
   */
  private async request<T>(
    method: string,
    endpoint: string,
    data?: any,
    mockResponse?: T,
    errorProbability = 0.1,
  ): Promise<ApiResponse<T>> {
    // Simuler un délai réseau
    await delay(Math.random() * 800 + 200) // 200-1000ms

    // Simuler une erreur
    if (simulateError(errorProbability)) {
      throw new Error("Erreur de connexion au serveur")
    }

    // En mode développement, on retourne des données mockées
    if (process.env.NODE_ENV === "development" && mockResponse) {
      return {
        data: mockResponse,
        status: 200,
      }
    }

    // En production, on ferait une vraie requête API
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: this.getHeaders(),
        body: data ? JSON.stringify(data) : undefined,
      })

      const responseData = await response.json()

      return {
        data: responseData,
        status: response.status,
      }
    } catch (error) {
      console.error("API request error:", error)
      throw error
    }
  }

  // Méthodes spécifiques pour chaque type de requête
  async get<T>(endpoint: string, mockResponse?: T): Promise<ApiResponse<T>> {
    return this.request<T>("GET", endpoint, undefined, mockResponse)
  }

  async post<T>(endpoint: string, data: any, mockResponse?: T): Promise<ApiResponse<T>> {
    return this.request<T>("POST", endpoint, data, mockResponse)
  }

  async put<T>(endpoint: string, data: any, mockResponse?: T): Promise<ApiResponse<T>> {
    return this.request<T>("PUT", endpoint, data, mockResponse)
  }

  async delete<T>(endpoint: string, mockResponse?: T): Promise<ApiResponse<T>> {
    return this.request<T>("DELETE", endpoint, undefined, mockResponse)
  }
}

// Exporter une instance unique du service API
export const api = new ApiService()

// Exporter des services spécifiques pour chaque domaine
export * from "./api/auth-service"
export * from "./api/campaigns-service"
export * from "./api/leads-service"
export * from "./api/agents-service"
export * from "./api/niches-service"
export * from "./api/stats-service"
