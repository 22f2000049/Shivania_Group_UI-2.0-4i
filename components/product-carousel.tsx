"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Eye, Play, Pause } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  subcategory: string
  inStock: boolean
  featured?: boolean
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  autoScroll?: boolean
  scrollInterval?: number
  showControls?: boolean
  itemsPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  onProductClick?: (product: Product) => void
}

export function ProductCarousel({
  title,
  products,
  autoScroll = true,
  scrollInterval = 3000,
  showControls = true,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 4 },
  onProductClick,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoScroll)
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Responsive items calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet)
      } else {
        setItemsToShow(itemsPerView.desktop)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [itemsPerView])

  // Auto scroll functionality
  useEffect(() => {
    if (isPlaying && products.length > itemsToShow) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = products.length - itemsToShow
          return prevIndex >= maxIndex ? 0 : prevIndex + 1
        })
      }, scrollInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, products.length, itemsToShow, scrollInterval])

  const nextSlide = () => {
    const maxIndex = products.length - itemsToShow
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const maxIndex = products.length - itemsToShow
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const maxIndex = products.length - itemsToShow

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold font-sans text-shivania-gradient">{title}</h2>

        {showControls && products.length > itemsToShow && (
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={togglePlayPause} className="h-8 w-8 bg-transparent">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="h-8 w-8 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            width: `${(products.length / itemsToShow) * 100}%`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0" style={{ width: `${100 / products.length}%` }}>
              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur cursor-pointer">
                <CardContent className="p-0" onClick={() => onProductClick?.(product)}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">Featured</Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="destructive" className="absolute top-2 right-2">
                        Out of Stock
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        {product.subcategory}
                      </Badge>
                      <h3 className="font-semibold text-sm font-sans line-clamp-2 mb-2">{product.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="text-xs text-green-600 font-medium">
                            Save ₹{(product.originalPrice - product.price).toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" disabled={!product.inStock}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/product/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      {products.length > itemsToShow && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
