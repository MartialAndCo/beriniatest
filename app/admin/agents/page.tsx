import { Bot, Clock, Download, Edit, Eye, MoreHorizontal, Play, Plus, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function AgentsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Agents</h2>
          <p className="text-muted-foreground">Gérez vos agents IA et suivez leur activité en temps réel.</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200">
          <Plus className="mr-2 h-4 w-4" />
          Nouvel agent
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Rechercher un agent..." className="max-w-sm" />
        <Button variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualiser
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="active">Actifs</TabsTrigger>
          <TabsTrigger value="inactive">Inactifs</TabsTrigger>
          <TabsTrigger value="error">En erreur</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card className="w-full">
            <CardHeader className="py-4">
              <CardTitle>Liste des agents</CardTitle>
              <CardDescription>Tous vos agents IA et leur statut actuel</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Dernière exécution</TableHead>
                    <TableHead>Leads traités</TableHead>
                    <TableHead>Campagnes assignées</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
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
                    {
                      id: 8,
                      name: "Reporting Agent",
                      type: "Rapport",
                      status: "active",
                      lastRun: "Il y a 1 jour",
                      leads: null,
                      campaigns: 8,
                    },
                  ].map((agent) => (
                    <TableRow key={agent.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              agent.status === "active"
                                ? "bg-green-500"
                                : agent.status === "warning"
                                  ? "bg-yellow-500"
                                  : agent.status === "error"
                                    ? "bg-red-500"
                                    : "bg-gray-500"
                            }`}
                          />
                          <span>{agent.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{agent.type}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            agent.status === "active"
                              ? "default"
                              : agent.status === "inactive"
                                ? "outline"
                                : agent.status === "warning"
                                  ? "warning"
                                  : "destructive"
                          }
                          className={
                            agent.status === "active"
                              ? "bg-green-500 hover:bg-green-600"
                              : agent.status === "warning"
                                ? "bg-yellow-500 hover:bg-yellow-600"
                                : ""
                          }
                        >
                          {agent.status === "active"
                            ? "Actif"
                            : agent.status === "inactive"
                              ? "Inactif"
                              : agent.status === "warning"
                                ? "Avertissement"
                                : "Erreur"}
                        </Badge>
                      </TableCell>
                      <TableCell>{agent.lastRun}</TableCell>
                      <TableCell>{agent.leads !== null ? agent.leads : "-"}</TableCell>
                      <TableCell>{agent.campaigns}</TableCell>
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
                              Configurer
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {agent.status === "active" ? (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                Mettre en pause
                              </DropdownMenuItem>
                            ) : agent.status === "inactive" ? (
                              <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                Activer
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Relancer
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Exporter les logs
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Agents actifs</CardTitle>
              <CardDescription>Agents actuellement en fonctionnement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Scraper Agent", type: "Collection", lastRun: "Il y a 5 minutes", leads: 342 },
                  { name: "Cleaner Agent", type: "Traitement", lastRun: "Il y a 12 minutes", leads: 342 },
                  { name: "Pivot Agent", type: "Analyse", lastRun: "Il y a 30 minutes", leads: null },
                  { name: "Outreach Agent", type: "Communication", lastRun: "Il y a 15 minutes", leads: 128 },
                  { name: "Reporting Agent", type: "Rapport", lastRun: "Il y a 1 jour", leads: null },
                ].map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {agent.type} • {agent.lastRun}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {agent.leads !== null && <div className="text-sm font-medium">{agent.leads} leads</div>}
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-3 w-3" />
                        Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Agents inactifs</CardTitle>
              <CardDescription>Agents actuellement désactivés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[{ name: "Integration Agent", type: "Intégration", lastRun: "Il y a 2 jours", leads: null }].map(
                  (agent) => (
                    <div
                      key={agent.name}
                      className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <p className="font-medium">{agent.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {agent.type} • {agent.lastRun}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                          <Play className="mr-2 h-3 w-3" />
                          Activer
                        </Button>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="error" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Agents en erreur</CardTitle>
              <CardDescription>Agents ayant rencontré des problèmes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Analytics Agent", type: "Analyse", lastRun: "Il y a 1 heure", error: "API timeout" },
                  {
                    name: "Monitoring Agent",
                    type: "Surveillance",
                    lastRun: "Il y a 45 minutes",
                    error: "Connexion perdue",
                  },
                ].map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-8 w-8 rounded-full ${agent.name === "Monitoring Agent" ? "bg-yellow-100 dark:bg-yellow-900" : "bg-red-100 dark:bg-red-900"} flex items-center justify-center`}
                      >
                        <Bot
                          className={`h-4 w-4 ${agent.name === "Monitoring Agent" ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400"}`}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {agent.type} • {agent.lastRun}
                        </p>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">Erreur: {agent.error}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-3 w-3" />
                        Relancer
                      </Button>
                    </div>
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
