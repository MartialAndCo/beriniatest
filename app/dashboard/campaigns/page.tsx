import { Bot, Clock, Download, Edit, Eye, MoreHorizontal, Play, Plus, Trash2, RefreshCw } from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CampaignsPage() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Campagnes</h2>
          <p className="text-muted-foreground">Gérez vos campagnes d'automatisation et suivez leurs performances.</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200">
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle campagne
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Rechercher une campagne..." className="max-w-sm" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Filtres</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuLabel>Filtrer par statut</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Actives</DropdownMenuItem>
            <DropdownMenuItem>En pause</DropdownMenuItem>
            <DropdownMenuItem>Terminées</DropdownMenuItem>
            <DropdownMenuItem>En erreur</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filtrer par niche</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Immobilier</DropdownMenuItem>
            <DropdownMenuItem>Juridique</DropdownMenuItem>
            <DropdownMenuItem>Architecture</DropdownMenuItem>
            <DropdownMenuItem>Ressources Humaines</DropdownMenuItem>
            <DropdownMenuItem>Santé</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="active">Actives</TabsTrigger>
          <TabsTrigger value="paused">En pause</TabsTrigger>
          <TabsTrigger value="completed">Terminées</TabsTrigger>
          <TabsTrigger value="error">En erreur</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="py-4">
              <CardTitle>Liste des campagnes</CardTitle>
              <CardDescription>Toutes vos campagnes d'automatisation</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Niche</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Leads</TableHead>
                    <TableHead>Taux de conversion</TableHead>
                    <TableHead>Date de lancement</TableHead>
                    <TableHead>Agent assigné</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
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
                  ].map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.name}</TableCell>
                      <TableCell>{campaign.niche}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            campaign.status === "active"
                              ? "default"
                              : campaign.status === "paused"
                                ? "outline"
                                : campaign.status === "completed"
                                  ? "secondary"
                                  : campaign.status === "warning"
                                    ? "warning"
                                    : "destructive"
                          }
                          className={
                            campaign.status === "active"
                              ? "bg-green-500 hover:bg-green-600"
                              : campaign.status === "warning"
                                ? "bg-yellow-500 hover:bg-yellow-600"
                                : ""
                          }
                        >
                          {campaign.status === "active"
                            ? "Active"
                            : campaign.status === "paused"
                              ? "En pause"
                              : campaign.status === "completed"
                                ? "Terminée"
                                : campaign.status === "warning"
                                  ? "Avertissement"
                                  : "Erreur"}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.leads}</TableCell>
                      <TableCell>{campaign.conversion}%</TableCell>
                      <TableCell>{campaign.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-muted-foreground" />
                          <span>{campaign.agent}</span>
                        </div>
                      </TableCell>
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
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {campaign.status === "active" ? (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                Mettre en pause
                              </DropdownMenuItem>
                            ) : campaign.status === "paused" ? (
                              <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                Reprendre
                              </DropdownMenuItem>
                            ) : null}
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Exporter les leads
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 dark:text-red-400">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between py-4">
              <div className="text-sm text-muted-foreground">Affichage de 8 campagnes sur 8</div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Précédent
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Suivant
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campagnes actives</CardTitle>
              <CardDescription>Campagnes en cours d'exécution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Agences immobilières Paris", progress: 78, status: "active" },
                  { name: "Avocats d'affaires Lyon", progress: 45, status: "active" },
                  { name: "Architectes Bordeaux", progress: 92, status: "active" },
                  { name: "Consultants RH Lille", progress: 24, status: "warning" },
                  { name: "Cliniques vétérinaires", progress: 62, status: "active" },
                ].map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            campaign.status === "active"
                              ? "bg-green-500"
                              : campaign.status === "warning"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        <span className="font-medium">{campaign.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{campaign.progress}%</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Clock className="mr-2 h-4 w-4" />
                              Mettre en pause
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="paused" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campagnes en pause</CardTitle>
              <CardDescription>Campagnes temporairement suspendues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[{ name: "Restaurants gastronomiques", progress: 50, status: "paused" }].map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-gray-500" />
                        <span className="font-medium">{campaign.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{campaign.progress}%</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Play className="mr-2 h-4 w-4" />
                              Reprendre
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campagnes terminées</CardTitle>
              <CardDescription>Campagnes complétées avec succès</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[{ name: "Écoles de langues", progress: 100, status: "completed" }].map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="font-medium">{campaign.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{campaign.progress}%</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Exporter les leads
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="error" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campagnes en erreur</CardTitle>
              <CardDescription>Campagnes ayant rencontré des problèmes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[{ name: "Agences de voyage", progress: 30, status: "error" }].map((campaign) => (
                  <div key={campaign.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="font-medium">{campaign.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{campaign.progress}%</span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Relancer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <Progress value={campaign.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
