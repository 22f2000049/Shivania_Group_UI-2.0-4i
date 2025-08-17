import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-shivania-gradient-subtle py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-foreground leading-tight">
                One App, <span className="text-shivania-gradient">All Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-serif max-w-2xl">
                Your trusted partner for manufacturing, distribution & business solutions. From housekeeping products to
                industrial supplies - we've got everything covered.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-medium bg-shivania-gradient hover:opacity-90" asChild>
                <Link href="/categories">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent border-2 border-primary hover:bg-shivania-gradient-light"
                asChild
              >
                <Link href="/categories">
                  Explore Categories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-shivania-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-shivania-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-shivania-gradient">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-shivania-gradient-light p-8 flex items-center justify-center shadow-shivania">
              <img
                src="/modern-warehouse-cleaning.png"
                alt="Hs Shivania Group Products"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card border rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">Industrial Supplies</div>
              <div className="text-xs text-muted-foreground">Power Tools & More</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-3 shadow-lg">
              <div className="text-sm font-medium">Cleaning Solutions</div>
              <div className="text-xs text-muted-foreground">Eco-Friendly Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
