'use client'

import React from "react"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Users, BookOpen, GraduationCap, ExternalLink, Mail, Phone } from 'lucide-react'

type Tool = {
  name: string
  url?: string
}

type Category = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  tools: Tool[]
  color: string
  bgImage: string
}

const categories: Category[] = [
  {
    id: 'rekrutieren',
    title: 'Rekrutieren',
    description: 'Tools für die Mitarbeitergewinnung und den Aufbau Ihres Teams',
    icon: <Users className="h-7 w-7" />,
    color: 'from-[#4FC3F7] to-[#29B6F6]',
    bgImage: '/images/rekrutieren-bg.jpg',
    tools: [
      { name: 'Rekrutierungsgespräch', url: 'https://v0-recruiting-website-for-dpc.vercel.app/' },
      { name: 'Provisionsrechner', url: '/provisionsrechner' },
    ],
  },
  {
    id: 'beraten',
    title: 'Beraten',
    description: 'Professionelle Beratungstools und Rechner für Ihre Kunden',
    icon: <BookOpen className="h-7 w-7" />,
    color: 'from-[#4FC3F7] to-[#29B6F6]',
    bgImage: '/images/beraten-bg.jpg',
    tools: [
      { name: 'GKV vs. PKV', url: '#' },
      { name: 'Krankenkassen-Check', url: '#' },
      { name: 'ETF Police', url: '#' },
      { name: 'ETF vs. Depot', url: '#' },
      { name: 'Immo Kalkulator', url: '#' },
    ],
  },
  {
    id: 'wissen',
    title: 'Wissen',
    description: 'Erweitern Sie Ihr Fachwissen durch Kurse und Videos',
    icon: <GraduationCap className="h-7 w-7" />,
    color: 'from-[#4FC3F7] to-[#29B6F6]',
    bgImage: '/images/wissen-bg.jpg',
    tools: [
      { name: 'E Learning Kurse', url: '#' },
      { name: 'Erklärvideos', url: '#' },
    ],
  },
]

const contactSections = [
  {
    title: 'Ansprechpartner DPC',
    contacts: [
      { label: 'Personal', email: 'personal@dpc-gruppe.de' },
      { label: 'Antrag', email: 'neugeschaeft-compexx@dpc-gruppe.de' },
      { label: 'Immo', email: 'immo@dpc-gruppe.de' },
    ],
  },
  {
    title: 'Ansprechpartner Compexx',
    contacts: [
      { label: 'IT', phone: '0941 - 56815 - 300', email: 'it-support@compexx-finanz.de' },
      { label: 'Antrag', phone: '0941 - 56815 - 100', email: 'antrag@compexx-finanz.de' },
      { label: 'Provision', phone: '0941 - 56815 - 200', email: 'provisionsabrechnung@compexx-finanz.de' },
    ],
  },
  {
    title: 'Die Bayerische',
    contacts: [{ label: 'Vertriebshotline', phone: '089 - 6787 - 9540' }],
  },
]

export default function PortalPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Welcome Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Herzlich Willkommen im Mitglieder-Bereich der DPC Team Köln
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Ihr zentraler Zugang zu allen wichtigen Tools und Ressourcen für eine erfolgreiche Zusammenarbeit
          </p>
        </div>

        {/* Tool Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-200/80 min-h-[360px] flex flex-col">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={category.bgImage || "/placeholder.svg"}
                    alt=""
                    className="h-full w-full object-cover opacity-[0.08] group-hover:opacity-[0.12] group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-slate-100/60" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4FC3F7]/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#29B6F6]/5 to-transparent rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative flex-1 flex flex-col items-center justify-center text-center p-10 gap-6">
                  {/* Text Content */}
                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed px-2">
                      {category.description}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#4FC3F7] to-[#29B6F6] text-white text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
                    <span>Tools öffnen</span>
                    <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-border rounded-2xl p-10 shadow-sm max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">Ihre Ansprechpartner</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {contactSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-lg text-foreground mb-6 pb-3 border-b-2 border-primary/20">
                  {section.title}
                </h4>
                <div className="space-y-5">
                  {section.contacts.map((contact) => (
                    <div key={contact.label} className="space-y-2">
                      <p className="font-semibold text-sm text-foreground">{contact.label}</p>
                      {contact.phone && (
                        <a
                          href={`tel:${contact.phone.replace(/\s|-/g, '')}`}
                          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors gap-2"
                        >
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span>{contact.phone}</span>
                        </a>
                      )}
                      {contact.email && (
                        <a
                          href={`mailto:${contact.email}`}
                          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors gap-2"
                        >
                          <Mail className="h-4 w-4 flex-shrink-0" />
                          <span className="break-words">{contact.email}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Tools Dialog */}
      <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="max-w-2xl bg-card">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-2">
              {selectedCategory && (
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedCategory.color} text-white`}>
                  {selectedCategory.icon}
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl text-foreground">{selectedCategory?.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selectedCategory?.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            {selectedCategory?.tools.map((tool) => (
              <Button
                key={tool.name}
                variant="outline"
                className="justify-between h-auto py-4 px-5 text-left hover:bg-accent hover:text-accent-foreground group bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                onClick={() => {
                  if (tool.url && tool.url !== '#') {
                    window.open(tool.url, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                <span className="font-medium text-base">{tool.name}</span>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
