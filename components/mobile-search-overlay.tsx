"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Search, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

interface MobileSearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const popularSearches = [
  "Power Tools",
  "Electrical Components",
  "Safety Equipment",
  "Industrial Supplies",
  "Cleaning Products",
  "Garden Tools",
]

const recentSearches = ["Angle Grinder", "Circuit Breaker", "Safety Helmet", "Floor Cleaner"]

export function MobileSearchOverlay({ isOpen, onClose }: MobileSearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background md:hidden">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 border-b">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, categories..."
              className="pl-10"
              autoFocus
            />
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Popular Searches */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">Popular Searches</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <Badge
                  key={search}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSearchQuery(search)}
                >
                  {search}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-sm">Recent Searches</h3>
            </div>
            <div className="space-y-2">
              {recentSearches.map((search) => (
                <div
                  key={search}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
                  onClick={() => setSearchQuery(search)}
                >
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{search}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Quick Categories</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Power Tools", href: "/category/power-tools" },
                { name: "Electrical", href: "/category/electrical-electronics" },
                { name: "Safety", href: "/category/safety-equipment" },
                { name: "Industrial", href: "/category/industrial-supplies" },
              ].map((category) => (
                <Card key={category.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-3">
                    <Link href={category.href} onClick={onClose}>
                      <div className="text-sm font-medium">{category.name}</div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
