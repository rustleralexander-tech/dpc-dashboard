"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  BookOpen,
  Clock,
  Target,
  Building2,
  Sparkles,
  User,
  CheckCircle,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Page() {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileMenuOpen(false)
  }

  const divisions = {
    finanz: {
      title: "DPC Finanz",
      description:
        "Die DPC Finanz begleitet Mandant:innen in Finanz- und Absicherungsfragen mit Zugang zu nahezu allen Versicherern und Krankenkassen.",
    },
    invest: {
      title: "DPC Invest",
      description:
        "Die DPC Invest unterstützt Mandant:innen bei Investmentfragen – von klassisch verzinsten Anlagen bis hin zu Fonds- und ETF-Lösungen, kurz-, mittel- oder langfristig ausgerichtet.",
    },
    immo: {
      title: "DPC Immo",
      description:
        "Die DPC Immo begleitet Investitionen in Kapitalanlageimmobilien und ermöglicht Zugang zu ausgewählten Projekten mit optimiertem Aufwand-Ertrags-Verhältnis.",
    },
    hyp: {
      title: "DPC Hyp",
      description:
        "Die DPC Hyp unterstützt bei der passenden Finanzierung – mit Zugang zu nahezu allen Banken und Bausparkassen.",
    },
    real: {
      title: "DPC Real",
      description:
        "Die DPC Real ermöglicht Investitionen in nachhaltige und renditestarke Sachwerte wie Solarparks, Windkraftanlagen und zukunftsfähige Immobilien.",
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* // Added improved touch targets and overflow handling for mobile menu */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-primary/95 backdrop-blur-xl shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <button onClick={() => scrollToSection("start")} className="flex items-center gap-2 sm:gap-3 group">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 shadow-inner overflow-hidden flex-shrink-0 transition-all group-hover:scale-105">
                <img src="/images/logo.png" alt="DPC Logo" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-lg text-white hover:bg-white/10 transition-colors touch-manipulation"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 md:flex">
              <button
                onClick={() => scrollToSection("finanzbildung")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                Finanzbildung
              </button>
              <button
                onClick={() => scrollToSection("unternehmen")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToSection("arbeitsweise")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                Arbeitsweise
              </button>
              <button
                onClick={() => scrollToSection("karriere")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                Karriere
              </button>
              <button
                onClick={() => scrollToSection("bewerbertag")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                Bewerbertag
              </button>
              <button
                onClick={() => scrollToSection("erfolgsgeschichten")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                Erfolgsgeschichten
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="rounded-lg px-3 lg:px-4 py-2.5 text-sm font-medium text-primary-foreground/80 transition-all hover:bg-white/10 hover:text-primary-foreground whitespace-nowrap"
              >
                FAQs
              </button>
              <Button
                onClick={() => scrollToSection("naechste-schritte")}
                size="sm"
                className="ml-3 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
              >
                Jetzt anmelden
              </Button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-4">
              <button
                onClick={() => scrollToSection("finanzbildung")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                Finanzbildung
              </button>
              <button
                onClick={() => scrollToSection("unternehmen")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                Über uns
              </button>
              <button
                onClick={() => scrollToSection("arbeitsweise")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                Arbeitsweise
              </button>
              <button
                onClick={() => scrollToSection("karriere")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                Karriere
              </button>
              <button
                onClick={() => scrollToSection("bewerbertag")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                Bewerbertag
              </button>
              <button
                onClick={() => scrollToSection("erfolgsgeschichten")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                Erfolgsgeschichten
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="w-full text-left rounded-lg px-4 py-3 text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-primary-foreground transition-colors touch-manipulation"
              >
                FAQs
              </button>
              <Button
                onClick={() => scrollToSection("naechste-schritte")}
                size="sm"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all mt-2 touch-manipulation"
              >
                Jetzt anmelden
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* // Added break-words and improved text sizing for mobile in hero section */}
      <section id="start" className="relative min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary">
          <img
            src="/modern-professional-office-financial-consulting-te.jpg"
            alt="DPC Consulting"
            className="h-full w-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 sm:mb-10 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm px-4 sm:px-7 py-2 sm:py-4 shadow-xl">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-6 sm:w-6 fill-accent text-accent drop-shadow-lg flex-shrink-0"
                  />
                ))}
              </div>
              <span className="text-lg sm:text-2xl font-bold text-white">4.9</span>
              <span className="text-xs sm:text-sm text-white/60">|</span>
              <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">150+ Bewertungen</span>
            </div>

            <h1 className="mb-6 sm:mb-10 text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white text-balance drop-shadow-2xl break-words hyphens-auto overflow-hidden px-2">
              Werden Sie Partner der <span className="text-accent break-words">DPC Unternehmensgruppe</span>
            </h1>
            <p className="mx-auto mb-8 sm:mb-14 max-w-3xl text-base sm:text-xl lg:text-2xl text-white/90 text-balance leading-relaxed drop-shadow-lg px-4 break-words overflow-hidden">
              Bauen Sie in 12-18 Monaten Ihr eigenes Finanzberatungs-Business auf – mit bewährtem System, persönlichem
              Mentor und ohne Startkapital
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 px-4">
              <Button
                size="lg"
                asChild
                className="group w-full sm:w-auto min-h-14 sm:min-h-16 bg-accent px-6 sm:px-12 text-sm sm:text-lg font-semibold text-accent-foreground hover:bg-accent/90 shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all touch-manipulation overflow-hidden"
              >
                <a
                  href="https://calendly.com/alexanderrustler/unternehmenspraesentation?back=1&month=2025-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="break-words hyphens-auto text-center leading-tight">Zum Bewerbertag anmelden</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-2 flex-shrink-0" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("unternehmen")}
                className="w-full sm:w-auto min-h-14 sm:min-h-16 border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 sm:px-12 text-base sm:text-lg font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all touch-manipulation"
              >
                Mehr erfahren
              </Button>
            </div>

            <p className="mt-6 sm:mt-10 text-xs sm:text-sm text-white/70 px-4 break-words">
              <a
                href="https://www.provenexpert.com/de-de/dpc-unternehmensgruppe/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline transition-all"
              >
                Alle Bewertungen auf ProvenExpert ansehen
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="finanzbildung" className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 sm:mb-16 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-center text-balance">
              Finanzbildung in Deutschland
            </h2>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Die <span className="font-semibold text-foreground">ING DiBa Studie zur Finanzbildung</span> zeigt
                  deutlich: Ein Großteil der Deutschen fühlt sich im Bereich Finanzen unsicher – gleichzeitig ist der
                  Wunsch nach Orientierung enorm.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Genau hier setzen unsere Partner an: Menschen begleiten, die echte Orientierung brauchen – mit
                  Struktur, Klarheit und langfristigem Mehrwert.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/60 pt-4 border-t border-gray-200">
                  Quelle: ING DiBa Studie zur Finanzbildung
                </p>
              </div>

              {/* Right: Bar Chart Visualization */}
              <div className="lg:col-span-3 space-y-8">
                {/* Bar 1 */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">51%</span>
                    <span className="text-sm sm:text-base text-muted-foreground">der Deutschen</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-1000 ease-out" style={{width: '51%'}}></div>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium">
                    bezeichnen sich als finanzielle Analphabeten
                  </p>
                </div>

                {/* Bar 2 */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent">92%</span>
                    <span className="text-sm sm:text-base text-muted-foreground">der Deutschen</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden">
                    <div className="bg-accent h-full rounded-full transition-all duration-1000 ease-out" style={{width: '92%'}}></div>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium">
                    wünschen sich strukturierte Finanzbildung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // Improved mobile responsiveness and text wrapping in unternehmen section */}
      <section id="unternehmen" className="bg-white py-16 sm:py-24 lg:py-32 xl:py-48">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 sm:px-6 py-2 sm:py-3">
              <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">Über uns</span>
            </div>
            <h2 className="mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance break-words">
              Die DPC Unternehmensgruppe
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-balance break-words">
              Die DPC Unternehmensgruppe ist eines der führenden deutschen Finanzberatungsunternehmen und wir
              unterstützen Menschen dabei, finanzielle Freiheit zu erreichen. Wir begleiten unsere Kunden ihr Leben lang
              und setzen uns mit Leidenschaft dafür ein, dass sie mit Zuversicht in ihre Zukunft blicken können.
            </p>
          </div>

          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-5xl">
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-light text-muted-foreground break-words">
                  Unsere starken Marken:
                </p>
              </div>

              <div className="space-y-8 sm:space-10">
                <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
                  <Card
                    className="group cursor-pointer border-2 border-transparent bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 h-full touch-manipulation"
                    onClick={() => setSelectedDivision(selectedDivision === "finanz" ? null : "finanz")}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/dpc-20finanz.png"
                          alt="DPC Finanz"
                          className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      {selectedDivision === "finanz" && (
                        <div className="mt-4 sm:mt-6 border-t border-border pt-6 sm:pt-8 w-full animate-in fade-in slide-in-from-top-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center break-words">
                            Die DPC Finanz begleitet Mandant:innen in Finanz- und Absicherungsfragen mit Zugang zu
                            nahezu allen Versicherern und Krankenkassen.
                          </p>
                        </div>
                      )}
                      {selectedDivision !== "finanz" && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="whitespace-nowrap">Details anzeigen</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  </Card>

                  <Card
                    className="group cursor-pointer border-2 border-transparent bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 h-full touch-manipulation"
                    onClick={() => setSelectedDivision(selectedDivision === "immo" ? null : "immo")}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/dpc-20immo.png"
                          alt="DPC Immo"
                          className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      {selectedDivision === "immo" && (
                        <div className="mt-4 sm:mt-6 border-t border-border pt-6 sm:pt-8 w-full animate-in fade-in slide-in-from-top-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center break-words">
                            Die DPC Immo begleitet Investitionen in Kapitalanlageimmobilien und ermöglicht Zugang zu
                            ausgewählten Projekten mit optimiertem Aufwand-Ertrags-Verhältnis.
                          </p>
                        </div>
                      )}
                      {selectedDivision !== "immo" && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="whitespace-nowrap">Details anzeigen</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>

                <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                  <Card
                    className="group cursor-pointer border-2 border-transparent bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 h-full touch-manipulation"
                    onClick={() => setSelectedDivision(selectedDivision === "invest" ? null : "invest")}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/dpc-20invest.png"
                          alt="DPC Invest"
                          className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      {selectedDivision === "invest" && (
                        <div className="mt-4 sm:mt-6 border-t border-border pt-6 sm:pt-8 w-full animate-in fade-in slide-in-from-top-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center break-words">
                            Die DPC Invest unterstützt Mandant:innen bei Investmentfragen – von klassisch verzinsten
                            Anlagen bis hin zu Fonds- und ETF-Lösungen, kurz-, mittel- oder langfristig ausgerichtet.
                          </p>
                        </div>
                      )}
                      {selectedDivision !== "invest" && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="whitespace-nowrap">Details anzeigen</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  </Card>

                  <Card
                    className="group cursor-pointer border-2 border-transparent bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:border-red-600 hover:shadow-2xl hover:-translate-y-2 h-full touch-manipulation"
                    onClick={() => setSelectedDivision(selectedDivision === "real" ? null : "real")}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/dpc-20real.png"
                          alt="DPC Real"
                          className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      {selectedDivision === "real" && (
                        <div className="mt-4 sm:mt-6 border-t border-border pt-6 sm:pt-8 w-full animate-in fade-in slide-in-from-top-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center break-words">
                            Die DPC Real ermöglicht Investitionen in nachhaltige und renditestarke Sachwerte wie
                            Solarparks, Windkraftanlagen und zukunftsfähige Immobilien.
                          </p>
                        </div>
                      )}
                      {selectedDivision !== "real" && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-600 mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="whitespace-nowrap">Details anzeigen</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  </Card>

                  <Card
                    className="group cursor-pointer border-2 border-transparent bg-white p-6 sm:p-8 lg:p-10 shadow-lg transition-all hover:border-blue-700 hover:shadow-2xl hover:-translate-y-2 h-full touch-manipulation"
                    onClick={() => setSelectedDivision(selectedDivision === "hyp" ? null : "hyp")}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/dpc-20hyp.png"
                          alt="DPC Hyp"
                          className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-110"
                        />
                      </div>
                      {selectedDivision === "hyp" && (
                        <div className="mt-4 sm:mt-6 border-t border-border pt-6 sm:pt-8 w-full animate-in fade-in slide-in-from-top-4">
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center break-words">
                            Die DPC Hyp unterstützt bei der passenden Finanzierung – mit Zugang zu nahezu allen Banken
                            und Bausparkassen.
                          </p>
                        </div>
                      )}
                      {selectedDivision !== "hyp" && (
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="whitespace-nowrap">Details anzeigen</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <p className="mt-16 sm:mt-20 lg:mt-24 text-center text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto break-words">
              Mit dieser Struktur ermöglichen wir Spezialisierung, Qualität und einen ganzheitlichen Blick auf die
              Bedürfnisse der Kundinnen und Kunden. Dabei hat jeder Mandant einen Ansprechpartner, der im Hintergrund
              über unser internes Expertennetzwerk agiert. Und das ohne Abhängigkeit von einzelnen Produktanbietern.
            </p>
          </div>
        </div>
      </section>

      {/* // Added break-words to arbeitsweise section */}
      <section
        id="arbeitsweise"
        className="relative bg-gradient-to-br from-primary via-primary/98 to-secondary py-20 sm:py-28 lg:py-36 xl:py-48"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20 lg:mb-28">
            <h2 className="mb-6 sm:mb-10 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-balance drop-shadow-2xl break-words hyphens-auto">
              Warum strukturierte Finanzberatung heute wichtiger denn je ist
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-lg break-words">
              Viele Menschen wünschen sich Orientierung in Finanzfragen – erhalten sie aber nicht in strukturierter,
              verständlicher Form. Studien zeigen: Finanzbildung und strukturierte Beratung werden stark nachgefragt.
            </p>
          </div>

          <div className="mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-center mb-12 sm:mb-16 lg:mb-20 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-balance drop-shadow-xl break-words hyphens-auto">
              So arbeiten wir mit unseren Kundinnen und Kunden
            </h2>

            <div className="relative space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <div className="absolute left-[30px] sm:left-[38px] top-[40px] sm:top-[50px] bottom-[40px] sm:bottom-[50px] w-0.5 sm:w-1 bg-gradient-to-b from-accent via-white/50 to-accent hidden md:block rounded-full shadow-2xl"></div>

              {[
                {
                  number: "00",
                  title: "Vorqualifizierung",
                  description:
                    "Bevor es zu einem Gesprächstermin kommt besprechen wir in einem 10-minütigen Telefonat den Sinn & Zweck, sowie den Inhalt weiterer Termine. Auf der Basis wird entschieden ob ein Termin stattfindet.",
                },
                {
                  number: "01",
                  title: "Ziele & Wünsche",
                  description:
                    "Im ersten Gespräch klären wir, welche Ziele ein Mensch verfolgt, wo er aktuell steht und was ihm wirklich wichtig ist.",
                },
                {
                  number: "02",
                  title: "Analyse & Expertenauswertung",
                  description:
                    "Die aktuelle Situation wird strukturiert analysiert und durch Experten ausgewertet. Auf dieser Basis entsteht eine verständliche Handlungsempfehlung – vergleichbar mit einer individuelle Strategie.",
                },
                {
                  number: "03",
                  title: "Entscheidung & Umsetzung",
                  description:
                    "Der Kunde entscheidet selbst, welche Schritte umgesetzt werden sollen. Wir koordinieren die Umsetzung und übernehmen die Abstimmung mit allen beteiligten Partnern.",
                },
                {
                  number: "04",
                  title: "Regelmäßige Check-up Termine",
                  description:
                    "Empfohlen wird ein jährlicher Check-up, um Entwicklungen zu überprüfen, Anpassungen vorzunehmen und langfristig auf Kurs zu bleiben.",
                },
              ].map((step, i) => (
                <Card
                  key={i}
                  className="relative bg-white/95 backdrop-blur-sm border-none p-6 sm:p-10 lg:p-12 shadow-2xl transition-all hover:shadow-accent/20 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-6 sm:gap-8 lg:gap-10">
                    <div className="relative z-10 flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-2xl sm:text-3xl font-black text-accent-foreground shadow-2xl">
                      {step.number}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-foreground break-words hyphens-auto">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 sm:p-10 lg:p-12 shadow-2xl">
              <p className="text-center text-base sm:text-lg lg:text-xl font-medium text-white leading-relaxed break-words">
                Diese strukturierte Arbeitsweise sorgt für Klarheit, Vertrauen und langfristige Kundenbeziehungen.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* // Improved mobile text sizing in transition section */}
      <section id="arbeitsweise" className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-20 sm:py-28 lg:py-36 xl:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/professional-business-meeting-handshake-partnershi.jpg"
            alt="Mandant im Mittelpunkt"
            className="h-full w-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="inline-block">
              <div className="h-0.5 sm:h-1 w-16 sm:w-24 bg-accent mx-auto mb-6 sm:mb-8 rounded-full shadow-lg shadow-accent/50"></div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-accent leading-tight text-balance drop-shadow-2xl mb-6 sm:mb-8 px-4 break-words hyphens-auto">
                Im Mittelpunkt steht der Mandant.
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/95 font-light leading-relaxed text-balance drop-shadow-xl max-w-4xl px-4 break-words">
                Einkommen und Geld verdienen sind wichtig – sie sind jedoch die logische Folge guter Arbeit beim
                Mandanten.
              </p>
              <div className="h-0.5 sm:h-1 w-16 sm:w-24 bg-accent mx-auto mt-6 sm:mt-8 rounded-full shadow-lg shadow-accent/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="karriere" className="bg-white py-16 sm:py-24 lg:py-32 xl:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance break-words hyphens-auto">
              Klassische Karrierewege stoßen an Grenzen
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light break-words">
              Wenn Verantwortung wächst – aber Ergebnis nicht folgt
            </p>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-semibold text-foreground leading-tight break-words hyphens-auto">
                Deine Entwicklung hängt nicht nur von deiner Leistung ab
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                Aufstieg und Verantwortung sind häufig an feste Hierarchien und Strukturen gebunden – nicht allein an Kompetenz und Einsatz.
              </p>
            </Card>

            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-semibold text-foreground leading-tight break-words hyphens-auto">
                Du weißt, dass du mehr könntest – darfst aber nicht
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                Gestaltungsspielräume, Entscheidungen und individuelle Lösungsansätze sind oft vorgegeben oder eingeschränkt.
              </p>
            </Card>

            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-semibold text-foreground leading-tight break-words hyphens-auto">
                Leistung und Einsatz bleiben oft folgenlos
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                Persönliches Engagement wird nicht immer sichtbar anerkannt oder angemessen honoriert.
              </p>
            </Card>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 max-w-4xl">
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20 p-8 sm:p-10 lg:p-12 shadow-sm">
              <p className="text-center text-base sm:text-lg text-foreground leading-relaxed break-words">
                Diese Rahmenbedingungen sind für viele Menschen passend. Andere suchen bewusst nach einer Arbeitsweise,
                in der Verantwortung, Entwicklung und Ergebnis enger miteinander verknüpft sind – und Leistung spürbare Wirkung entfaltet.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* // Added break-words and improved grid for mobile in loesung section */}
      <section
        id="loesung"
        className="relative bg-gradient-to-br from-muted via-white to-muted py-16 sm:py-24 lg:py-32 xl:py-40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-16 sm:mb-20 lg:mb-24 max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance break-words hyphens-auto">
              Ihre Karriere direkt an Ihre Leistung koppeln
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Leistung statt Gehaltsgrenzen",
                description:
                  "Ihr Einkommen entwickelt sich aus Ihrem persönlichen Einsatz, der Qualität Ihrer Arbeit und der übernommenen Verantwortung – nicht aus starren Gehaltsstufen oder festen Karriereschritten.",
              },
              {
                icon: Clock,
                title: "Nachhaltige Einnahmen",
                description: "Langfristige Kundenbeziehungen und eine kontinuierliche Bestandsbetreuung schaffen eine stabile Einkommensbasis, die nicht von kurzfristigen Abschlüssen abhängt.",
              },
              {
                icon: BookOpen,
                title: "Strukturierte Ausbildung",
                description: "Klare Einarbeitung, persönliches Mentoring und Zugang zu unserer internen Akademie – mit praxisnahen Weiterbildungen und anerkannten Zertifikaten.",
              },
              {
                icon: Target,
                title: "Flexible Gestaltung",
                description: "Der Einstieg ist neben- oder hauptberuflich möglich. Entwicklung und Ausbau erfolgen im eigenen Tempo und lassen sich an die persönliche Lebenssituation anpassen.",
              },
              {
                icon: Users,
                title: "Entwicklung & Führung",
                description: "Mit zunehmender Erfahrung können Verantwortung übernommen und eigene Schwerpunkte gesetzt werden. Auch der Aufbau eines Teams ist möglich – aber kein Muss.",
              },
              {
                icon: Shield,
                title: "Unabhängiger Marktzugang",
                description: "Sie arbeiten mit einem breiten Angebot aus Versicherungen, Banking, Investments und Immobilien – ohne Bindung an einzelne Anbieter oder Produktvorgaben.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="group bg-white border-2 p-8 sm:p-10 shadow-md transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-secondary/50"
              >
                <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 transition-all group-hover:scale-110 flex-shrink-0">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-foreground break-words hyphens-auto">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* // Improved mobile responsiveness for einstieg section */}
      <section id="einstieg" className="bg-white py-16 sm:py-24 lg:py-32 xl:py-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-16 sm:mb-20 lg:mb-24 max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance break-words hyphens-auto">
              Einstieg & zeitliche Gestaltung
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16 lg:mb-20">
            {[
              {
                icon: Target,
                title: "Neben- oder hauptberuflich möglich",
                description:
                  "Der Einstieg kann flexibel erfolgen – neben einem bestehenden Beruf oder perspektivisch in Vollzeit.",
              },
              {
                icon: TrendingUp,
                title: "Individuelles Entwicklungstempo",
                description:
                  "Wie schnell sich jemand entwickelt, hängt vom eigenen Einsatz, der Lernbereitschaft und der Umsetzungsstärke ab.",
              },
              {
                icon: BookOpen,
                title: "Strukturierter Start",
                description:
                  "Ausbildung, Prozesse und persönliche Begleitung sorgen für einen klaren Rahmen – besonders in der Anfangsphase.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-white border-2 p-8 sm:p-10 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-primary/10 flex-shrink-0">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground break-words hyphens-auto">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed break-words">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="mx-auto mb-12 sm:mb-16 lg:mb-20 max-w-3xl">
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20 p-8 sm:p-10 lg:p-12 shadow-sm">
              <p className="text-center text-base sm:text-lg lg:text-xl font-medium text-foreground leading-relaxed break-words">
                Entscheidend ist nicht die verfügbare Zeit zu Beginn, sondern die Bereitschaft sich weiterzuentwickeln.
              </p>
            </Card>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 p-8 sm:p-10 lg:p-12 shadow-lg rounded-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">Gut geeignet, wenn Sie...</h3>
              </div>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Bereit sind, für Ihre Ziele zu arbeiten",
                  "Leistung fair vergütet sehen wollen",
                  "Verantwortung als Chance sehen",
                  "Langfristig denken und planen",
                  "Menschen gerne helfen und beraten",
                  "Sich kontinuierlich weiterentwickeln wollen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-0.5 sm:mt-1 h-5 w-5 sm:h-6 sm:w-6 shrink-0 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 p-8 sm:p-10 lg:p-12 shadow-lg rounded-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-red-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-0.5 w-3 sm:w-4 bg-red-600 rotate-45"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground break-words">
                  Nicht geeignet, wenn Sie...
                </h3>
              </div>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Schnellen Erfolg ohne Aufwand erwarten",
                  "Keine Verantwortung übernehmen wollen",
                  "Fixgehalt und Sicherheit bevorzugen",
                  "Ungern mit Menschen kommunizieren",
                  "Struktur und Prozesse ablehnen",
                  "Nicht lernbereit und anpassungsfähig sind",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 sm:mt-1.5 h-5 w-5 sm:h-6 sm:w-6 shrink-0 rounded-full border-2 border-red-600 bg-white" />
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* // Improved mobile responsiveness for bewerbertag section with accordion */}
      <section
        id="bewerbertag"
        className="relative bg-gradient-to-br from-primary to-primary/95 py-20 sm:py-28 lg:py-36 xl:py-56"
      >
        <div className="absolute inset-0">
          <img
            src="/professional-business-meeting-handshake-partnershi.jpg"
            alt="Bewerbertag"
            className="h-full w-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center">
            <div className="mb-6 sm:mb-10 inline-flex items-center gap-2 sm:gap-3 rounded-full border-2 border-accent/40 bg-accent/10 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide whitespace-nowrap">
                Ihr nächster Schritt
              </span>
            </div>
            <h2 className="mb-6 sm:mb-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-balance drop-shadow-2xl break-words hyphens-auto">
              Der Bewerbertag
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed drop-shadow-lg break-words">
              Eine Zusammenarbeit lässt sich nicht seriös in einem kurzen Gespräch oder auf einer Website entscheiden.
              Deshalb gibt es bei der DPC Unternehmensgruppe einen Bewerbertag.
            </p>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-28 mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
              <AccordionItem
                value="item-1"
                className="bg-white/95 backdrop-blur-sm border-none rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              >
                <AccordionTrigger className="px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl font-semibold text-foreground hover:no-underline hover:bg-white/50 transition-colors break-words text-left">
                  Was wird dort erklärt?
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-7 lg:pb-8 text-base sm:text-lg text-muted-foreground">
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="break-words">Einblick über die Firma und den Markt.</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="break-words">
                        Kennenlernen der Arbeitsweise, Struktur und den Beratungsansatz.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="break-words">Offene Einordnung der Anforderungen und der Karrierechancen.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white/95 backdrop-blur-sm border-none rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              >
                <AccordionTrigger className="px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl font-semibold text-foreground hover:no-underline hover:bg-white/50 transition-colors break-words text-left">
                  Was wird nicht stattfinden?
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-7 lg:pb-8 text-base sm:text-lg text-muted-foreground">
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-destructive flex-shrink-0"></div>
                      <span className="break-words">Kein Verkaufsseminar.</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-destructive flex-shrink-0"></div>
                      <span className="break-words">Keine verpflichtende Entscheidung.</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-destructive flex-shrink-0"></div>
                      <span className="break-words">Kein Vergleich mit anderen Modellen oder Unternehmen.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white/95 backdrop-blur-sm border-none rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              >
                <AccordionTrigger className="px-6 sm:px-8 lg:px-10 py-6 sm:py-7 lg:py-8 text-lg sm:text-xl lg:text-2xl font-semibold text-foreground hover:no-underline hover:bg-white/50 transition-colors break-words text-left">
                  Was sollte man mitbringen?
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-7 lg:pb-8 text-base sm:text-lg text-muted-foreground">
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="break-words">Offenheit für ehrliches Feedback.</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="break-words">Bereitschaft zur Selbstreflexion.</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="break-words">Zeit für Austausch und Fragen.</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-10 sm:p-12 lg:p-16 shadow-2xl">
              <p className="text-center text-lg sm:text-xl lg:text-2xl font-medium text-white leading-relaxed break-words">
                Eine Entscheidung für oder gegen eine Zusammenarbeit wird erst nach dem Bewerbertag getroffen – bewusst
                und beidseitig.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="naechste-schritte" className="bg-white py-20 sm:py-28 lg:py-36 xl:py-48">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-16 sm:mb-20 lg:mb-28 max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground text-balance break-words hyphens-auto">
              So geht es weiter
            </h2>
          </div>

          <div className="grid gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 mb-16 sm:mb-20 lg:mb-24">
            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">01</span>
              </div>
              <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-bold text-foreground break-words hyphens-auto">
                Persönlicher Austausch
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
                In einem kurzen Gespräch wird geklärt, ob eine Einladung zum Bewerbertag grundsätzlich sinnvoll ist.
              </p>
            </Card>

            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">02</span>
              </div>
              <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-bold text-foreground break-words hyphens-auto">
                Einladung zum Bewerbertag
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
                Bei beidseitigem Interesse erfolgt die Einladung zu einem Bewerbertag vor Ort. Dort werden Arbeitsweise,
                Erwartungen und Perspektiven transparent vorgestellt.
              </p>
            </Card>

            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">03</span>
              </div>
              <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-bold text-foreground break-words hyphens-auto">
                Strukturierter Start
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
                Der Einstieg erfolgt über einen strukturierten Start. In dieser Phase werden Grundlagen aufgebaut, die
                Arbeitsweise kennengelernt und gemeinsam geprüft, ob die Zusammenarbeit fachlich, menschlich und vom
                Anspruch her passt.
              </p>
            </Card>

            <Card className="bg-white border-2 p-8 sm:p-10 lg:p-12 shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="mb-6 sm:mb-8 flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex-shrink-0">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary">04</span>
              </div>
              <h3 className="mb-4 sm:mb-5 text-xl sm:text-2xl font-bold text-foreground break-words hyphens-auto">
                Bewusste Entscheidung über den weiteren Weg
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
                Nach dem strukturierten Start wird bewusst entschieden, wie der weitere Weg aussieht. Möglich ist sowohl
                eine nebenberufliche Zusammenarbeit als auch der gezielte Aufbau einer langfristigen beruflichen
                Perspektive. Grundlage der Entscheidung sind Umsetzung, Lernbereitschaft und Passung.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="group w-full sm:w-auto min-h-14 sm:min-h-16 bg-accent px-8 sm:px-12 text-base sm:text-lg font-semibold text-accent-foreground hover:bg-accent/90 shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all touch-manipulation overflow-hidden"
            >
              <a
                href="https://calendly.com/alexanderrustler/unternehmenspraesentation?back=1&month=2025-10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span className="break-words hyphens-auto text-center leading-tight">
                  Jetzt zum Bewerbertag anmelden
                </span>
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-2 flex-shrink-0" />
              </a>
            </Button>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base text-muted-foreground break-words">
              Der erste Schritt zu Ihrer neuen Karriere
            </p>
          </div>
        </div>
      </section>

      <section id="erfolgsgeschichten" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 break-words hyphens-auto">
              Erfolgsgeschichten unserer Partner
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto break-words hyphens-auto">
              Echte Menschen, echte Erfolge – So haben sie ihre Karriere bei der DPC aufgebaut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-white border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-muted flex-shrink-0">
                    <User className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary break-words">Michael Schmidt, 34</h4>
                    <p className="text-sm text-muted-foreground break-words">Früher: Bankkaufmann</p>
                    <p className="text-sm font-medium text-secondary break-words">Heute: Teamleiter mit 6 Partnern</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-accent pl-4 mb-6">
                  <p className="text-sm sm:text-base italic text-foreground/80 break-words hyphens-auto">
                    "Nach 18 Monaten habe ich mein Gehalt verdoppelt. Das Beste: Ich bestimme meine Zeit selbst."
                  </p>
                </blockquote>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">€4.200/Monat Bestandsprovision</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">Flexibles Arbeiten von überall</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">Eigenes Team aufgebaut</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-muted flex-shrink-0">
                    <User className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary break-words">Sarah Müller, 29</h4>
                    <p className="text-sm text-muted-foreground break-words">Früher: Versicherungskauffrau</p>
                    <p className="text-sm font-medium text-secondary break-words">Heute: Selbstständige Beraterin</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-accent pl-4 mb-6">
                  <p className="text-sm sm:text-base italic text-foreground/80 break-words hyphens-auto">
                    "Ich war skeptisch. Aber der strukturierte Einstieg und die Begleitung haben mir Sicherheit
                    gegeben."
                  </p>
                </blockquote>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">In 12 Monaten zur Vollzeit</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">50+ zufriedene Mandanten</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">Work-Life-Balance verbessert</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-muted flex-shrink-0">
                    <User className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary break-words">Thomas Weber, 45</h4>
                    <p className="text-sm text-muted-foreground break-words">Früher: IT-Projektleiter</p>
                    <p className="text-sm font-medium text-secondary break-words">Heute: Senior Partner</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-accent pl-4 mb-6">
                  <p className="text-sm sm:text-base italic text-foreground/80 break-words hyphens-auto">
                    "Mit 45 nochmal neu anfangen? Beste Entscheidung meines Lebens. Ich verdiene mehr und arbeite
                    weniger."
                  </p>
                </blockquote>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">€6.800/Monat nach 24 Monaten</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">Quereinsteiger erfolgreich</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="break-words">Finanzielle Freiheit erreicht</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Trust statement */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-base sm:text-lg text-muted-foreground break-words hyphens-auto">
              Über <span className="font-semibold text-primary">150 Partner</span> vertrauen auf unseren strukturierten
              Ansatz und bewerten uns mit <span className="font-semibold text-accent">4,9 von 5 Sternen</span>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Häufig gestellte Fragen
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Die wichtigsten Antworten auf einen Blick
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Ist das MLM oder Strukturvertrieb?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Nein. Bei DPC steht die Qualität der Beratung im Vordergrund, nicht das Anwerben neuer Partner. Ihr Einkommen entsteht primär aus Ihrer eigenen Arbeit mit Mandanten. Der Aufbau eines Teams ist möglich, aber vollkommen optional und keine Voraussetzung für Ihren Erfolg.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Welche Kosten kommen auf mich zu?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Der Einstieg bei DPC erfordert kein Startkapital. Die Ausbildung, Mentoring und Zugang zu unserer internen Akademie sind kostenfrei. Lediglich branchenübliche Qualifikationen (z.B. IHK-Zertifizierungen) können Gebühren verursachen, die transparent kommuniziert werden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Kann ich nebenberuflich starten?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Ja, der nebenberufliche Einstieg ist ausdrücklich möglich und wird von vielen Partnern gewählt. Sie können Ihr Engagement nach Ihrer zeitlichen Verfügbarkeit ausrichten und schrittweise erweitern. Die Entwicklung erfolgt in Ihrem Tempo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Welche Qualifikationen brauche ich?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Für den Einstieg benötigen Sie keine speziellen Vorkenntnisse im Finanzbereich. Wichtiger sind Interesse an der Arbeit mit Menschen, die Bereitschaft zur persönlichen Weiterentwicklung und unternehmerisches Denken. Alle fachlichen Qualifikationen bauen Sie im Rahmen unserer strukturierten Ausbildung auf.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Wie entwickelt sich mein Einkommen?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Ihr Einkommen setzt sich aus Provisionen für Neugeschäft und Bestandsprovisionen für laufende Betreuung zusammen. Es entwickelt sich direkt aus der Qualität Ihrer Arbeit, dem Umfang Ihrer Mandantenbetreuung und der übernommenen Verantwortung. Die ersten Einnahmen entstehen typischerweise nach 8-12 Wochen. Nach 12-18 Monaten ist bei entsprechendem Einsatz ein hauptberufliches Einkommen realistisch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Wie läuft die Ausbildung ab?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Sie durchlaufen ein strukturiertes Onboarding mit persönlichem Mentoring. Fachwissen, Gesprächsführung und Prozessverständnis werden schrittweise aufgebaut. Parallel erhalten Sie Zugang zu unserer internen Akademie mit praxisnahen Weiterbildungen und anerkannten Zertifizierungen. Ihr Mentor begleitet Sie in den ersten Monaten eng.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Bin ich selbstständig oder angestellt?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Sie arbeiten als selbstständiger Partner auf Basis eines Vermittlervertrags. Das bedeutet unternehmerische Freiheit bei der Gestaltung Ihrer Arbeitsweise, aber auch Eigenverantwortung für Ihre Ergebnisse. Sie profitieren von der Infrastruktur, dem Marktzugang und der Unterstützung der DPC Unternehmensgruppe, bleiben aber in Ihrer Arbeitsgestaltung flexibel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Wo finde ich meine ersten Kunden?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Sie starten nicht bei Null. Neben Ihrem persönlichen Netzwerk unterstützen wir Sie mit bewährten Strategien zur Kundengewinnung: strukturierte Empfehlungsprozesse, digitale Tools für Sichtbarkeit und gemeinsame Marktbearbeitung mit erfahrenen Partnern. Ihr Mentor begleitet Sie bei den ersten Kundenkontakten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white border-2 border-gray-200 rounded-lg px-6 sm:px-8 shadow-sm">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:text-primary py-5 sm:py-6">
                Wie flexibel ist meine Arbeitszeit wirklich?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 sm:pb-6">
                Sie gestalten Ihre Arbeitszeit selbst. Kundentermine finden häufig abends oder am Wochenende statt, da Ihre Mandanten berufstätig sind. Verwaltungsarbeit und Weiterbildung können Sie flexibel einteilen. Viele Partner schätzen genau diese Gestaltungsfreiheit – arbeiten aber auch an Zeiten, die im klassischen Angestelltenverhältnis frei wären.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* // Improved mobile footer */}
      <footer className="bg-gradient-to-br from-primary to-primary/95 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 shadow-inner overflow-hidden flex-shrink-0">
                <img src="/images/logo.png" alt="DPC Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 text-center md:text-right break-words">
              © {new Date().getFullYear()} DPC Unternehmensgruppe. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-accent shadow-2xl p-4 md:hidden">
        <Button
          asChild
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg text-base font-semibold touch-manipulation"
        >
          <a
            href="https://calendly.com/alexanderrustler/unternehmenspraesentation?back=1&month=2025-10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>Platz sichern</span>
            <ArrowRight className="h-5 w-5 flex-shrink-0" />
          </a>
        </Button>
      </div>
    </main>
  )
}
