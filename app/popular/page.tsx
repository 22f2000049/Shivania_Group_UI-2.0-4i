import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wrench, Zap, Hammer, Cable, Shield, Lightbulb, Search, TrendingUp, Star, Filter } from "lucide-react"
import Link from "next/link"

const popularCategories = [
  {
    id: "power-tools",
    title: "Power Tools",
    description: "Electric drills, grinders, saws, and professional power equipment",
    icon: Hammer,
    productCount: 150,
    trending: true,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300&text=Power+Tools",
    topProducts: ["Angle Grinders", "Impact Drills", "Circular Saws", "Sanders"],
  },
  {
    id: "electrical-components",
    title: "Electrical Components",
    description: "Switches, sockets, circuit breakers, and electrical accessories",
    icon: Zap,
    productCount: 200,
    trending: true,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300&text=Electrical",
    topProducts: ["MCBs", "Contactors", "Relays", "Cable Glands"],
  },
  {
    id: "bearings",
    title: "Bearings & Mechanical",
    description: "Ball bearings, roller bearings, and mechanical components",
    icon: Wrench,
    productCount: 95,
    trending: false,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300&text=Bearings",
    topProducts: ["Ball Bearings", "Roller Bearings", "Thrust Bearings", "Pillow Blocks"],
  },
  {
    id: "wires-cables",
    title: "Wires & Cables",
    description: "Power cables, control wires, and electrical wiring solutions",
    icon: Cable,
    productCount: 130,
    trending: true,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300&text=Wires",
    topProducts: ["Power Cables", "Control Cables", "Armoured Cables", "Flexible Wires"],
  },
  {
    id: "measuring-tools",
    title: "Measuring Tools",
    description: "Precision measuring instruments and calibration equipment",
    icon: Wrench,
    productCount: 75,
    trending: false,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300&text=Measuring",
    topProducts: ["Digital Calipers", "Micrometers", "Dial Gauges", "Levels"],
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment",
    description: "Personal protective equipment and workplace safety gear",
    icon: Shield,
    productCount: 95,
    trending: true,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300&text=Safety",
    topProducts: ["Safety Helmets", "Safety Gloves", "Safety Shoes", "Harnesses"],
  },
  {
    id: "welding-consumables",
    title: "Welding Consumables",
    description: "Welding electrodes, wires, and welding accessories",
    icon: Hammer,
    productCount: 85,
    trending: false,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300&text=Welding",
    topProducts: ["Welding Electrodes", "MIG Wires", "TIG Rods", "Flux"],
  },
  {
    id: "led-lighting",
    title: "LED Lighting",
    description: "Energy-efficient LED lights and lighting solutions",
    icon: Lightbulb,
    productCount: 90,
    trending: true,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300&text=LED",
    topProducts: ["LED Bulbs", "LED Strips", "Flood Lights", "Street Lights"],
  },
]

export default function PopularCategoriesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold font-sans">
                Popular <span className="text-primary">Categories</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Discover our most sought-after business solutions trusted by thousands of customers
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search popular categories..." className="pl-10 bg-background" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] bg-background">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="products">Most Products</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="bg-background">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-sans mb-2">Top Business Categories</h2>
            <p className="text-muted-foreground font-serif">
              {popularCategories.length} popular categories • Most trusted by businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {popularCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={category.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground p-2 rounded-lg">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {category.trending && (
                          <Badge className="bg-orange-500 hover:bg-orange-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-background/90">
                          {category.productCount} products
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg font-sans line-clamp-1">{category.title}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{category.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground font-serif line-clamp-2">{category.description}</p>
                      </div>

                      {/* Top Products */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Top Products
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {category.topProducts.slice(0, 3).map((product) => (
                            <Badge key={product} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                          {category.topProducts.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.topProducts.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/category/${category.id}`}>View Products</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Why These Categories Are <span className="text-primary">Popular</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Trusted by businesses across industries for quality and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Businesses</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">Same Day</div>
                <div className="text-sm text-muted-foreground">Delivery Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">HS</span>
                </div>
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
              <h4 className="font-semibold mb-4">Popular Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/category/power-tools" className="text-muted-foreground hover:text-foreground">
                    Power Tools
                  </Link>
                </li>
                <li>
                  <Link href="/category/electrical-components" className="text-muted-foreground hover:text-foreground">
                    Electrical Components
                  </Link>
                </li>
                <li>
                  <Link href="/category/wires-cables" className="text-muted-foreground hover:text-foreground">
                    Wires & Cables
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
