"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { AnnouncementMarquee } from "@/components/announcement-marquee"
import { HeroSlider } from "@/components/hero-slider"
import { AboutBanner } from "@/components/about-banner"
import { TrustedPartners } from "@/components/trusted-partners"
import { ProductCategories } from "@/components/product-categories"
import { ProductHighlights } from "@/components/product-highlights"
import { FestiveBanner } from "@/components/festive-banner"
import { BrochureDownload } from "@/components/brochure-download"
import { ProductCarousel } from "@/components/product-carousel"
import { ProductPopup } from "@/components/product-popup"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Award, Truck, Facebook, Linkedin, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
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
    featured: true,
    description: "Professional grade angle grinder with powerful 750W motor",
    features: ["750W Motor", "100mm Disc", "11000 RPM", "Ergonomic Design"],
    brand: "Bosch",
  },
  {
    id: "2",
    name: "Makita Impact Drill HP2050H",
    price: 3299,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300&text=Impact+Drill",
    category: "Power Tools",
    subcategory: "Drills",
    inStock: true,
    featured: true,
    description: "High-performance impact drill for professional applications",
    features: ["800W Motor", "13mm Chuck", "Variable Speed", "Impact Function"],
    brand: "Makita",
  },
  {
    id: "3",
    name: "Industrial Safety Helmet",
    price: 899,
    originalPrice: 1199,
    rating: 4.4,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300&text=Safety+Helmet",
    category: "Safety Products",
    subcategory: "Head Protection",
    inStock: true,
    featured: true,
    description: "Premium safety helmet with advanced protection features",
    features: ["Impact Resistant", "Adjustable Fit", "Ventilation System", "CE Certified"],
    brand: "3M",
  },
  {
    id: "4",
    name: "LED Flood Light 50W",
    price: 1299,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300&text=LED+Light",
    category: "Lighting & Automation",
    subcategory: "Outdoor Lighting",
    inStock: true,
    featured: true,
    description: "Energy-efficient LED flood light for outdoor applications",
    features: ["50W Power", "IP65 Rated", "5000K Color", "Long Lifespan"],
    brand: "Philips",
  },
  {
    id: "5",
    name: "Industrial Cleaning Solution 5L",
    price: 599,
    originalPrice: 799,
    rating: 4.2,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300&text=Cleaning+Solution",
    category: "Chemicals & Paints",
    subcategory: "Industrial Cleaners",
    inStock: true,
    featured: true,
    description: "Professional grade industrial cleaning solution",
    features: ["5L Volume", "Multi-Surface", "Eco-Friendly", "Fast Acting"],
    brand: "Shivania",
  },
]

const newArrivals = [
  {
    id: "6",
    name: "DeWalt Circular Saw DWE575K",
    price: 4599,
    originalPrice: 5199,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300&text=Circular+Saw",
    category: "Power Tools",
    subcategory: "Saws",
    inStock: true,
    description: "Professional circular saw with advanced cutting capabilities",
    features: ["1600W Motor", "190mm Blade", "LED Light", "Dust Port"],
    brand: "DeWalt",
  },
  {
    id: "7",
    name: "Stanley Planer STPP7502",
    price: 3799,
    originalPrice: 4299,
    rating: 4.4,
    reviews: 73,
    image: "/placeholder.svg?height=300&width=300&text=Planer",
    category: "Power Tools",
    subcategory: "Planers",
    inStock: true,
    description: "Precision planer for woodworking applications",
    features: ["750W Motor", "82mm Width", "Depth Control", "Dust Collection"],
    brand: "Stanley",
  },
  {
    id: "8",
    name: "Hitachi Router M12V2",
    price: 5299,
    rating: 4.8,
    reviews: 94,
    image: "/placeholder.svg?height=300&width=300&text=Router",
    category: "Power Tools",
    subcategory: "Routers",
    inStock: true,
    description: "High-precision router for professional woodworking",
    features: ["2000W Motor", "Variable Speed", "Soft Start", "Precision Base"],
    brand: "Hitachi",
  },
  {
    id: "9",
    name: "Black & Decker Orbital Sander",
    price: 1899,
    rating: 4.3,
    reviews: 67,
    image: "/placeholder.svg?height=300&width=300&text=Orbital+Sander",
    category: "Power Tools",
    subcategory: "Sanders",
    inStock: true,
    description: "Compact orbital sander for smooth finishing",
    features: ["135W Motor", "1/4 Sheet", "Dust Collection", "Ergonomic Grip"],
    brand: "Black & Decker",
  },
]

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-gradient-to-br from-primary/5 to-secondary/5">
      <Navigation />
      <AnnouncementMarquee />
      <main>
        {/* Hero Slider */}
        <HeroSlider />

        {/* About Banner */}
        <AboutBanner />

        {/* Trusted Partners */}
        <TrustedPartners />

        {/* Product Categories */}
        <ProductCategories />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <ProductCarousel
              title="Featured Products"
              products={featuredProducts}
              autoScroll={true}
              scrollInterval={4000}
              onProductClick={handleProductClick}
            />
          </div>
        </section>

        {/* Product Highlights */}
        <ProductHighlights />

        <section className="py-16 bg-white/50 backdrop-blur">
          <div className="container mx-auto px-4">
            <ProductCarousel
              title="New Arrivals"
              products={newArrivals}
              autoScroll={true}
              scrollInterval={5000}
              onProductClick={handleProductClick}
            />
          </div>
        </section>

        {/* Festive Banner */}
        <FestiveBanner />

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
                Why Choose <span className="text-shivania-gradient">Hs Shivania Group</span>
              </h2>
              <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
                We're committed to providing the best products and services for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-shivania transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-shivania-gradient-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
                  <p className="text-sm text-muted-foreground">Premium quality products from trusted manufacturers</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-shivania transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-shivania-gradient-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Quick and reliable delivery across all locations</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-shivania transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-shivania-gradient-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">Dedicated customer support and product guidance</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-shivania transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-shivania-gradient-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Trusted Brand</h3>
                  <p className="text-sm text-muted-foreground">Years of experience serving businesses nationwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-shivania-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 font-serif max-w-2xl mx-auto">
              Explore our wide range of categories and find the perfect solutions for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/categories">Browse All Categories</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Brochure Download */}
        <BrochureDownload />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/shivania-logo.png" alt="Hs Shivania Group Logo" className="h-8 w-8 object-contain" />
                <div>
                  <div className="font-bold text-lg font-sans">Hs Shivania Group</div>
                  <div className="text-xs text-muted-foreground font-serif">One App, All Solutions</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for manufacturing, distribution & business solutions.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-blue-600">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-pink-600">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-red-600">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
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
              <h4 className="font-semibold mb-4">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground">
                    Support
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

      <ProductPopup product={selectedProduct} isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  )
}
