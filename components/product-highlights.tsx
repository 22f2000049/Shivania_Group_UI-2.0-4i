"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Professional Vacuum Cleaner",
    category: "Cleaning Equipment",
    price: "₹15,999",
    originalPrice: "₹18,999",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300&text=Vacuum+Cleaner",
    badge: "Best Seller",
    discount: "16% OFF",
  },
  {
    id: 2,
    name: "Industrial Safety Helmet",
    category: "Safety Equipment",
    price: "₹899",
    originalPrice: "₹1,199",
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Safety+Helmet",
    badge: "New Arrival",
    discount: "25% OFF",
  },
  {
    id: 3,
    name: "Power Drill Set",
    category: "Power Tools",
    price: "₹3,499",
    originalPrice: "₹4,299",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300&text=Power+Drill",
    badge: "Featured",
    discount: "19% OFF",
  },
  {
    id: 4,
    name: "LED Work Light",
    category: "Lighting",
    price: "₹1,299",
    originalPrice: "₹1,599",
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300&text=LED+Light",
    badge: "Hot Deal",
    discount: "19% OFF",
  },
  {
    id: 5,
    name: "Chemical Storage Cabinet",
    category: "Industrial Storage",
    price: "₹12,999",
    originalPrice: "₹15,999",
    rating: 4.8,
    reviews: 43,
    image: "/placeholder.svg?height=300&width=300&text=Storage+Cabinet",
    badge: "Premium",
    discount: "19% OFF",
  },
]

export function ProductHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quickViewProduct, setQuickViewProduct] = useState<number | null>(null)

  const nextProducts = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, featuredProducts.length - 2))
  }

  const prevProducts = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.max(1, featuredProducts.length - 2)) % Math.max(1, featuredProducts.length - 2),
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Featured <span className="text-shivania-gradient">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif">
              Discover our most popular and highly-rated products
            </p>
          </div>

          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="sm" onClick={prevProducts}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextProducts}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="w-1/3 flex-shrink-0 px-3">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-red-500 text-white">
                          {product.discount}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-white">
                          {product.badge}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                        <Button size="sm" variant="secondary" onClick={() => setQuickViewProduct(product.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          Quick View
                        </Button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                      <div className="flex items-center space-x-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {product.originalPrice}
                          </span>
                        </div>
                        <Button size="sm">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {featuredProducts.slice(0, 4).map((product) => (
            <Card key={product.id} className="group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-red-500 text-white text-xs">
                      {product.discount}
                    </Badge>
                  </div>
                </div>

                <div className="p-3">
                  <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-bold">{product.price}</span>
                      <span className="text-xs text-muted-foreground line-through ml-1">{product.originalPrice}</span>
                    </div>
                    <Button size="sm" className="w-full text-xs">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/popular">View All Featured Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
