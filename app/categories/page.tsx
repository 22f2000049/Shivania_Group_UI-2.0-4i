import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Wrench,
  Zap,
  HardHat,
  Droplets,
  Shield,
  Hammer,
  Lightbulb,
  Package,
  Palette,
  Sun,
  Stethoscope,
  Cable,
  TreePine,
  Search,
  Filter,
  Grid3X3,
  List,
} from "lucide-react"
import Link from "next/link"

const allCategories = [
  {
    id: "adhesives-sealants",
    title: "Adhesives & Sealants",
    description: "Industrial adhesives, sealants, and bonding solutions",
    icon: Droplets,
    productCount: 45,
    subcategories: ["Structural Adhesives", "Silicone Sealants", "Epoxy Resins", "Thread Lockers"],
    image: "/placeholder.svg?height=200&width=300&text=Adhesives",
  },
  {
    id: "construction-materials",
    title: "Construction Materials & Machinery",
    description: "Building materials, construction equipment, and machinery",
    icon: HardHat,
    productCount: 120,
    subcategories: ["Cement & Concrete", "Steel & Rebar", "Construction Equipment", "Building Hardware"],
    image: "/placeholder.svg?height=200&width=300&text=Construction",
  },
  {
    id: "electrical-electronics",
    title: "Electrical & Electronics",
    description: "Electrical components, wiring, and electronic devices",
    icon: Zap,
    productCount: 200,
    subcategories: ["Switches & Sockets", "Circuit Breakers", "Transformers", "Electronic Components"],
    image: "/placeholder.svg?height=200&width=300&text=Electrical",
  },
  {
    id: "industrial-supplies",
    title: "Industrial Supplies",
    description: "General industrial equipment and maintenance supplies",
    icon: Wrench,
    productCount: 180,
    subcategories: ["Bearings", "Belts & Chains", "Pumps", "Valves & Fittings"],
    image: "/placeholder.svg?height=200&width=300&text=Industrial",
  },
  {
    id: "plumbing-fittings",
    title: "Plumbing & Fittings",
    description: "Pipes, fittings, and plumbing accessories",
    icon: Droplets,
    productCount: 85,
    subcategories: ["PVC Pipes", "Copper Fittings", "Bathroom Fixtures", "Water Heaters"],
    image: "/placeholder.svg?height=200&width=300&text=Plumbing",
  },
  {
    id: "safety-products",
    title: "Safety Products",
    description: "Personal protective equipment and safety gear",
    icon: Shield,
    productCount: 95,
    subcategories: ["Hard Hats", "Safety Gloves", "Protective Clothing", "First Aid Kits"],
    image: "/placeholder.svg?height=200&width=300&text=Safety",
  },
  {
    id: "power-tools",
    title: "Power Tools",
    description: "Electric and pneumatic power tools",
    icon: Hammer,
    productCount: 150,
    subcategories: ["Drills", "Grinders", "Saws", "Sanders"],
    image: "/placeholder.svg?height=200&width=300&text=Power+Tools",
  },
  {
    id: "hand-tools",
    title: "Hand Tools",
    description: "Manual tools and hand-operated equipment",
    icon: Wrench,
    productCount: 110,
    subcategories: ["Wrenches", "Screwdrivers", "Pliers", "Measuring Tools"],
    image: "/placeholder.svg?height=200&width=300&text=Hand+Tools",
  },
  {
    id: "cutting-tools",
    title: "Cutting Tools",
    description: "Blades, bits, and cutting implements",
    icon: Hammer,
    productCount: 75,
    subcategories: ["Drill Bits", "Saw Blades", "Cutting Discs", "Router Bits"],
    image: "/placeholder.svg?height=200&width=300&text=Cutting+Tools",
  },
  {
    id: "lighting-automation",
    title: "Lighting & Automation",
    description: "LED lights, smart controls, and automation systems",
    icon: Lightbulb,
    productCount: 90,
    subcategories: ["LED Lights", "Smart Switches", "Motion Sensors", "Control Panels"],
    image: "/placeholder.svg?height=200&width=300&text=Lighting",
  },
  {
    id: "packaging-office",
    title: "Packaging & Office Supplies",
    description: "Packaging materials and office essentials",
    icon: Package,
    productCount: 65,
    subcategories: ["Boxes & Cartons", "Bubble Wrap", "Office Stationery", "Printers & Supplies"],
    image: "/placeholder.svg?height=200&width=300&text=Packaging",
  },
  {
    id: "chemicals-paints",
    title: "Chemicals & Paints",
    description: "Industrial chemicals, paints, and coatings",
    icon: Palette,
    productCount: 80,
    subcategories: ["Industrial Paints", "Cleaning Chemicals", "Lubricants", "Protective Coatings"],
    image: "/placeholder.svg?height=200&width=300&text=Chemicals",
  },
  {
    id: "solar-energy",
    title: "Solar & Energy Solutions",
    description: "Solar panels, batteries, and renewable energy systems",
    icon: Sun,
    productCount: 55,
    subcategories: ["Solar Panels", "Inverters", "Batteries", "Charge Controllers"],
    image: "/placeholder.svg?height=200&width=300&text=Solar",
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment & Supplies",
    description: "Healthcare equipment and medical supplies",
    icon: Stethoscope,
    productCount: 70,
    subcategories: ["Diagnostic Equipment", "Medical Devices", "Disposables", "Furniture"],
    image: "/placeholder.svg?height=200&width=300&text=Medical",
  },
  {
    id: "wires-cables",
    title: "Wires, Cables & Fasteners",
    description: "Electrical wires, cables, and fastening hardware",
    icon: Cable,
    productCount: 130,
    subcategories: ["Power Cables", "Control Wires", "Bolts & Screws", "Anchors"],
    image: "/placeholder.svg?height=200&width=300&text=Wires",
  },
  {
    id: "wood-plywoods",
    title: "Wood, Plywoods & Laminates",
    description: "Timber, plywood sheets, and decorative laminates",
    icon: TreePine,
    productCount: 60,
    subcategories: ["Plywood Sheets", "Timber", "Decorative Laminates", "Veneers"],
    image: "/placeholder.svg?height=200&width=300&text=Wood",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">
              All <span className="text-primary">Categories</span>
            </h1>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Explore our comprehensive range of business solutions and industrial products
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search categories or products..." className="pl-10 bg-background" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px] bg-background">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="products">Most Products</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
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

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold font-sans">Browse Categories</h2>
              <p className="text-muted-foreground font-serif">
                {allCategories.length} categories • {allCategories.reduce((sum, cat) => sum + cat.productCount, 0)}{" "}
                total products
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCategories.map((category) => {
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
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-background/90">
                          {category.productCount} products
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg font-sans line-clamp-2 mb-2">{category.title}</h3>
                        <p className="text-sm text-muted-foreground font-serif line-clamp-2">{category.description}</p>
                      </div>

                      {/* Subcategories */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Popular Items
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {category.subcategories.slice(0, 3).map((sub) => (
                            <Badge key={sub} variant="outline" className="text-xs">
                              {sub}
                            </Badge>
                          ))}
                          {category.subcategories.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.subcategories.length - 3} more
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Categories Banner */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Most Popular <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif mb-8 max-w-2xl mx-auto">
            Discover our top-selling categories trusted by businesses nationwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allCategories
              .sort((a, b) => b.productCount - a.productCount)
              .slice(0, 6)
              .map((category) => {
                const IconComponent = category.icon
                return (
                  <Link key={category.id} href={`/category/${category.id}`} className="group">
                    <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-4 text-center">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium text-sm font-sans line-clamp-2">{category.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{category.productCount} items</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
          </div>

          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/popular">View All Popular Categories</Link>
            </Button>
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
              <h4 className="font-semibold mb-4">Top Categories</h4>
              <ul className="space-y-2 text-sm">
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
                  <Link href="/category/power-tools" className="text-muted-foreground hover:text-foreground">
                    Power Tools
                  </Link>
                </li>
                <li>
                  <Link href="/category/wires-cables" className="text-muted-foreground hover:text-foreground">
                    Wires & Cables
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
