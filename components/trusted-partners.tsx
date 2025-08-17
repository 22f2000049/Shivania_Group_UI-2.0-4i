"use client"

import { useEffect, useState } from "react"

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=80&width=120&text=Partner+1" },
  { name: "Partner 2", logo: "/placeholder.svg?height=80&width=120&text=Partner+2" },
  { name: "Partner 3", logo: "/placeholder.svg?height=80&width=120&text=Partner+3" },
  { name: "Partner 4", logo: "/placeholder.svg?height=80&width=120&text=Partner+4" },
  { name: "Partner 5", logo: "/placeholder.svg?height=80&width=120&text=Partner+5" },
  { name: "Partner 6", logo: "/placeholder.svg?height=80&width=120&text=Partner+6" },
  { name: "Partner 7", logo: "/placeholder.svg?height=80&width=120&text=Partner+7" },
  { name: "Partner 8", logo: "/placeholder.svg?height=80&width=120&text=Partner+8" },
]

export function TrustedPartners() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - 3))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Trusted by <span className="text-shivania-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            We're proud to partner with leading brands and serve businesses across various industries
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center p-6 bg-gray-50 rounded-lg mx-2"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
