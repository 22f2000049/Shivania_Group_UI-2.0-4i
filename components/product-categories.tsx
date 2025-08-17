import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Leaf, Utensils, Shirt, Bath, Brush, Droplets, Hand, Wind, Trash2 } from "lucide-react"

const categories = [
  {
    title: "Housekeeping & Cleaning Items",
    description: "Professional cleaning solutions for all surfaces",
    icon: Sparkles,
    image: "/placeholder-n363l.png",
    href: "/category/housekeeping",
  },
  {
    title: "Garden Solutions",
    description: "Complete garden care and maintenance tools",
    icon: Leaf,
    image: "/placeholder-7nc1q.png",
    href: "/category/garden",
  },
  {
    title: "Dish & Kitchen Care",
    description: "Kitchen cleaning and dishwashing essentials",
    icon: Utensils,
    image: "/kitchen-cleaning-products.png",
    href: "/category/kitchen",
  },
  {
    title: "Laundry & Fabric Care",
    description: "Fabric care solutions and laundry products",
    icon: Shirt,
    image: "/placeholder-oauoh.png",
    href: "/category/laundry",
  },
  {
    title: "Bathroom & Toilet Care",
    description: "Bathroom cleaning and hygiene products",
    icon: Bath,
    image: "/bathroom-cleaning-products.png",
    href: "/category/bathroom",
  },
  {
    title: "Cleaning Accessories",
    description: "Brushes, mops, and cleaning tools",
    icon: Brush,
    image: "/cleaning-supplies.png",
    href: "/category/accessories",
  },
  {
    title: "Floor Cleaners",
    description: "Specialized floor cleaning solutions",
    icon: Droplets,
    image: "/floor-cleaning-products.png",
    href: "/category/floor-cleaners",
  },
  {
    title: "Hand Washes",
    description: "Hand hygiene and sanitizing products",
    icon: Hand,
    image: "/placeholder-6616h.png",
    href: "/category/hand-wash",
  },
  {
    title: "Air Care",
    description: "Air fresheners and odor control solutions",
    icon: Wind,
    image: "/air-fresheners-odor-control.png",
    href: "/category/air-care",
  },
  {
    title: "Wide Variety of Dustbins",
    description: "Dustbins and waste management solutions",
    icon: Trash2,
    image: "/placeholder.svg?height=200&width=300",
    href: "/category/dustbins",
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Explore Our <span className="text-primary">Product Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
            Discover our comprehensive range of products designed to meet all your business and household needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
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
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-lg font-sans line-clamp-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground font-serif line-clamp-2">{category.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href={category.href}>View Products</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/categories">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
