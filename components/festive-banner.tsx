import { Button } from "@/components/ui/button"
import { Sparkles, Gift } from "lucide-react"
import Link from "next/link"

export function FestiveBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200&text=Festive+Pattern')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-yellow-300" />
            <h2 className="text-4xl md:text-6xl font-bold font-sans">Festive Season Sale</h2>
            <Sparkles className="h-8 w-8 text-yellow-300" />
          </div>

          <p className="text-xl md:text-2xl font-serif mb-2 opacity-90">Up to 30% Off on All Categories</p>

          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Celebrate this festive season with amazing deals on industrial supplies, cleaning equipment, safety gear,
            and much more!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-orange-600 hover:bg-yellow-100 font-semibold"
              asChild
            >
              <Link href="/popular">
                <Gift className="mr-2 h-5 w-5" />
                Shop Festive Deals
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
              asChild
            >
              <Link href="/categories">Browse All Categories</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Free Shipping Above ₹2,000</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
              <span>Limited Time Offer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 text-yellow-300 opacity-50">
        <Sparkles className="h-12 w-12" />
      </div>
      <div className="absolute bottom-4 right-4 text-yellow-300 opacity-50">
        <Gift className="h-12 w-12" />
      </div>
    </section>
  )
}
