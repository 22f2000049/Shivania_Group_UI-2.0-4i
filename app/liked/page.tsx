"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart, Eye, Star, Search, Grid3X3, List, Trash2, Share2 } from "lucide-react"
import Link from "next/link"

// Mock liked products data
const likedProducts = [
  {
    id: "1",
    name: "Bosch Professional Angle Grinder GWS 750-100",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300&text=Angle+Grinder",
    category: "Power Tools",
    subcategory: "Grinders",
    inStock: true,
    dateAdded: "2024-01-15",
    brand: "Bosch",
  },
  {
    id: "2",
    name: "Makita Impact Drill HP2050H",
    price: 3299,
    originalPrice: null,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Impact+Drill",
    category: "Power Tools",
    subcategory: "Drills",
    inStock: true,
    dateAdded: "2024-01-10",
    brand: "Makita",
  },
  {
    id: "3",
    name: "DeWalt Circular Saw DWE575K",
    price: 4599,
    originalPrice: 5199,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300&text=Circular+Saw",
    category: "Power Tools",
    subcategory: "Saws",
    inStock: false,
    dateAdded: "2024-01-08",
    brand: "DeWalt",
  },
  {
    id: "4",
    name: "Industrial Safety Helmet",
    price: 899,
    originalPrice: 1199,
    rating: 4.4,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300&text=Safety+Helmet",
    category: "Safety Products",
    subcategory: "Head Protection",
    inStock: true,
    dateAdded: "2024-01-05",
    brand: "3M",
  },
  {
    id: "5",
    name: "LED Flood Light 50W",
    price: 1299,
    originalPrice: null,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300&text=LED+Light",
    category: "Lighting & Automation",
    subcategory: "Outdoor Lighting",
    inStock: true,
    dateAdded: "2024-01-03",
    brand: "Philips",
  },
  {
    id: "6",
    name: "Industrial Cleaning Solution 5L",
    price: 599,
    originalPrice: 799,
    rating: 4.2,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300&text=Cleaning+Solution",
    category: "Chemicals & Paints",
    subcategory: "Industrial Cleaners",
    inStock: true,
    dateAdded: "2024-01-01",
    brand: "Shivania",
  },
]

export default function LikedPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("dateAdded")
  const [filterCategory, setFilterCategory] = useState("all")

  const categories = [...new Set(likedProducts.map((p) => p.category))]

  const filteredProducts = likedProducts
    .filter((product) => filterCategory === "all" || product.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      }
    })

  const totalValue = likedProducts.reduce((sum, product) => sum + product.price, 0)
  const totalSavings = likedProducts.reduce(
    (sum, product) => sum + (product.originalPrice ? product.originalPrice - product.price : 0),
    0,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Navigation />

      {/* Header Section */}
      <section className="py-12 bg-shivania-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-shivania-gradient">My Wishlist</h1>
            <p className="text-lg text-muted-foreground font-serif mb-6">
              Keep track of your favorite products and never miss a deal
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-shivania-gradient">{likedProducts.length}</div>
                <div className="text-muted-foreground">Items Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-shivania-gradient">₹{totalValue.toLocaleString()}</div>
                <div className="text-muted-foreground">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹{totalSavings.toLocaleString()}</div>
                <div className="text-muted-foreground">Potential Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 p-4 bg-white/50 backdrop-blur rounded-lg border">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search your wishlist..." className="pl-10" />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dateAdded">Recently Added</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No items in your wishlist</h3>
            <p className="text-muted-foreground mb-6">Start adding products you love to keep track of them</p>
            <Button asChild>
              <Link href="/categories">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"
            }
          >
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur"
              >
                <CardContent className="p-0">
                  {viewMode === "grid" ? (
                    <>
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 bg-red-500 hover:bg-red-600 text-white"
                          >
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                        {!product.inStock && (
                          <Badge variant="destructive" className="absolute top-2 left-2">
                            Out of Stock
                          </Badge>
                        )}
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
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-500 hover:text-red-600 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex gap-4 p-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        {!product.inStock && (
                          <Badge variant="destructive" className="absolute -top-1 -right-1 text-xs">
                            Out
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant="outline" className="text-xs mb-1">
                              {product.subcategory}
                            </Badge>
                            <h3 className="font-semibold font-sans line-clamp-1">{product.name}</h3>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(product.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">({product.reviews})</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <span className="font-bold">₹{product.price.toLocaleString()}</span>
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

                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            <Button size="sm" disabled={!product.inStock}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/product/${product.id}`}>View Details</Link>
                            </Button>
                          </div>

                          <div className="flex gap-1">
                            <Button size="icon" variant="ghost" className="h-8 w-8">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Bulk Actions */}
        {filteredProducts.length > 0 && (
          <div className="mt-8 p-4 bg-white/50 backdrop-blur rounded-lg border">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="text-sm text-muted-foreground">{filteredProducts.length} items in your wishlist</div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add All to Cart
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Wishlist
                </Button>
                <Button variant="outline" className="text-red-500 hover:text-red-600 bg-transparent">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/shivania-logo.png" alt="Shivania Group" className="h-8 w-8" />
                <div>
                  <div className="font-bold text-lg font-sans">Hs Shivania Group</div>
                  <div className="text-xs text-muted-foreground font-serif">One App, All Solutions</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for manufacturing, distribution & business solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                    All Categories
                  </Link>
                </li>
                <li>
                  <Link href="/popular" className="text-muted-foreground hover:text-foreground">
                    Popular Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/category/power-tools" className="text-muted-foreground hover:text-foreground">
                    Power Tools
                  </Link>
                </li>
                <li>
                  <Link href="/category/electrical-electronics" className="text-muted-foreground hover:text-foreground">
                    Electrical & Electronics
                  </Link>
                </li>
                <li>
                  <Link href="/category/industrial-supplies" className="text-muted-foreground hover:text-foreground">
                    Industrial Supplies
                  </Link>
                </li>
                <li>
                  <Link href="/category/safety-equipment" className="text-muted-foreground hover:text-foreground">
                    Safety Equipment
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+91 12345 67890</li>
                <li>info@hsshivaniagroup.com</li>
                <li>
                  123 Business District
                  <br />
                  Mumbai, Maharashtra
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Hs Shivania Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
