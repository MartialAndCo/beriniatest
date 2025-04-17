import { ArrowDown, ArrowUp, BarChart3, Globe, MoreHorizontal, Plus, RefreshCw, Zap } from "lucide-react"
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
import { NichePerformanceChart } from "@/components/dashboard/niche-performance-chart"

export default function NichesPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Niches</h2>
          <p className="text-muted-foreground">Analysez les performances des niches et suivez les recommandations.</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200">
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle niche
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Rechercher une niche..." className="max-w-sm" />
        <Button variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualiser
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Toutes</TabsTrigger>
          <TabsTrigger value="profitable">Rentables</TabsTrigger>
          <TabsTrigger value="testing">En test</TabsTrigger>
          <TabsTrigger value="abandoned">Abandonnées</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Niches analysées</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">3 niches rentables identifiées</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taux de conversion moyen</CardTitle>
                <div className="rounded-md bg-green-100 dark:bg-green-900 p-1">
                  <ArrowUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6.8%</div>
                <p className="text-xs text-muted-foreground">+1.2% par rapport au mois dernier</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Coût par lead moyen</CardTitle>
                <div className="rounded-md bg-green-100 dark:bg-green-900 p-1">
                  <ArrowDown className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.35€</div>
                <p className="text-xs text-muted-foreground">-0.45€ par rapport au mois dernier</p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Décisions de pivot</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">2 pivots ce mois-ci</p>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Performance des niches</CardTitle>
              <CardDescription>Comparaison des taux de conversion et coûts par lead</CardDescription>
            </CardHeader>
            <CardContent>
              <NichePerformanceChart />
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader className="py-4">
              <CardTitle>Liste des niches</CardTitle>
              <CardDescription>Toutes les niches analysées et leur performance</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Campagnes</TableHead>
                    <TableHead>Leads</TableHead>
                    <TableHead>Taux de conversion</TableHead>
                    <TableHead>Coût par lead</TableHead>
                    <TableHead>Recommandation</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: 1,
                      name: "Immobilier",
                      status: "profitable",
                      campaigns: 2,
                      leads: 440,
                      conversion: 7.8,
                      cpl: 1.85,
                      recommendation: "continue",
                    },
                    {
                      id: 2,
                      name: "Juridique",
                      status: "profitable",
                      campaigns: 1,
                      leads: 215,
                      conversion: 5.2,
                      cpl: 2.1,
                      recommendation: "continue",
                    },
                    {
                      id: 3,
                      name: "Architecture",
                      status: "profitable",
                      campaigns: 1,
                      leads: 189,
                      conversion: 9.1,
                      cpl: 1.65,
                      recommendation: "scale",
                    },
                    {
                      id: 4,
                      name: "Ressources Humaines",
                      status: "testing",
                      campaigns: 1,
                      leads: 78,
                      conversion: 3.2,
                      cpl: 3.45,
                      recommendation: "optimize",
                    },
                    {
                      id: 5,
                      name: "Santé",
                      status: "testing",
                      campaigns: 1,
                      leads: 156,
                      conversion: 6.5,
                      cpl: 2.25,
                      recommendation: "continue",
                    },
                    {
                      id: 6,
                      name: "Restauration",
                      status: "testing",
                      campaigns: 1,
                      leads: 98,
                      conversion: 4.8,
                      cpl: 2.75,
                      recommendation: "optimize",
                    },
                    {
                      id: 7,
                      name: "Éducation",
                      status: "abandoned",
                      campaigns: 1,
                      leads: 245,
                      conversion: 2.3,
                      cpl: 4.85,
                      recommendation: "pivot",
                    },
                    {
                      id: 8,
                      name: "Tourisme",
                      status: "abandoned",
                      campaigns: 1,
                      leads: 45,
                      conversion: 2.1,
                      cpl: 5.2,
                      recommendation: "pivot",
                    },
                  ].map((niche) => (
                    <TableRow key={niche.id}>
                      <TableCell className="font-medium">{niche.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            niche.status === "profitable"
                              ? "default"
                              : niche.status === "testing"
                                ? "outline"
                                : "secondary"
                          }
                          className={niche.status === "profitable" ? "bg-green-500 hover:bg-green-600" : ""}
                        >
                          {niche.status === "profitable"
                            ? "Rentable"
                            : niche.status === "testing"
                              ? "En test"
                              : "Abandonnée"}
                        </Badge>
                      </TableCell>
                      <TableCell>{niche.campaigns}</TableCell>
                      <TableCell>{niche.leads}</TableCell>
                      <TableCell>{niche.conversion}%</TableCell>
                      <TableCell>{niche.cpl}€</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            niche.recommendation === "scale"
                              ? "border-green-500 text-green-500"
                              : niche.recommendation === "continue"
                                ? "border-blue-500 text-blue-500"
                                : niche.recommendation === "optimize"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-red-500 text-red-500"
                          }
                        >
                          {niche.recommendation === "scale"
                            ? "Développer"
                            : niche.recommendation === "continue"
                              ? "Continuer"
                              : niche.recommendation === "optimize"
                                ? "Optimiser"
                                : "Pivoter"}
                        </Badge>
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
                              <BarChart3 className="mr-2 h-4 w-4" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Globe className="mr-2 h-4 w-4" />
                              Voir les campagnes
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Zap className="mr-2 h-4 w-4" />
                              Appliquer la recommandation
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
        <TabsContent value="profitable" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Niches rentables</CardTitle>
              <CardDescription>Niches avec un bon retour sur investissement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    name: "Immobilier",
                    campaigns: 2,
                    leads: 440,
                    conversion: 7.8,
                    cpl: 1.85,
                    recommendation: "continue",
                  },
                  {
                    name: "Juridique",
                    campaigns: 1,
                    leads: 215,
                    conversion: 5.2,
                    cpl: 2.1,
                    recommendation: "continue",
                  },
                  {
                    name: "Architecture",
                    campaigns: 1,
                    leads: 189,
                    conversion: 9.1,
                    cpl: 1.65,
                    recommendation: "scale",
                  },
                ].map((niche) => (
                  <div key={niche.name} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="font-medium">{niche.name}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          niche.recommendation === "scale"
                            ? "border-green-500 text-green-500"
                            : "border-blue-500 text-blue-500"
                        }
                      >
                        {niche.recommendation === "scale" ? "Développer" : "Continuer"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Campagnes</span>
                        <span className="font-medium">{niche.campaigns}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Leads</span>
                        <span className="font-medium">{niche.leads}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Conversion</span>
                        <span className="font-medium">{niche.conversion}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">
                        Coût par lead: <strong>{niche.cpl}€</strong>
                      </span>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-2 h-3 w-3" />
                        Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="testing" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Niches en test</CardTitle>
              <CardDescription>Niches en cours d'évaluation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    name: "Ressources Humaines",
                    campaigns: 1,
                    leads: 78,
                    conversion: 3.2,
                    cpl: 3.45,
                    recommendation: "optimize",
                  },
                  {
                    name: "Santé",
                    campaigns: 1,
                    leads: 156,
                    conversion: 6.5,
                    cpl: 2.25,
                    recommendation: "continue",
                  },
                  {
                    name: "Restauration",
                    campaigns: 1,
                    leads: 98,
                    conversion: 4.8,
                    cpl: 2.75,
                    recommendation: "optimize",
                  },
                ].map((niche) => (
                  <div key={niche.name} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <span className="font-medium">{niche.name}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          niche.recommendation === "continue"
                            ? "border-blue-500 text-blue-500"
                            : "border-yellow-500 text-yellow-500"
                        }
                      >
                        {niche.recommendation === "continue" ? "Continuer" : "Optimiser"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Campagnes</span>
                        <span className="font-medium">{niche.campaigns}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Leads</span>
                        <span className="font-medium">{niche.leads}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Conversion</span>
                        <span className="font-medium">{niche.conversion}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">
                        Coût par lead: <strong>{niche.cpl}€</strong>
                      </span>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-2 h-3 w-3" />
                        Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="abandoned" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Niches abandonnées</CardTitle>
              <CardDescription>Niches non rentables ou pivotées</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    name: "Éducation",
                    campaigns: 1,
                    leads: 245,
                    conversion: 2.3,
                    cpl: 4.85,
                    recommendation: "pivot",
                    pivotDate: "15/05/2023",
                    reason: "Taux de conversion trop faible",
                  },
                  {
                    name: "Tourisme",
                    campaigns: 1,
                    leads: 45,
                    conversion: 2.1,
                    cpl: 5.2,
                    recommendation: "pivot",
                    pivotDate: "20/05/2023",
                    reason: "Coût par lead trop élevé",
                  },
                ].map((niche) => (
                  <div key={niche.name} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <span className="font-medium">{niche.name}</span>
                      </div>
                      <Badge variant="outline" className="border-red-500 text-red-500">
                        Pivoter
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Campagnes</span>
                        <span className="font-medium">{niche.campaigns}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Leads</span>
                        <span className="font-medium">{niche.leads}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Conversion</span>
                        <span className="font-medium">{niche.conversion}%</span>
                      </div>
                    </div>
                    <div className="mt-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-md border border-red-100 dark:border-red-800">
                      <p className="text-sm font-medium text-red-800 dark:text-red-300">Décision de pivot</p>
                      <p className="text-xs text-red-700 dark:text-red-400">
                        Date: {niche.pivotDate} • Raison: {niche.reason}
                      </p>
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
