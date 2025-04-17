/**
 * Service de gestion des campagnes
 *
 * Gère toutes les opérations liées aux campagnes marketing.
 */

import { api, type ApiResponse, type PaginatedResponse } from "../api"

// Types
export interface Campaign {
  id: number
  name: string
  niche: string
  status: "active" | "paused" | "completed" | "warning" | "error"
  leads: number
  conversion: number
  date: string
  agent: string
  progress: number
}

export interface CampaignCreateRequest {
  name: string
  niche: string
  description?: string
  targetLeads?: number
  agent?: string
}

export interface CampaignUpdateRequest {
  name?: string
  description?: string
  status?: "active" | "paused"
  targetLeads?: number
  agent?: string
}

// Données mockées
const mockCampaigns: Campaign[] = [
  {
    id: 1,
    name: "Agences immobilières Paris",
    niche: "Immobilier",
    status: "active",
    leads: 342,
    conversion: 7.8,
    date: "01/05/2023",
    agent: "Scraper Agent",
    progress: 78,
  },
  {
    id: 2,
    name: "Avocats d'affaires Lyon",
    niche: "Juridique",
    status: "active",
    leads: 215,
    conversion: 5.2,
    date: "15/05/2023",
    agent: "Scraper Agent",
    progress: 45,
  },
  {
    id: 3,
    name: "Architectes Bordeaux",
    niche: "Architecture",
    status: "active",
    leads: 189,
    conversion: 9.1,
    date: "10/05/2023",
    agent: "Scraper Agent",
    progress: 92,
  },
  {
    id: 4,
    name: "Consultants RH Lille",
    niche: "Ressources Humaines",
    status: "warning",
    leads: 78,
    conversion: 3.2,
    date: "20/05/2023",
    agent: "Scraper Agent",
    progress: 24,
  },
  {
    id: 5,
    name: "Cliniques vétérinaires",
    niche: "Santé",
    status: "active",
    leads: 156,
    conversion: 6.5,
    date: "05/05/2023",
    agent: "Scraper Agent",
    progress: 62,
  },
  {
    id: 6,
    name: "Restaurants gastronomiques",
    niche: "Restauration",
    status: "paused",
    leads: 98,
    conversion: 4.8,
    date: "25/04/2023",
    agent: "Scraper Agent",
    progress: 50,
  },
  {
    id: 7,
    name: "Écoles de langues",
    niche: "Éducation",
    status: "completed",
    leads: 245,
    conversion: 8.3,
    date: "15/04/2023",
    agent: "Scraper Agent",
    progress: 100,
  },
  {
    id: 8,
    name: "Agences de voyage",
    niche: "Tourisme",
    status: "error",
    leads: 45,
    conversion: 2.1,
    date: "10/05/2023",
    agent: "Scraper Agent",
    progress: 30,
  },
]

/**
 * Service de gestion des campagnes
 */
class CampaignsService {
  /**
   * Récupère la liste des campagnes avec pagination
   */
  async getCampaigns(page = 1, limit = 10, filters?: any): Promise<ApiResponse<PaginatedResponse<Campaign>>> {
    // Filtrer les campagnes selon les critères (si fournis)
    let filteredCampaigns = [...mockCampaigns]

    if (filters) {
      if (filters.status && filters.status !== "all") {
        filteredCampaigns = filteredCampaigns.filter((c) => c.status === filters.status)
      }

      if (filters.niche) {
        filteredCampaigns = filteredCampaigns.filter((c) => c.niche === filters.niche)
      }

      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filteredCampaigns = filteredCampaigns.filter(
          (c) => c.name.toLowerCase().includes(searchLower) || c.niche.toLowerCase().includes(searchLower),
        )
      }
    }

    // Calculer la pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedCampaigns = filteredCampaigns.slice(startIndex, endIndex)

    // Créer la réponse paginée
    const mockResponse: PaginatedResponse<Campaign> = {
      data: paginatedCampaigns,
      total: filteredCampaigns.length,
      page,
      limit,
      totalPages: Math.ceil(filteredCampaigns.length / limit),
    }

    return api.get<PaginatedResponse<Campaign>>("/campaigns", mockResponse)
  }

  /**
   * Récupère les détails d'une campagne spécifique
   */
  async getCampaign(id: number): Promise<ApiResponse<Campaign>> {
    const campaign = mockCampaigns.find((c) => c.id === id)

    if (!campaign) {
      throw new Error("Campagne non trouvée")
    }

    return api.get<Campaign>(`/campaigns/${id}`, campaign)
  }

  /**
   * Crée une nouvelle campagne
   */
  async createCampaign(campaignData: CampaignCreateRequest): Promise<ApiResponse<Campaign>> {
    // Créer une nouvelle campagne mock
    const newCampaign: Campaign = {
      id: Math.max(...mockCampaigns.map((c) => c.id)) + 1,
      name: campaignData.name,
      niche: campaignData.niche,
      status: "active",
      leads: 0,
      conversion: 0,
      date: new Date().toLocaleDateString(),
      agent: campaignData.agent || "Scraper Agent",
      progress: 0,
    }

    return api.post<Campaign>("/campaigns", campaignData, newCampaign)
  }

  /**
   * Met à jour une campagne existante
   */
  async updateCampaign(id: number, campaignData: CampaignUpdateRequest): Promise<ApiResponse<Campaign>> {
    const campaignIndex = mockCampaigns.findIndex((c) => c.id === id)

    if (campaignIndex === -1) {
      throw new Error("Campagne non trouvée")
    }

    // Mettre à jour la campagne mock
    const updatedCampaign = {
      ...mockCampaigns[campaignIndex],
      ...campaignData,
    }

    return api.put<Campaign>(`/campaigns/${id}`, campaignData, updatedCampaign)
  }

  /**
   * Supprime une campagne
   */
  async deleteCampaign(id: number): Promise<ApiResponse<void>> {
    const campaignIndex = mockCampaigns.findIndex((c) => c.id === id)

    if (campaignIndex === -1) {
      throw new Error("Campagne non trouvée")
    }

    return api.delete<void>(`/campaigns/${id}`)
  }

  /**
   * Met à jour le statut d'une campagne
   */
  async updateCampaignStatus(id: number, status: "active" | "paused"): Promise<ApiResponse<Campaign>> {
    return this.updateCampaign(id, { status })
  }
}

export const campaignsService = new CampaignsService()
