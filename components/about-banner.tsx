import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function AboutBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6">
              One App, <span className="text-shivania-gradient">All Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif mb-8 leading-relaxed">
              Hs Shivania Group is your comprehensive partner for manufacturing, distribution, and business solutions.
              From industrial supplies to cleaning products, we provide everything your business needs under one roof.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">15+ Years of Industry Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">10,000+ Products Across Categories</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">Pan-India Distribution Network</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600&text=Shivania+Group+About+Image"
              alt="About Hs Shivania Group"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-shivania-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
