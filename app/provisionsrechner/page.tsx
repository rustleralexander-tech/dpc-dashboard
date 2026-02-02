"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProvisionsrechnerPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Zurück zum Dashboard
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Provisionsrechner
            </h1>
            <p className="text-lg text-muted-foreground">
              Berechnen Sie Ihre Provisionen schnell und einfach
            </p>
          </div>

          {/* Placeholder Content */}
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">🧮</div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Provisionsrechner wird geladen...
            </h2>
            <p className="text-muted-foreground">
              Diese Seite wird in Kürze mit dem vollständigen Provisionsrechner ausgestattet.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
