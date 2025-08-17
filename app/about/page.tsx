import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Target, Eye, Heart, Factory, Truck, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    name: "Manufacturing",
    description: "Industrial equipment and machinery solutions",
    icon: Factory,
  },
  {
    name: "Construction",
    description: "Building materials and construction tools",
    icon: Building2,
  },
  {
    name: "Healthcare",
    description: "Medical equipment and healthcare supplies",
    icon: Heart,
  },
  {
    name: "Hospitality",
    description: "Housekeeping and cleaning solutions",
    icon: Users,
  },
  {
    name: "Logistics",
    description: "Packaging and transportation solutions",
    icon: Truck,
  },
  {
    name: "Safety & Security",
    description: "Personal protective equipment and safety gear",
    icon: Shield,
  },
]

const capabilities = [
  {
    title: "Quality Manufacturing",
    description: "State-of-the-art manufacturing facilities with ISO certifications",
    features: ["ISO 9001:2015 Certified", "Advanced Quality Control", "Automated Production Lines"],
  },
  {
    title: "Supply Chain Excellence",
    description: "Robust distribution network covering pan-India operations",
    features: ["Multi-location Warehouses", "Real-time Inventory", "Last-mile Delivery"],
  },
  {
    title: "Product Innovation",
    description: "Continuous R&D for developing cutting-edge solutions",
    features: ["In-house R&D Team", "Product Testing Labs", "Customer-centric Design"],
  },
  {
    title: "Customer Support",
    description: "24/7 technical support and after-sales service",
    features: ["Technical Helpdesk", "On-site Support", "Training Programs"],
  },
]

const milestones = [
  { year: "1995", title: "Company Founded", description: "Started as a small trading company" },
  { year: "2005", title: "Manufacturing Setup", description: "Established first manufacturing facility" },
  { year: "2015", title: "Pan-India Expansion", description: "Expanded operations across major cities" },
  { year: "2020", title: "Digital Transformation", description: "Launched e-commerce platform" },
  { year: "2024", title: "Market Leadership", description: "Became leading B2B solutions provider" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-6">
              About <span className="text-primary">Hs Shivania Group</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
              For over 25 years, we've been India's trusted partner in manufacturing, distribution, and business
              solutions, serving thousands of businesses with quality products and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-serif">
                <p>
                  Founded in 1995, Hs Shivania Group began as a small trading company with a vision to provide quality
                  industrial solutions to businesses across India. What started as a modest operation has grown into one
                  of the country's leading B2B solution providers.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering
                  commitment to customer satisfaction. From housekeeping products to industrial machinery, we've
                  expanded our portfolio to serve diverse industries with comprehensive solutions.
                </p>
                <p>
                  Today, we operate multiple manufacturing facilities, maintain extensive distribution networks, and
                  serve over 10,000 businesses nationwide. Our success is built on the foundation of trust, quality, and
                  reliability that our customers have come to expect.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Company+History"
                alt="Hs Shivania Group History"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Mission & Vision</h2>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Driving business success through innovative solutions and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans">Our Mission</h3>
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  To empower businesses across India with comprehensive, high-quality solutions that drive efficiency,
                  productivity, and growth. We are committed to being the trusted partner that businesses rely on for
                  all their operational needs.
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-sans">Our Vision</h3>
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  To become India's most trusted and innovative B2B solutions provider, setting industry standards for
                  quality, service, and customer satisfaction while contributing to the nation's economic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Manufacturing <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              State-of-the-art facilities and processes ensuring the highest quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-sans mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground font-serif mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Industries <span className="text-primary">We Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Providing specialized solutions across diverse industry verticals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg font-sans mb-2">{industry.name}</h3>
                    <p className="text-sm text-muted-foreground font-serif">{industry.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Key milestones that shaped our growth and success over the years
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10" />

                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="ml-12 md:ml-0">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/10">{milestone.year}</Badge>
                            <h3 className="font-bold text-lg font-sans">{milestone.title}</h3>
                          </div>
                          <p className="text-muted-foreground font-serif">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 opacity-90 font-serif max-w-2xl mx-auto">
            Join thousands of businesses who trust Hs Shivania Group for their operational needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/categories">Browse Products</Link>
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
