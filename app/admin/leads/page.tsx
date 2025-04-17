import { Download, Filter, MoreHorizontal, Search, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export default function LeadsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Leads</h2>
          <p className="text-muted-foreground">Gérez et exportez les leads collectés par vos campagnes.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter CSV
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200">
            <Send className="mr-2 h-4 w-4" />
            Envoyer vers GHL
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher un lead..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtres
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filtrer par statut</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Nouveau</DropdownMenuItem>
            <DropdownMenuItem>Contacté</DropdownMenuItem>
            <DropdownMenuItem>Qualifié</DropdownMenuItem>
            <DropdownMenuItem>Converti</DropdownMenuItem>
            <DropdownMenuItem>Perdu</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filtrer par campagne</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Agences immobilières Paris</DropdownMenuItem>
            <DropdownMenuItem>Avocats d'affaires Lyon</DropdownMenuItem>
            <DropdownMenuItem>Architectes Bordeaux</DropdownMenuItem>
            <DropdownMenuItem>Consultants RH Lille</DropdownMenuItem>
            <DropdownMenuItem>Cliniques vétérinaires</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className="w-full">
        <CardHeader className="py-4">
          <CardTitle>Liste des leads</CardTitle>
          <CardDescription>Tous les leads collectés par vos campagnes</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox />
                </TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead>Entreprise</TableHead>
                <TableHead>Campagne</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: 1,
                  name: "Jean Dupont",
                  email: "jean.dupont@example.com",
                  phone: "06 12 34 56 78",
                  company: "Immobilier Paris",
                  campaign: "Agences immobilières Paris",
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
                  status: "lost",
                  date: "05/06/2023",
                },
                {
                  id: 6,
                  name: "Julie Petit",
                  email: "julie.petit@example.com",
                  phone: "06 67 89 01 23",
                  company: "Immobilier Petit",
                  campaign: "Agences immobilières Paris",
                  status: "new",
                  date: "06/06/2023",
                },
                {
                  id: 7,
                  name: "Nicolas Moreau",
                  email: "nicolas.moreau@example.com",
                  phone: "06 78 90 12 34",
                  company: "Cabinet Moreau",
                  campaign: "Avocats d'affaires Lyon",
                  status: "contacted",
                  date: "07/06/2023",
                },
                {
                  id: 8,
                  name: "Camille Roux",
                  email: "camille.roux@example.com",
                  phone: "06 89 01 23 45",
                  company: "Roux Architecture",
                  campaign: "Architectes Bordeaux",
                  status: "qualified",
                  date: "08/06/2023",
                },
                {
                  id: 9,
                  name: "Antoine Girard",
                  email: "antoine.girard@example.com",
                  phone: "06 90 12 34 56",
                  company: "Girard RH",
                  campaign: "Consultants RH Lille",
                  status: "new",
                  date: "09/06/2023",
                },
                {
                  id: 10,
                  name: "Émilie Fournier",
                  email: "emilie.fournier@example.com",
                  phone: "06 01 23 45 67",
                  company: "Clinique Vétérinaire Fournier",
                  campaign: "Cliniques vétérinaires",
                  status: "contacted",
                  date: "10/06/2023",
                },
              ].map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.phone}</TableCell>
                  <TableCell>{lead.company}</TableCell>
                  <TableCell>{lead.campaign}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        lead.status === "new"
                          ? "default"
                          : lead.status === "contacted"
                            ? "outline"
                            : lead.status === "qualified"
                              ? "secondary"
                              : lead.status === "converted"
                                ? "success"
                                : "destructive"
                      }
                      className={
                        lead.status === "new"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : lead.status === "converted"
                            ? "bg-green-500 hover:bg-green-600"
                            : ""
                      }
                    >
                      {lead.status === "new"
                        ? "Nouveau"
                        : lead.status === "contacted"
                          ? "Contacté"
                          : lead.status === "qualified"
                            ? "Qualifié"
                            : lead.status === "converted"
                              ? "Converti"
                              : "Perdu"}
                    </Badge>
                  </TableCell>
                  <TableCell>{lead.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                        <DropdownMenuItem>Modifier</DropdownMenuMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Changer le statut</DropdownMenuItem>
                        <DropdownMenuItem>Assigner à une campagne</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">Supprimer</DropdownMenuMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between py-4">
          <div className="text-sm text-muted-foreground">Affichage de 10 leads sur 2,543</div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Précédent
            </Button>
            <Button variant="outline" size="sm">
              Suivant
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
