"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    type: "image",
    src: "/placeholder.svg?height=600&width=1200&text=Cleaning+Solutions+Warehouse",
    title: "Professional Cleaning Solutions",
    subtitle: "Complete range of industrial & commercial cleaning products",
    cta: "Shop Now",
    link: "/category/cleaning-supplies",
  },
  {
    id: 2,
    type: "image",
    src: "/placeholder.svg?height=600&width=1200&text=Industrial+Tools+Equipment",
    title: "Industrial Supplies & Tools",
    subtitle: "Premium quality tools and equipment for all industries",
    cta: "Explore Products",
    link: "/category/industrial-supplies",
  },
  {
    id: 3,
    type: "festive",
    src: "/placeholder.svg?height=600&width=1200&text=Festive+Sale+Banner",
    title: "Festive Sale - Up to 30% Off",
    subtitle: "Special discounts on all categories this festive season",
    cta: "Shop Sale",
    link: "/popular",
    festive: true,
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <img src={slide.src || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div
              className={`absolute inset-0 ${slide.festive ? "bg-gradient-to-r from-orange-600/80 to-red-600/80" : "bg-gradient-to-r from-blue-900/80 to-green-900/80"}`}
            />

            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4">
                <h1
                  className={`text-4xl md:text-6xl font-bold font-sans mb-4 ${slide.festive ? "text-yellow-100" : ""}`}
                >
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-serif mb-8 opacity-90 max-w-2xl mx-auto">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant={slide.festive ? "secondary" : "default"} asChild>
                    <Link href={slide.link}>{slide.cta}</Link>
                  </Button>
                  {slide.festive && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                    >
                      View Offers
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
