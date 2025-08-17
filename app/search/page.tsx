"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, TrendingUp, Star, ShoppingCart } from "lucide-react"
import Link from "next/link"

const popularSearches = [
  "Power Tools",
  "Electrical Components",
  "Safety Equipment",
  "Industrial Supplies",
  "Cleaning Products",
  "Garden Tools",
  "Hand Tools",
  "LED Lighting",
]

const searchResults = [
  {
    id: "1",
    name: "Bosch Professional Angle Grinder",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=200&width=200&text=Angle+Grinder",
    category: "Power Tools",
    inStock: true,
  },
  {
    id: "2",
    name: "Makita Impact Drill HP2050H",
    price: 3299,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200&text=Impact+Drill",
    category: "Power Tools",
    inStock: true,
  },
  {
    id: "3",
    name: "Safety Helmet with Chin Strap",
    price: 899,
    rating: 4.3,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=200&text=Safety+Helmet",
    category: "Safety Equipment",
    inStock: true,
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setShowResults(query.length > 0)
  }

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navigation />

      <div className="container mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold font-sans mb-4">Search Products</h1>
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search for products, categories, brands..."
              className="pl-12 h-12 text-base"
            />
          </div>
        </div>

        {!showResults ? (
          /* Search Suggestions */
          <div className="space-y-8">
            {/* Popular Searches */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold font-sans">Popular Searches</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((search) => (
                  <Badge
                    key={search}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4"
                    onClick={() => handleSearch(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick Categories */}
            <div>
              <h2 className="text-xl font-semibold font-sans mb-4">Browse Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Power Tools", href: "/category/power-tools", count: "150+ items" },
                  { name: "Electrical", href: "/category/electrical-electronics", count: "200+ items" },
                  { name: "Safety Equipment", href: "/category/safety-equipment", count: "95+ items" },
                  { name: "Industrial Supplies", href: "/category/industrial-supplies", count: "180+ items" },
                ].map((category) => (
                  <Card key={category.name} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Link href={category.href}>
                        <div className="font-medium mb-1">{category.name}</div>
                        <div className="text-sm text-muted-foreground">{category.count}</div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Search Results */
          <div className="space-y-6">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold font-sans">Search Results for "{searchQuery}"</h2>
                <p className="text-muted-foreground">{searchResults.length} products found</p>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 left-2" variant="secondary">
                        {product.category}
                      </Badge>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg font-sans line-clamp-2 mb-2">{product.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xl">₹{product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{product.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                          {product.originalPrice && (
                            <span className="text-sm text-green-600 font-medium">
                              Save ₹{(product.originalPrice - product.price).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/product/${product.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
