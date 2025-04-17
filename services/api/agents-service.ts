/**
 * Service de gestion des agents IA
 *
 * Gère toutes les opérations liées aux agents IA qui collectent et traitent les données.
 */

import { api, type ApiResponse } from "../api"

// Types
export interface Agent {
  id: number
  name: string
  type: string
  status: "active" | "inactive" | "warning" | "error"
  lastRun: string
  leads: number | null
  campaigns: number
}

export interface AgentLog {
  timestamp: string
  level: "info" | "success" | "warning" | "error"
  message: string
  details?: any
}

export interface AgentRestartRequest {
  force?: boolean
  reason?: string
}

// Données mockées
const mockAgents: Agent[] = [
  {
    id: 1,
    name: "Scraper Agent",
    type: "Collection",
    status: "active",
    lastRun: "Il y a 5 minutes",
    leads: 342,
    campaigns: 3,
  },
  {
    id: 2,
    name: "Cleaner Agent",
    type: "Traitement",
    status: "active",
    lastRun: "Il y a 12 minutes",
    leads: 342,
    campaigns: 3,
  },
  {
    id: 3,
    name: "Pivot Agent",
    type: "Analyse",
    status: "active",
    lastRun: "Il y a 30 minutes",
    leads: null,
    campaigns: 5,
  },
  {
    id: 4,
    name: "Analytics Agent",
    type: "Analyse",
    status: "error",
    lastRun: "Il y a 1 heure",
    leads: null,
    campaigns: 8,
  },
  {
    id: 5,
    name: "Outreach Agent",
    type: "Communication",
    status: "active",
    lastRun: "Il y a 15 minutes",
    leads: 128,
    campaigns: 4,
  },
  {
    id: 6,
    name: "Monitoring Agent",
    type: "Surveillance",
    status: "warning",
    lastRun: "Il y a 45 minutes",
    leads: null,
    campaigns: 8,
  },
  {
    id: 7,
    name: "Integration Agent",
    type: "Intégration",
    status: "inactive",
    lastRun: "Il y a 2 jours",
    leads: null,
    campaigns: 0,
  },
]

// Logs mockés pour les agents
const mockAgentLogs: Record<number, AgentLog[]> = {
  4: [
    {
      timestamp: "2023-06-10 16:20:45",
      level: "error",
      message: "Erreur lors de l'analyse des données : API timeout",
      details: {
        errorCode: "API_TIMEOUT",
        endpoint: "https://api.example.com/data",
        responseTime: 30000,
      },
    },
    {
      timestamp: "2023-06-10 16:21:00",
      level: "info",
      message: "Tentative de reconnexion à l'API",
    },
    {
      timestamp: "2023-06-10 16:21:30",
      level: "error",
      message: "Échec de la reconnexion à l'API",
      details: {
        errorCode: "CONNECTION_FAILED",
        endpoint: "https://api.example.com/data",
        attempts: 3,
      },
    },
  ],
  6: [
    {
      timestamp: "2023-06-10 16:30:00",
      level: "warning",
      message: "Le taux de réponse pour la campagne 'Consultants RH Lille' est inférieur au seuil défini",
      details: {
        campaign: "Consultants RH Lille",
        currentRate: 3.2,
        threshold: 5.0,
      },
    },
  ],
}

/**
 * Service de gestion des agents IA
 */
class AgentsService {
  /**
   * Récupère la liste des agents
   */
  async getAgents(filters?: any): Promise<ApiResponse<Agent[]>> {
    // Filtrer les agents selon les critères (si fournis)
    let filteredAgents = [...mockAgents]

    if (filters) {
      if (filters.status && filters.status !== "all") {
        filteredAgents = filteredAgents.filter((a) => a.status === filters.status)
      }

      if (filters.type) {
        filteredAgents = filteredAgents.filter((a) => a.type === filters.type)
      }

      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filteredAgents = filteredAgents.filter((a) => a.name.toLowerCase().includes(searchLower))
      }
    }

    return api.get<Agent[]>("/agents", filteredAgents)
  }

  /**
   * Récupère les détails d'un agent spécifique
   */
  async getAgent(id: number): Promise<ApiResponse<Agent>> {
    const agent = mockAgents.find((a) => a.id === id)

    if (!agent) {
      throw new Error("Agent non trouvé")
    }

    return api.get<Agent>(`/agents/${id}`, agent)
  }

  /**
   * Redémarre un agent en erreur
   */
  async restartAgent(id: number, options?: AgentRestartRequest): Promise<ApiResponse<Agent>> {
    const agentIndex = mockAgents.findIndex((a) => a.id === id)

    if (agentIndex === -1) {
      throw new Error("Agent non trouvé")
    }

    const agent = mockAgents[agentIndex]

    // Vérifier si l'agent est déjà actif
    if (agent.status === "active" && !options?.force) {
      throw new Error("L'agent est déjà actif")
    }

    // Mettre à jour le statut de l'agent
    const updatedAgent: Agent = {
      ...agent,
      status: "active",
      lastRun: "À l'instant",
    }

    return api.post<Agent>(`/agents/${id}/restart`, options, updatedAgent)
  }

  /**
   * Récupère les logs d'un agent
   */
  async getAgentLogs(id: number, filters?: any): Promise<ApiResponse<AgentLog[]>> {
    const agent = mockAgents.find((a) => a.id === id)

    if (!agent) {
      throw new Error("Agent non trouvé")
    }

    // Récupérer les logs de l'agent
    const logs = mockAgentLogs[id] || []

    // Filtrer les logs selon les critères (si fournis)
    let filteredLogs = [...logs]

    if (filters) {
      if (filters.level && filters.level !== "all") {
        filteredLogs = filteredLogs.filter((l) => l.level === filters.level)
      }

      if (filters.date) {
        filteredLogs = filteredLogs.filter((l) => l.timestamp.startsWith(filters.date))
      }

      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filteredLogs = filteredLogs.filter((l) => l.message.toLowerCase().includes(searchLower))
      }
    }

    return api.get<AgentLog[]>(`/agents/${id}/logs`, filteredLogs)
  }
}

export const agentsService = new AgentsService()
