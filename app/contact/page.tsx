"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building2, Users, Headphones, Globe } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 12345 67890", "+91 98765 43210"],
    description: "Mon-Sat 9:00 AM - 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@hsshivaniagroup.com", "sales@hsshivaniagroup.com"],
    description: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Business District", "Mumbai, Maharashtra 400001"],
    description: "Visit us during business hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    description: "Emergency support available 24/7",
  },
]

const offices = [
  {
    city: "Mumbai",
    type: "Head Office",
    address: "123 Business District, Mumbai, Maharashtra 400001",
    phone: "+91 12345 67890",
    email: "mumbai@hsshivaniagroup.com",
  },
  {
    city: "Delhi",
    type: "Regional Office",
    address: "456 Industrial Area, New Delhi, Delhi 110001",
    phone: "+91 11234 56789",
    email: "delhi@hsshivaniagroup.com",
  },
  {
    city: "Bangalore",
    type: "Regional Office",
    address: "789 Tech Park, Bangalore, Karnataka 560001",
    phone: "+91 80123 45678",
    email: "bangalore@hsshivaniagroup.com",
  },
  {
    city: "Chennai",
    type: "Regional Office",
    address: "321 Industrial Estate, Chennai, Tamil Nadu 600001",
    phone: "+91 44123 45678",
    email: "chennai@hsshivaniagroup.com",
  },
]

const departments = [
  { value: "sales", label: "Sales Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "general", label: "General Inquiry" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    department: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      department: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your products and services.")
    window.open(`https://wa.me/911234567890?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
              Get in touch with our team for any inquiries, support, or partnership opportunities. We're here to help
              you find the right solutions for your business needs.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg font-sans mb-2">{info.title}</h3>
                    <div className="space-y-1 mb-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-sans flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground font-serif">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => handleInputChange("department", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept.value} value={dept.value}>
                              {dept.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Enter message subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Enter your message here..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* WhatsApp Quick Contact */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg font-sans">Quick WhatsApp Support</h3>
                    <p className="text-sm text-muted-foreground">Get instant responses to your queries</p>
                  </div>
                </div>
                <Button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Google Maps integration would be here</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Visit our offices across major cities in India. Click on the map markers to get directions.
                </p>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Office Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{office.city}</h4>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{office.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                      <div className="flex flex-col gap-1 text-xs">
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {office.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {office.email}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">
              Need <span className="text-primary">Support?</span>
            </h2>
            <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
              Our dedicated support team is here to help you with any questions or technical assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg font-sans mb-2">Technical Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get help with product installation, troubleshooting, and technical queries
                </p>
                <Button variant="outline" size="sm">
                  Get Technical Help
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg font-sans mb-2">Sales Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with our sales team for product recommendations and quotes
                </p>
                <Button variant="outline" size="sm">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg font-sans mb-2">Partnership</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore partnership opportunities and business collaborations
                </p>
                <Button variant="outline" size="sm">
                  Partner With Us
                </Button>
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
