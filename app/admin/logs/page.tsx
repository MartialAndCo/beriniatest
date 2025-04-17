import { Bot, Calendar, Download, RefreshCw, Search, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function LogsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tests & Logs</h2>
          <p className="text-muted-foreground">Consultez les logs système et des agents.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Période
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200">
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualiser
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher dans les logs..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type de log" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les logs</SelectItem>
            <SelectItem value="info">Information</SelectItem>
            <SelectItem value="warning">Avertissement</SelectItem>
            <SelectItem value="error">Erreur</SelectItem>
            <SelectItem value="success">Succès</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les sources</SelectItem>
            <SelectItem value="system">Système</SelectItem>
            <SelectItem value="agent">Agents</SelectItem>
            <SelectItem value="cron">Tâches planifiées</SelectItem>
            <SelectItem value="api">API</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Tous les logs</TabsTrigger>
          <TabsTrigger value="system">Système</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
          <TabsTrigger value="errors">Erreurs</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Journal d'activité</CardTitle>
              <CardDescription>Tous les logs système et des agents</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full rounded-md border">
                <div className="p-4 space-y-4">
                  {[
                    {
                      timestamp: "2023-06-10 15:45:23",
                      level: "info",
                      source: "system",
                      message: "Démarrage du système BerinIA",
                    },
                    {
                      timestamp: "2023-06-10 15:45:25",
                      level: "info",
                      source: "system",
                      message: "Connexion à la base de données établie",
                    },
                    {
                      timestamp: "2023-06-10 15:45:30",
                      level: "info",
                      source: "agent",
                      agent: "Scraper Agent",
                      message: "Démarrage de la collecte pour la campagne 'Agences immobilières Paris'",
                    },
                    {
                      timestamp: "2023-06-10 15:50:45",
                      level: "success",
                      source: "agent",
                      agent: "Scraper Agent",
                      message: "Collecte terminée : 120 leads trouvés pour 'Agences immobilières Paris'",
                    },
                    {
                      timestamp: "2023-06-10 15:51:00",
                      level: "info",
                      source: "agent",
                      agent: "Cleaner Agent",
                      message: "Démarrage du nettoyage des leads pour 'Agences immobilières Paris'",
                    },
                    {
                      timestamp: "2023-06-10 15:55:30",
                      level: "success",
                      source: "agent",
                      agent: "Cleaner Agent",
                      message: "Nettoyage terminé : 120 leads traités, 0 doublons trouvés",
                    },
                    {
                      timestamp: "2023-06-10 16:00:00",
                      level: "info",
                      source: "cron",
                      message: "Exécution de la tâche planifiée : mise à jour des statistiques",
                    },
                    {
                      timestamp: "2023-06-10 16:15:00",
                      level: "info",
                      source: "agent",
                      agent: "Analytics Agent",
                      message: "Démarrage de l'analyse des données pour toutes les campagnes",
                    },
                    {
                      timestamp: "2023-06-10 16:20:45",
                      level: "error",
                      source: "agent",
                      agent: "Analytics Agent",
                      message: "Erreur lors de l'analyse des données : API timeout",
                    },
                    {
                      timestamp: "2023-06-10 16:21:00",
                      level: "info",
                      source: "system",
                      message: "Tentative de reconnexion à l'API",
                    },
                    {
                      timestamp: "2023-06-10 16:21:30",
                      level: "error",
                      source: "system",
                      message: "Échec de la reconnexion à l'API",
                    },
                    {
                      timestamp: "2023-06-10 16:30:00",
                      level: "warning",
                      source: "agent",
                      agent: "Monitoring Agent",
                      message:
                        "Le taux de réponse pour la campagne 'Consultants RH Lille' est inférieur au seuil défini",
                    },
                    {
                      timestamp: "2023-06-10 16:45:00",
                      level: "info",
                      source: "agent",
                      agent: "Pivot Agent",
                      message: "Analyse des performances des niches en cours",
                    },
                    {
                      timestamp: "2023-06-10 16:50:15",
                      level: "success",
                      source: "agent",
                      agent: "Pivot Agent",
                      message: "Recommandation générée : développer la niche 'Architectes Bordeaux'",
                    },
                    {
                      timestamp: "2023-06-10 17:00:00",
                      level: "info",
                      source: "system",
                      message: "Génération du rapport quotidien",
                    },
                  ].map((log, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div
                        className={`mt-0.5 rounded-full p-1 ${
                          log.level === "info"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : log.level === "success"
                              ? "bg-green-100 dark:bg-green-900"
                              : log.level === "warning"
                                ? "bg-yellow-100 dark:bg-yellow-900"
                                : "bg-red-100 dark:bg-red-900"
                        }`}
                      >
                        {log.source === "agent" ? (
                          <Bot
                            className={`h-3 w-3 ${
                              log.level === "info"
                                ? "text-blue-600 dark:text-blue-400"
                                : log.level === "success"
                                  ? "text-green-600 dark:text-green-400"
                                  : log.level === "warning"
                                    ? "text-yellow-600 dark:text-yellow-400"
                                    : "text-red-600 dark:text-red-400"
                            }`}
                          />
                        ) : (
                          <Terminal
                            className={`h-3 w-3 ${
                              log.level === "info"
                                ? "text-blue-600 dark:text-blue-400"
                                : log.level === "success"
                                  ? "text-green-600 dark:text-green-400"
                                  : log.level === "warning"
                                    ? "text-yellow-600 dark:text-yellow-400"
                                    : "text-red-600 dark:text-red-400"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-2">{log.timestamp}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              log.level === "info"
                                ? "border-blue-500 text-blue-500"
                                : log.level === "success"
                                  ? "border-green-500 text-green-500"
                                  : log.level === "warning"
                                    ? "border-yellow-500 text-yellow-500"
                                    : "border-red-500 text-red-500"
                            }`}
                          >
                            {log.level === "info"
                              ? "INFO"
                              : log.level === "success"
                                ? "SUCCÈS"
                                : log.level === "warning"
                                  ? "AVERTISSEMENT"
                                  : "ERREUR"}
                          </Badge>
                          {log.source && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              {log.source === "agent"
                                ? "AGENT"
                                : log.source === "system"
                                  ? "SYSTÈME"
                                  : log.source === "cron"
                                    ? "CRON"
                                    : "API"}
                            </Badge>
                          )}
                          {log.agent && (
                            <span className="ml-2 text-xs font-medium text-muted-foreground">{log.agent}</span>
                          )}
                        </div>
                        <p className="text-sm mt-1">{log.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="system" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Logs système</CardTitle>
              <CardDescription>Logs du système BerinIA</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full rounded-md border">
                <div className="p-4 space-y-4">
                  {[
                    {
                      timestamp: "2023-06-10 15:45:23",
                      level: "info",
                      message: "Démarrage du système BerinIA",
                    },
                    {
                      timestamp: "2023-06-10 15:45:25",
                      level: "info",
                      message: "Connexion à la base de données établie",
                    },
                    {
                      timestamp: "2023-06-10 16:00:00",
                      level: "info",
                      message: "Exécution de la tâche planifiée : mise à jour des statistiques",
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
                    },
                    {
                      timestamp: "2023-06-10 17:00:00",
                      level: "info",
                      message: "Génération du rapport quotidien",
                    },
                  ].map((log, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div
                        className={`mt-0.5 rounded-full p-1 ${
                          log.level === "info"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : log.level === "success"
                              ? "bg-green-100 dark:bg-green-900"
                              : log.level === "warning"
                                ? "bg-yellow-100 dark:bg-yellow-900"
                                : "bg-red-100 dark:bg-red-900"
                        }`}
                      >
                        <Terminal
                          className={`h-3 w-3 ${
                            log.level === "info"
                              ? "text-blue-600 dark:text-blue-400"
                              : log.level === "success"
                                ? "text-green-600 dark:text-green-400"
                                : log.level === "warning"
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-red-600 dark:text-red-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-2">{log.timestamp}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              log.level === "info"
                                ? "border-blue-500 text-blue-500"
                                : log.level === "success"
                                  ? "border-green-500 text-green-500"
                                  : log.level === "warning"
                                    ? "border-yellow-500 text-yellow-500"
                                    : "border-red-500 text-red-500"
                            }`}
                          >
                            {log.level === "info"
                              ? "INFO"
                              : log.level === "success"
                                ? "SUCCÈS"
                                : log.level === "warning"
                                  ? "AVERTISSEMENT"
                                  : "ERREUR"}
                          </Badge>
                          <Badge variant="secondary" className="ml-2 text-xs">
                            SYSTÈME
                          </Badge>
                        </div>
                        <p className="text-sm mt-1">{log.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="agents" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Logs des agents</CardTitle>
              <CardDescription>Activité des agents IA</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full rounded-md border">
                <div className="p-4 space-y-4">
                  {[
                    {
                      timestamp: "2023-06-10 15:45:30",
                      level: "info",
                      agent: "Scraper Agent",
                      message: "Démarrage de la collecte pour la campagne 'Agences immobilières Paris'",
                    },
                    {
                      timestamp: "2023-06-10 15:50:45",
                      level: "success",
                      agent: "Scraper Agent",
                      message: "Collecte terminée : 120 leads trouvés pour 'Agences immobilières Paris'",
                    },
                    {
                      timestamp: "2023-06-10 15:51:00",
                      level: "info",
                      agent: "Cleaner Agent",
                      message: "Démarrage du nettoyage des leads pour 'Agences immobilières Paris'",
                    },
                    {
                      timestamp: "2023-06-10 15:55:30",
                      level: "success",
                      agent: "Cleaner Agent",
                      message: "Nettoyage terminé : 120 leads traités, 0 doublons trouvés",
                    },
                    {
                      timestamp: "2023-06-10 16:15:00",
                      level: "info",
                      agent: "Analytics Agent",
                      message: "Démarrage de l'analyse des données pour toutes les campagnes",
                    },
                    {
                      timestamp: "2023-06-10 16:20:45",
                      level: "error",
                      agent: "Analytics Agent",
                      message: "Erreur lors de l'analyse des données : API timeout",
                    },
                    {
                      timestamp: "2023-06-10 16:30:00",
                      level: "warning",
                      agent: "Monitoring Agent",
                      message:
                        "Le taux de réponse pour la campagne 'Consultants RH Lille' est inférieur au seuil défini",
                    },
                    {
                      timestamp: "2023-06-10 16:45:00",
                      level: "info",
                      agent: "Pivot Agent",
                      message: "Analyse des performances des niches en cours",
                    },
                    {
                      timestamp: "2023-06-10 16:50:15",
                      level: "success",
                      agent: "Pivot Agent",
                      message: "Recommandation générée : développer la niche 'Architectes Bordeaux'",
                    },
                  ].map((log, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div
                        className={`mt-0.5 rounded-full p-1 ${
                          log.level === "info"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : log.level === "success"
                              ? "bg-green-100 dark:bg-green-900"
                              : log.level === "warning"
                                ? "bg-yellow-100 dark:bg-yellow-900"
                                : "bg-red-100 dark:bg-red-900"
                        }`}
                      >
                        <Bot
                          className={`h-3 w-3 ${
                            log.level === "info"
                              ? "text-blue-600 dark:text-blue-400"
                              : log.level === "success"
                                ? "text-green-600 dark:text-green-400"
                                : log.level === "warning"
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-red-600 dark:text-red-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-2">{log.timestamp}</span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              log.level === "info"
                                ? "border-blue-500 text-blue-500"
                                : log.level === "success"
                                  ? "border-green-500 text-green-500"
                                  : log.level === "warning"
                                    ? "border-yellow-500 text-yellow-500"
                                    : "border-red-500 text-red-500"
                            }`}
                          >
                            {log.level === "info"
                              ? "INFO"
                              : log.level === "success"
                                ? "SUCCÈS"
                                : log.level === "warning"
                                  ? "AVERTISSEMENT"
                                  : "ERREUR"}
                          </Badge>
                          <Badge variant="secondary" className="ml-2 text-xs">
                            AGENT
                          </Badge>
                          <span className="ml-2 text-xs font-medium text-muted-foreground">{log.agent}</span>
                        </div>
                        <p className="text-sm mt-1">{log.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="errors" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Logs d'erreurs</CardTitle>
              <CardDescription>Erreurs système et des agents</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-full rounded-md border">
                <div className="p-4 space-y-4">
                  {[
                    {
                      timestamp: "2023-06-10 16:20:45",
                      level: "error",
                      source: "agent",
                      agent: "Analytics Agent",
                      message: "Erreur lors de l'analyse des données : API timeout",
                    },
                    {
                      timestamp: "2023-06-10 16:21:30",
                      level: "error",
                      source: "system",
                      message: "Échec de la reconnexion à l'API",
                    },
                    {
                      timestamp: "2023-06-09 14:15:22",
                      level: "error",
                      source: "agent",
                      agent: "Scraper Agent",
                      message: "Erreur lors de la collecte : limite de requêtes atteinte",
                    },
                    {
                      timestamp: "2023-06-08 09:30:15",
                      level: "error",
                      source: "system",
                      message: "Erreur de connexion à la base de données",
                    },
                    {
                      timestamp: "2023-06-07 17:45:33",
                      level: "error",
                      source: "agent",
                      agent: "Outreach Agent",
                      message: "Erreur lors de l'envoi d'emails : quota SMTP dépassé",
                    },
                  ].map((log, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="mt-0.5 rounded-full p-1 bg-red-100 dark:bg-red-900">
                        {log.source === "agent" ? (
                          <Bot className="h-3 w-3 text-red-600 dark:text-red-400" />
                        ) : (
                          <Terminal className="h-3 w-3 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-2">{log.timestamp}</span>
                          <Badge variant="outline" className="text-xs border-red-500 text-red-500">
                            ERREUR
                          </Badge>
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {log.source === "agent" ? "AGENT" : "SYSTÈME"}
                          </Badge>
                          {log.agent && (
                            <span className="ml-2 text-xs font-medium text-muted-foreground">{log.agent}</span>
                          )}
                        </div>
                        <p className="text-sm mt-1">{log.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
