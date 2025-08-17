import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Grid3X3, List, Star, ShoppingCart, Heart, Eye, ChevronLeft, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const categoryData = {
  // Industrial & Business Categories
  "adhesives-sealants": {
    title: "Adhesives & Sealants",
    description: "Industrial adhesives, sealants, and bonding solutions for all applications",
    productCount: 45,
    subcategories: ["Epoxy Adhesives", "Silicone Sealants", "Structural Adhesives", "Thread Lockers", "Gasket Makers"],
  },
  "construction-materials": {
    title: "Construction Materials & Machinery",
    description: "Building materials, construction equipment, and machinery for all projects",
    productCount: 120,
    subcategories: ["Cement & Concrete", "Steel & Rebar", "Construction Tools", "Heavy Machinery", "Building Hardware"],
  },
  "electrical-electronics": {
    title: "Electrical & Electronics",
    description: "Electrical components, wiring, and electronic devices for industrial use",
    productCount: 200,
    subcategories: [
      "Switches & Sockets",
      "Circuit Breakers",
      "Transformers",
      "Electronic Components",
      "Control Panels",
    ],
  },
  "industrial-supplies": {
    title: "Industrial Supplies",
    description: "General industrial equipment and maintenance supplies for manufacturing",
    productCount: 180,
    subcategories: ["Bearings", "Belts & Chains", "Pumps", "Valves & Fittings", "Industrial Hardware"],
  },
  "plumbing-fittings": {
    title: "Plumbing & Fittings",
    description: "Pipes, fittings, and plumbing solutions for residential and commercial use",
    productCount: 85,
    subcategories: ["PVC Pipes", "Copper Fittings", "Valves", "Bathroom Fixtures", "Water Heaters"],
  },
  "safety-products": {
    title: "Safety Products",
    description: "Personal protective equipment and workplace safety solutions",
    productCount: 95,
    subcategories: ["Safety Helmets", "Protective Clothing", "Safety Shoes", "First Aid", "Fire Safety"],
  },
  "power-tools": {
    title: "Power Tools",
    description: "Professional electric and pneumatic power tools for all applications",
    productCount: 150,
    subcategories: ["Drills", "Grinders", "Saws", "Sanders", "Routers", "Planers"],
  },
  "hand-tools": {
    title: "Hand Tools",
    description: "Manual tools and hand-operated equipment for precision work",
    productCount: 110,
    subcategories: ["Wrenches", "Screwdrivers", "Hammers", "Pliers", "Measuring Tools"],
  },
  "cutting-tools": {
    title: "Cutting Tools",
    description: "Precision cutting tools and blades for industrial applications",
    productCount: 75,
    subcategories: ["Drill Bits", "Saw Blades", "End Mills", "Turning Tools", "Cutting Discs"],
  },
  "lighting-automation": {
    title: "Lighting & Automation",
    description: "LED lighting solutions and industrial automation equipment",
    productCount: 90,
    subcategories: ["LED Lights", "Industrial Lighting", "Smart Controls", "Sensors", "Automation Systems"],
  },
  "packaging-office": {
    title: "Packaging & Office Supplies",
    description: "Packaging materials and office supplies for business operations",
    productCount: 65,
    subcategories: ["Packaging Tape", "Boxes & Cartons", "Office Stationery", "Printing Supplies", "Storage Solutions"],
  },
  "chemicals-paints": {
    title: "Chemicals & Paints",
    description: "Industrial chemicals, paints, and coating solutions",
    productCount: 80,
    subcategories: ["Industrial Paints", "Cleaning Chemicals", "Lubricants", "Coatings", "Specialty Chemicals"],
  },
  "solar-energy": {
    title: "Solar & Energy Solutions",
    description: "Solar panels, inverters, and renewable energy equipment",
    productCount: 55,
    subcategories: ["Solar Panels", "Inverters", "Batteries", "Mounting Systems", "Energy Storage"],
  },
  "medical-equipment": {
    title: "Medical Equipment & Supplies",
    description: "Medical devices, equipment, and healthcare supplies",
    productCount: 70,
    subcategories: [
      "Diagnostic Equipment",
      "Medical Devices",
      "Hospital Supplies",
      "Laboratory Equipment",
      "First Aid",
    ],
  },
  "wires-cables": {
    title: "Wires, Cables & Fasteners",
    description: "Electrical wires, cables, and mechanical fasteners",
    productCount: 130,
    subcategories: ["Electrical Cables", "Network Cables", "Bolts & Screws", "Nuts & Washers", "Cable Management"],
  },
  "wood-plywoods": {
    title: "Wood, Plywoods & Laminates",
    description: "Timber, plywood, laminates, and wood-based materials",
    productCount: 60,
    subcategories: ["Plywood", "Laminates", "Timber", "MDF Boards", "Veneer"],
  },

  // Cleaning & Household Categories
  housekeeping: {
    title: "Housekeeping & Cleaning Items",
    description: "Professional cleaning supplies and housekeeping equipment",
    productCount: 85,
    subcategories: ["All-Purpose Cleaners", "Disinfectants", "Cleaning Tools", "Mops & Brooms", "Vacuum Cleaners"],
  },
  garden: {
    title: "Garden Solutions",
    description: "Gardening tools, fertilizers, and outdoor maintenance supplies",
    productCount: 45,
    subcategories: ["Garden Tools", "Fertilizers", "Plant Care", "Watering Systems", "Pest Control"],
  },
  kitchen: {
    title: "Dish & Kitchen Care",
    description: "Kitchen cleaning products and dishware maintenance solutions",
    productCount: 35,
    subcategories: ["Dish Soap", "Kitchen Cleaners", "Dishwasher Tablets", "Sponges & Scrubbers", "Kitchen Tools"],
  },
  laundry: {
    title: "Laundry & Fabric Care",
    description: "Laundry detergents, fabric softeners, and garment care products",
    productCount: 40,
    subcategories: ["Detergents", "Fabric Softeners", "Stain Removers", "Bleach", "Laundry Accessories"],
  },
  bathroom: {
    title: "Bathroom & Toilet Care",
    description: "Bathroom cleaners, toilet care products, and sanitation supplies",
    productCount: 30,
    subcategories: ["Toilet Cleaners", "Bathroom Cleaners", "Sanitizers", "Toilet Paper", "Bathroom Accessories"],
  },
  accessories: {
    title: "Cleaning Accessories",
    description: "Cleaning tools, accessories, and maintenance equipment",
    productCount: 55,
    subcategories: ["Cleaning Cloths", "Brushes", "Gloves", "Buckets", "Cleaning Carts"],
  },
  "floor-cleaners": {
    title: "Floor Cleaners",
    description: "Specialized floor cleaning products for all surface types",
    productCount: 25,
    subcategories: ["Tile Cleaners", "Wood Floor Care", "Carpet Cleaners", "Floor Polish", "Mopping Solutions"],
  },
  "hand-wash": {
    title: "Hand Washes",
    description: "Hand soaps, sanitizers, and personal hygiene products",
    productCount: 20,
    subcategories: ["Liquid Hand Soap", "Hand Sanitizers", "Antibacterial Soap", "Moisturizing Soap", "Dispensers"],
  },
  "air-care": {
    title: "Air Care",
    description: "Air fresheners, deodorizers, and indoor air quality products",
    productCount: 15,
    subcategories: ["Air Fresheners", "Deodorizers", "Room Sprays", "Diffusers", "Odor Eliminators"],
  },
  dustbins: {
    title: "Wide Variety of Dustbins",
    description: "Waste management solutions and dustbins for all applications",
    productCount: 35,
    subcategories: ["Plastic Dustbins", "Steel Dustbins", "Pedal Bins", "Recycling Bins", "Commercial Bins"],
  },
}

const mockProducts = [
  // Power Tools
  {
    id: "1",
    name: "Bosch Professional Angle Grinder GWS 750-100",
    price: 2499,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300&text=Angle+Grinder",
    category: "power-tools",
    subcategory: "Grinders",
    inStock: true,
    featured: true,
    specs: ["750W Motor", "100mm Disc", "11000 RPM"],
  },
  {
    id: "2",
    name: "Makita Impact Drill HP2050H",
    price: 3299,
    originalPrice: null,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Impact+Drill",
    category: "power-tools",
    subcategory: "Drills",
    inStock: true,
    featured: false,
    specs: ["800W Motor", "13mm Chuck", "Variable Speed"],
  },

  // Electrical & Electronics
  {
    id: "3",
    name: "Schneider Electric MCB 32A",
    price: 450,
    originalPrice: 520,
    rating: 4.6,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300&text=Circuit+Breaker",
    category: "electrical-electronics",
    subcategory: "Circuit Breakers",
    inStock: true,
    featured: true,
    specs: ["32A Rating", "C-Curve", "6kA Breaking"],
  },
  {
    id: "4",
    name: "Legrand Modular Switch 16A",
    price: 180,
    originalPrice: null,
    rating: 4.4,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300&text=Switch",
    category: "electrical-electronics",
    subcategory: "Switches & Sockets",
    inStock: true,
    featured: false,
    specs: ["16A Rating", "Modular Design", "ISI Certified"],
  },

  // Housekeeping
  {
    id: "5",
    name: "Lizol Disinfectant Floor Cleaner 975ml",
    price: 125,
    originalPrice: 145,
    rating: 4.3,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Floor+Cleaner",
    category: "housekeeping",
    subcategory: "All-Purpose Cleaners",
    inStock: true,
    featured: true,
    specs: ["975ml Bottle", "Kills 99.9% Germs", "Pleasant Fragrance"],
  },
  {
    id: "6",
    name: "Scotch-Brite Scrub Pad Pack of 6",
    price: 85,
    originalPrice: null,
    rating: 4.5,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300&text=Scrub+Pad",
    category: "housekeeping",
    subcategory: "Cleaning Tools",
    inStock: true,
    featured: false,
    specs: ["Pack of 6", "Heavy Duty", "Non-Scratch"],
  },

  // Safety Products
  {
    id: "7",
    name: "3M Safety Helmet H-700 Series",
    price: 850,
    originalPrice: 950,
    rating: 4.7,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300&text=Safety+Helmet",
    category: "safety-products",
    subcategory: "Safety Helmets",
    inStock: true,
    featured: true,
    specs: ["HDPE Shell", "4-Point Suspension", "ISI Certified"],
  },

  // Industrial Supplies
  {
    id: "8",
    name: "SKF Deep Groove Ball Bearing 6205",
    price: 320,
    originalPrice: null,
    rating: 4.8,
    reviews: 78,
    image: "/placeholder.svg?height=300&width=300&text=Bearing",
    category: "industrial-supplies",
    subcategory: "Bearings",
    inStock: true,
    featured: false,
    specs: ["25mm Bore", "52mm OD", "15mm Width"],
  },
]

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.slug as keyof typeof categoryData]

  if (!category) {
    notFound()
  }

  let categoryProducts = mockProducts.filter((product) => product.category === params.slug)

  // If no products found for this category, show sample products with category-appropriate names
  if (categoryProducts.length === 0) {
    categoryProducts = [
      {
        id: `${params.slug}-1`,
        name: `Premium ${category.title} Product 1`,
        price: 1299,
        originalPrice: 1499,
        rating: 4.5,
        reviews: 45,
        image: `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(category.title)}`,
        category: params.slug,
        subcategory: category.subcategories[0],
        inStock: true,
        featured: true,
        specs: ["High Quality", "Professional Grade", "Warranty Included"],
      },
      {
        id: `${params.slug}-2`,
        name: `Standard ${category.title} Product 2`,
        price: 899,
        originalPrice: null,
        rating: 4.3,
        reviews: 32,
        image: `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(category.title)}`,
        category: params.slug,
        subcategory: category.subcategories[1] || category.subcategories[0],
        inStock: true,
        featured: false,
        specs: ["Reliable", "Cost Effective", "Easy to Use"],
      },
      {
        id: `${params.slug}-3`,
        name: `Economy ${category.title} Product 3`,
        price: 599,
        originalPrice: 699,
        rating: 4.1,
        reviews: 28,
        image: `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(category.title)}`,
        category: params.slug,
        subcategory: category.subcategories[2] || category.subcategories[0],
        inStock: false,
        featured: false,
        specs: ["Budget Friendly", "Basic Features", "Good Value"],
      },
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/categories" className="text-muted-foreground hover:text-foreground">
              Categories
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/categories">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Categories
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">{category.title}</h1>
              <p className="text-lg text-muted-foreground font-serif mb-6">{category.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary">{category.productCount} Products</Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Professional Grade</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Fast Delivery</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={`/placeholder_image.png?height=300&width=400&text=${category.title}`}
                alt={category.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </h3>

                {/* Subcategories */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Subcategories</h4>
                    <div className="space-y-2">
                      {category.subcategories.map((sub) => (
                        <div key={sub} className="flex items-center space-x-2">
                          <Checkbox id={sub} />
                          <label htmlFor={sub} className="text-sm cursor-pointer">
                            {sub}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="under-2000" />
                        <label htmlFor="under-2000" className="text-sm cursor-pointer">
                          Under ₹2,000
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="2000-5000" />
                        <label htmlFor="2000-5000" className="text-sm cursor-pointer">
                          ₹2,000 - ₹5,000
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="above-5000" />
                        <label htmlFor="above-5000" className="text-sm cursor-pointer">
                          Above ₹5,000
                        </label>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Brand */}
                  <div>
                    <h4 className="font-medium mb-3">Brand</h4>
                    <div className="space-y-2">
                      {[
                        "Bosch",
                        "Makita",
                        "DeWalt",
                        "Black & Decker",
                        "Hitachi",
                        "Schneider Electric",
                        "Legrand",
                        "SKF",
                      ].map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox id={brand} />
                          <label htmlFor={brand} className="text-sm cursor-pointer">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Availability */}
                  <div>
                    <h4 className="font-medium mb-3">Availability</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="in-stock" />
                        <label htmlFor="in-stock" className="text-sm cursor-pointer">
                          In Stock
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="featured" />
                        <label htmlFor="featured" className="text-sm cursor-pointer">
                          Featured Products
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Search and Sort Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10" />
              </div>
              <div className="flex gap-2 items-center">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
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
                        <Button size="icon" variant="secondary" className="h-8 w-8" asChild>
                          <Link href={`/product/${product.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
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
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.specs.slice(0, 2).map((spec) => (
                            <Badge key={spec} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
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
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
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
