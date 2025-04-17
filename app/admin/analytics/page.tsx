import { ArrowDown, ArrowUp, BarChart3, Calendar, Download, Filter, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ConversionChart } from "@/components/dashboard/conversion-chart"
import { LeadsChart } from "@/components/dashboard/leads-chart"
import { CampaignComparisonChart } from "@/components/dashboard/campaign-comparison-chart"
import { NicheComparisonChart } from "@/components/dashboard/niche-comparison-chart"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Statistiques</h2>
          <p className="text-muted-foreground">Analysez les performances de vos campagnes et niches.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Période
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtres
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualiser
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leads collectés</CardTitle>
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-1">
              <ArrowUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground">+19% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-1">
              <ArrowUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux d'ouverture</CardTitle>
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-1">
              <ArrowUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">+4.3% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coût par lead</CardTitle>
            <div className="rounded-md bg-green-100 dark:bg-green-900 p-1">
              <ArrowDown className="h-4 w-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.35€</div>
            <p className="text-xs text-muted-foreground">-0.45€ par rapport au mois dernier</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="campaigns">Campagnes</TabsTrigger>
          <TabsTrigger value="niches">Niches</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Taux de conversion</CardTitle>
                  <CardDescription>Évolution du taux de conversion sur les 30 derniers jours</CardDescription>
                </div>
                <Select defaultValue="30d">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Période" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7 jours</SelectItem>
                    <SelectItem value="30d">30 jours</SelectItem>
                    <SelectItem value="90d">90 jours</SelectItem>
                    <SelectItem value="1y">1 an</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ConversionChart />
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Leads collectés</CardTitle>
                  <CardDescription>Nombre de leads collectés par jour</CardDescription>
                </div>
                <Select defaultValue="30d">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Période" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">7 jours</SelectItem>
                    <SelectItem value="30d">30 jours</SelectItem>
                    <SelectItem value="90d">90 jours</SelectItem>
                    <SelectItem value="1y">1 an</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <LeadsChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="campaigns" className="space-y-4">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Comparaison des campagnes</CardTitle>
                <CardDescription>Performance des campagnes actives</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Voir le détail
              </Button>
            </CardHeader>
            <CardContent>
              <CampaignComparisonChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="niches" className="space-y-4">
          <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Comparaison des niches</CardTitle>
                <CardDescription>Performance des niches par taux de conversion et coût</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Voir le détail
              </Button>
            </CardHeader>
            <CardContent>
              <NicheComparisonChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leads" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Analyse des leads</CardTitle>
              <CardDescription>Répartition et qualité des leads collectés</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                Graphiques d'analyse des leads à venir...
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
