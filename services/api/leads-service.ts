/**
 * Service de gestion des leads
 *
 * Gère toutes les opérations liées aux leads générés par les campagnes.
 */

import { api, type ApiResponse, type PaginatedResponse } from "../api"

// Types
export interface Lead {
  id: number
  name: string
  email: string
  phone: string
  company: string
  campaign: string
  campaignId: number
  status: "new" | "contacted" | "qualified" | "converted" | "lost"
  date: string
}

export interface LeadCreateRequest {
  name: string
  email: string
  phone?: string
  company?: string
  campaignId: number
  source?: string
  notes?: string
}

export interface LeadUpdateRequest {
  name?: string
  email?: string
  phone?: string
  company?: string
  notes?: string
}

export interface LeadStatusUpdateRequest {
  status: "new" | "contacted" | "qualified" | "converted" | "lost"
  notes?: string
}

// Données mockées
const mockLeads: Lead[] = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "06 12 34 56 78",
    company: "Immobilier Paris",
    campaign: "Agences immobilières Paris",
    campaignId: 1,
    status: "new",
    date: "01/06/2023",
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie.martin@example.com",
    phone: "06 23 45 67 89",
    company: "Cabinet Martin",
    campaign: "Avocats d'affaires Lyon",
    campaignId: 2,
    status: "contacted",
    date: "02/06/2023",
  },
  {
    id: 3,
    name: "Pierre Durand",
    email: "pierre.durand@example.com",
    phone: "06 34 56 78 90",
    company: "Durand Architecture",
    campaign: "Architectes Bordeaux",
    campaignId: 3,
    status: "qualified",
    date: "03/06/2023",
  },
  {
    id: 4,
    name: "Sophie Lefebvre",
    email: "sophie.lefebvre@example.com",
    phone: "06 45 67 89 01",
    company: "RH Conseil",
    campaign: "Consultants RH Lille",
    campaignId: 4,
    status: "converted",
    date: "04/06/2023",
  },
  {
    id: 5,
    name: "Thomas Bernard",
    email: "thomas.bernard@example.com",
    phone: "06 56 78 90 12",
    company: "Clinique Vétérinaire du Parc",
    campaign: "Cliniques vétérinaires",
    campaignId: 5,
    status: "lost",
    date: "05/06/2023",
  },
]

/**
 * Service de gestion des leads
 */
class LeadsService {
  /**
   * Récupère la liste des leads avec pagination
   */
  async getLeads(page = 1, limit = 10, filters?: any): Promise<ApiResponse<PaginatedResponse<Lead>>> {
    // Filtrer les leads selon les critères (si fournis)
    let filteredLeads = [...mockLeads]

    if (filters) {
      if (filters.status && filters.status !== "all") {
        filteredLeads = filteredLeads.filter((l) => l.status === filters.status)
      }

      if (filters.campaignId) {
        filteredLeads = filteredLeads.filter((l) => l.campaignId === Number(filters.campaignId))
      }

      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filteredLeads = filteredLeads.filter(
          (l) =>
            l.name.toLowerCase().includes(searchLower) ||
            l.email.toLowerCase().includes(searchLower) ||
            l.company.toLowerCase().includes(searchLower),
        )
      }
    }

    // Calculer la pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedLeads = filteredLeads.slice(startIndex, endIndex)

    // Créer la réponse paginée
    const mockResponse: PaginatedResponse<Lead> = {
      data: paginatedLeads,
      total: filteredLeads.length,
      page,
      limit,
      totalPages: Math.ceil(filteredLeads.length / limit),
    }

    return api.get<PaginatedResponse<Lead>>("/leads", mockResponse)
  }

  /**
   * Récupère les détails d'un lead spécifique
   */
  async getLead(id: number): Promise<ApiResponse<Lead>> {
    const lead = mockLeads.find((l) => l.id === id)

    if (!lead) {
      throw new Error("Lead non trouvé")
    }

    return api.get<Lead>(`/leads/${id}`, lead)
  }

  /**
   * Crée un nouveau lead
   */
  async createLead(leadData: LeadCreateRequest): Promise<ApiResponse<Lead>> {
    // Créer un nouveau lead mock
    const newLead: Lead = {
      id: Math.max(...mockLeads.map((l) => l.id)) + 1,
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone || "",
      company: leadData.company || "",
      campaign: "Campagne inconnue", // Normalement récupéré à partir de campaignId
      campaignId: leadData.campaignId,
      status: "new",
      date: new Date().toLocaleDateString(),
    }

    return api.post<Lead>("/leads", leadData, newLead)
  }

  /**
   * Met à jour un lead existant
   */
  async updateLead(id: number, leadData: LeadUpdateRequest): Promise<ApiResponse<Lead>> {
    const leadIndex = mockLeads.findIndex((l) => l.id === id)

    if (leadIndex === -1) {
      throw new Error("Lead non trouvé")
    }

    // Mettre à jour le lead mock
    const updatedLead = {
      ...mockLeads[leadIndex],
      ...leadData,
    }

    return api.put<Lead>(`/leads/${id}`, leadData, updatedLead)
  }

  /**
   * Met à jour le statut d'un lead
   */
  async updateLeadStatus(id: number, statusData: LeadStatusUpdateRequest): Promise<ApiResponse<Lead>> {
    const leadIndex = mockLeads.findIndex((l) => l.id === id)

    if (leadIndex === -1) {
      throw new Error("Lead non trouvé")
    }

    // Mettre à jour le statut du lead mock
    const updatedLead = {
      ...mockLeads[leadIndex],
      status: statusData.status,
    }

    return api.put<Lead>(`/leads/${id}/status`, statusData, updatedLead)
  }

  /**
   * Exporte les leads au format CSV
   */
  async exportLeads(filters?: any): Promise<ApiResponse<Blob>> {
    // Simuler un délai pour l'export
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Dans une vraie implémentation, on retournerait un Blob
    // Pour l'instant, on simule juste une réponse réussie
    return {
      data: new Blob(["mock CSV data"], { type: "text/csv" }),
      status: 200,
    }
  }
}

export const leadsService = new LeadsService()
