import Link from "next/link"
import { ArrowRight, Bot, Headphones, Zap, MessageSquare, Phone, BarChart4, CheckCircle2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedGradient from "@/components/animated-gradient"
import HeroIllustration from "@/components/hero-illustration"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section - Redesigned */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <AnimatedGradient />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="block mb-2">Automatisez votre</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                    entreprise avec l'IA
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  BerinIA transforme votre service client avec des solutions d'IA avancées : chatbots intelligents,
                  standard téléphonique automatisé et bien plus.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
                  >
                    Être recontacté
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
                  >
                    Voir une démo
                  </Button>
                </div>

                <div className="mt-12 flex items-center space-x-8">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white dark:border-gray-900 transition-transform hover:scale-110 hover:z-10">
                      <span className="text-xs font-medium">JD</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white dark:border-gray-900 transition-transform hover:scale-110 hover:z-10">
                      <span className="text-xs font-medium">ML</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white dark:border-gray-900 transition-transform hover:scale-110 hover:z-10">
                      <span className="text-xs font-medium">SB</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">500+</span> entreprises nous font confiance
                  </div>
                </div>
              </div>

              <div className="relative">
                <HeroIllustration />

                <div className="absolute -top-6 -left-6 bg-purple-500 rounded-lg p-4 shadow-lg animate-bounce-slow hidden md:flex">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-blue-500 rounded-lg p-4 shadow-lg animate-pulse hidden md:flex">
                  <Phone className="h-6 w-6 text-white" />
                </div>

                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-lg p-4 shadow-lg animate-float hidden md:flex">
                  <BarChart4 className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2 animate-count">98%</div>
                <p className="text-gray-600 dark:text-gray-300">Satisfaction client</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2 animate-count">30%</div>
                <p className="text-gray-600 dark:text-gray-300">Réduction des coûts</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-500 mb-2">24/7</div>
                <p className="text-gray-600 dark:text-gray-300">Support client</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                Fonctionnalités
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions d'automatisation IA</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez comment BerinIA peut transformer votre entreprise avec des solutions d'IA sur mesure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Bot className="h-10 w-10 text-purple-500" />}
                title="Chatbots Intelligents"
                description="Des chatbots qui comprennent réellement vos clients et résolvent leurs problèmes instantanément."
              />
              <FeatureCard
                icon={<Headphones className="h-10 w-10 text-blue-500" />}
                title="Standard Téléphonique IA"
                description="Automatisez votre standard téléphonique avec une IA qui comprend et dirige les appels avec précision."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-indigo-500" />}
                title="Automatisation des Processus"
                description="Optimisez vos flux de travail grâce à l'automatisation intelligente des tâches répétitives."
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section - NEW */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Cas d'usage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment nos clients utilisent BerinIA</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Des solutions adaptées à chaque secteur d'activité et à chaque besoin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 flex items-center justify-center mr-2">
                      1
                    </span>
                    Agences immobilières
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automatisation des réponses aux demandes de visites et qualification des prospects avec un chatbot
                    disponible 24/7.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-purple-600 dark:text-purple-400">Résultat :</span>
                    <span className="ml-2">+40% de leads qualifiés, -60% de temps passé sur les demandes basiques</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 flex items-center justify-center mr-2">
                      2
                    </span>
                    Cabinets d'avocats
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Standard téléphonique IA qui trie les appels, qualifie l'urgence et programme les rendez-vous
                    automatiquement.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-blue-600 dark:text-blue-400">Résultat :</span>
                    <span className="ml-2">Économie de 25h/semaine pour les assistants juridiques</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 flex items-center justify-center mr-2">
                      3
                    </span>
                    E-commerce
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Chatbot de support client qui gère les questions sur les commandes, les retours et les échanges sans
                    intervention humaine.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-green-600 dark:text-green-400">Résultat :</span>
                    <span className="ml-2">Réduction de 70% des tickets de support, satisfaction client à 94%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 flex items-center justify-center mr-2">
                      4
                    </span>
                    Cabinets comptables
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automatisation de la collecte de documents et des relances clients avec suivi intelligent des
                    dossiers.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-orange-600 dark:text-orange-400">Résultat :</span>
                    <span className="ml-2">Réduction de 50% du temps de gestion administrative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Testimonials Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                Témoignages
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez comment BerinIA a transformé les entreprises de nos clients.
              </p>
              <div className="flex justify-center mt-6 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-2 text-lg font-medium">Note moyenne de 4.9/5 basée sur 120+ avis</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="BerinIA a révolutionné notre service client. Notre taux de satisfaction a augmenté de 40% en seulement 3 mois, et notre équipe de 5 personnes peut désormais gérer le double de demandes."
                author="Marie Dupont"
                company="Agence Digitale 360"
                avatarUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Le standard téléphonique IA de BerinIA nous a permis d'économiser plus de 30 heures par semaine. Pour une petite structure comme la nôtre, c'est un gain de temps inestimable."
                author="Jean Martin"
                company="Cabinet Martin & Associés"
                avatarUrl="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="L'implémentation a été rapide et les résultats immédiats. Un investissement qui s'est rentabilisé en moins de 2 mois pour notre cabinet de 12 collaborateurs."
                author="Sophie Leclerc"
                company="Expertise Comptable Plus"
                avatarUrl="/placeholder.svg?height=100&width=100"
              />
            </div>

            {/* Additional Proof Points */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Résultats prouvés</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Augmentation moyenne de <strong>42%</strong> du taux de conversion des leads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Réduction de <strong>65%</strong> du temps de traitement des demandes clients
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Économie moyenne de <strong>25 000€</strong> par an sur les coûts opérationnels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>
                      Disponibilité <strong>24/7</strong> avec une réponse instantanée aux clients
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4">Ils nous font confiance</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/clients/agence-digitale-logo.png"
                      alt="Agence Digitale"
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm mt-2">Agence Digitale 360</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/clients/cabinet-conseil-logo.png"
                      alt="Cabinet Conseil"
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm mt-2">Conseil & Stratégie</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/clients/immobilier-logo.png"
                      alt="Immobilier"
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm mt-2">Immo Premium</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/clients/cabinet-avocat-logo.png"
                      alt="Cabinet d'Avocats"
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm mt-2">Cabinet Martin & Associés</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/clients/startup-tech-logo.png"
                      alt="Startup Tech"
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm mt-2">TechNova</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/clients/cabinet-comptable-logo.png"
                      alt="Cabinet Comptable"
                      className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm mt-2">Expertise Comptable Plus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 rounded-full text-sm font-medium mb-4">
                Questions fréquentes
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tout ce que vous devez savoir</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Réponses aux questions les plus fréquemment posées sur nos solutions d'IA.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    Combien de temps faut-il pour mettre en place une solution BerinIA ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      La mise en place d'une solution BerinIA prend généralement entre 2 et 4 semaines, selon la
                      complexité de votre projet. Nous commençons par une phase d'analyse de vos besoins, suivie de la
                      configuration et de la personnalisation de la solution, puis d'une période de test avant le
                      déploiement final.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    Les solutions BerinIA sont-elles adaptées aux petites entreprises ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Absolument ! Nos solutions sont conçues pour être accessibles aux entreprises de toutes tailles.
                      Nous proposons des forfaits adaptés aux besoins et aux budgets des TPE/PME, avec des options
                      évolutives qui grandissent avec votre entreprise.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    Comment vos solutions d'IA s'intègrent-elles à nos systèmes existants ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Nos solutions sont conçues pour s'intégrer facilement avec la plupart des systèmes et logiciels
                      courants. Nous proposons des connecteurs prêts à l'emploi pour les CRM populaires (Salesforce,
                      HubSpot, etc.), les plateformes de messagerie (Slack, Teams), les systèmes téléphoniques et bien
                      d'autres. Pour les systèmes spécifiques, notre équipe technique peut développer des intégrations
                      sur mesure.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    Quelles mesures prenez-vous pour protéger nos données ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      La sécurité et la confidentialité des données sont nos priorités absolues. Toutes nos solutions
                      sont conformes au RGPD et utilisent le chiffrement de bout en bout. Nous ne stockons que les
                      données nécessaires au fonctionnement du service, et vous restez propriétaire de vos données à
                      tout moment. Nos serveurs sont hébergés en France et en Europe, et nous effectuons des audits de
                      sécurité réguliers.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    Quel type de support proposez-vous après la mise en place ?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      Tous nos forfaits incluent un support technique par email et une base de connaissances complète.
                      Les forfaits Business et Enterprise bénéficient également d'un support prioritaire par téléphone
                      et d'un gestionnaire de compte dédié. Nous proposons aussi des formations pour votre équipe et des
                      rapports d'analyse mensuels pour optimiser continuellement vos solutions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
                Partenaires
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos partenaires technologiques</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Nous collaborons avec les leaders de l'industrie pour vous offrir les meilleures solutions d'IA.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                <img src="/images/partners/openai-logo.png" alt="OpenAI" className="h-16 mb-3 object-contain" />
                <span className="text-sm font-medium">OpenAI</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                <img src="/images/partners/slack-logo.png" alt="Slack" className="h-16 mb-3 object-contain" />
                <span className="text-sm font-medium">Slack</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                <img src="/images/partners/n8n-logo.png" alt="n8n" className="h-16 mb-3 object-contain" />
                <span className="text-sm font-medium">n8n</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                <img src="/images/partners/langgraph-logo.png" alt="LangGraph" className="h-16 mb-3 object-contain" />
                <span className="text-sm font-medium">LangGraph</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                <img src="/images/partners/cursor-logo.png" alt="Cursor" className="h-16 mb-3 object-contain" />
                <span className="text-sm font-medium">Cursor</span>
              </div>
              <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
                <img src="/images/partners/v0-logo.png" alt="V0.dev" className="h-16 mb-3 object-contain" />
                <span className="text-sm font-medium">V0.dev</span>
              </div>
            </div>

            <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pourquoi nous choisissons les meilleurs partenaires</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Chez BerinIA, nous intégrons les technologies les plus avancées pour créer des solutions d'IA
                    robustes et évolutives. Notre écosystème de partenaires nous permet de vous offrir :
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Des modèles d'IA de pointe avec OpenAI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Des workflows d'automatisation puissants avec n8n</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Des agents IA avancés grâce à LangGraph</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Une intégration transparente avec vos outils existants comme Slack</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl p-8">
                  <blockquote className="text-lg italic">
                    "Notre partenariat avec ces leaders technologiques nous permet d'innover constamment et d'offrir des
                    solutions d'IA qui sont toujours à la pointe de ce qui est possible."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                      <span className="font-medium">PD</span>
                    </div>
                    <div>
                      <p className="font-medium">Pierre Durand</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">CTO, BerinIA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Prêt à transformer votre entreprise ?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Rejoignez les centaines d'entreprises qui ont déjà adopté BerinIA pour automatiser leurs processus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform duration-300">
                Être recontacté par notre équipe
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/login">Se connecter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
