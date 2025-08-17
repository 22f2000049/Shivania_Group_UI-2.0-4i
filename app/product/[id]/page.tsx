"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
  Truck,
  Shield,
  RotateCcw,
  Phone,
  MessageCircle,
  Plus,
  Minus,
  Check,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock product data
const mockProduct = {
  id: "1",
  name: "Bosch Professional Angle Grinder GWS 750-100",
  price: 2499,
  originalPrice: 2999,
  rating: 4.5,
  reviews: 128,
  category: "Power Tools",
  subcategory: "Grinders",
  brand: "Bosch",
  model: "GWS 750-100",
  inStock: true,
  stockCount: 15,
  images: [
    "/placeholder.svg?height=500&width=500&text=Angle+Grinder+1",
    "/placeholder.svg?height=500&width=500&text=Angle+Grinder+2",
    "/placeholder.svg?height=500&width=500&text=Angle+Grinder+3",
    "/placeholder.svg?height=500&width=500&text=Angle+Grinder+4",
  ],
  description:
    "The Bosch Professional GWS 750-100 angle grinder is designed for professional use with a powerful 750W motor and 100mm disc capacity. Perfect for cutting, grinding, and polishing applications.",
  features: [
    "Powerful 750W motor for demanding applications",
    "100mm disc diameter for versatile use",
    "11,000 RPM for efficient material removal",
    "Ergonomic design for comfortable handling",
    "Spindle lock for easy disc changes",
    "Protective guard for safety",
  ],
  specifications: {
    "Motor Power": "750W",
    "Disc Diameter": "100mm",
    "No-load Speed": "11,000 RPM",
    "Spindle Thread": "M10",
    Weight: "1.7 kg",
    "Cable Length": "2.5m",
    Warranty: "2 Years",
  },
  variants: [
    { name: "100mm Disc", price: 2499, inStock: true },
    { name: "115mm Disc", price: 2699, inStock: true },
    { name: "125mm Disc", price: 2899, inStock: false },
  ],
}

const relatedProducts = [
  {
    id: "2",
    name: "Makita Impact Drill HP2050H",
    price: 3299,
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=200&text=Impact+Drill",
  },
  {
    id: "3",
    name: "DeWalt Circular Saw DWE575K",
    price: 4599,
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=200&text=Circular+Saw",
  },
  {
    id: "4",
    name: "Black & Decker Orbital Sander",
    price: 1899,
    rating: 4.3,
    image: "/placeholder.svg?height=200&width=200&text=Orbital+Sander",
  },
  {
    id: "5",
    name: "Hitachi Router M12V2",
    price: 5299,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=200&text=Router",
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // In a real app, you would fetch the product data based on params.id
  const product = mockProduct

  if (!product) {
    notFound()
  }

  const currentVariant = product.variants[selectedVariant]
  const savings = product.originalPrice ? product.originalPrice - currentVariant.price : 0

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
            <Link href="/category/power-tools" className="text-muted-foreground hover:text-foreground">
              {product.category}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 left-4 bg-background/80 backdrop-blur"
                asChild
              >
                <Link href="/category/power-tools">
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="secondary">{product.subcategory}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">Brand: {product.brand}</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">₹{currentVariant.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {savings > 0 && (
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    Save ₹{savings.toLocaleString()}
                  </Badge>
                  <span className="text-sm text-green-600">
                    ({Math.round((savings / product.originalPrice!) * 100)}% off)
                  </span>
                </div>
              )}
            </div>

            {/* Variants */}
            <div className="space-y-3">
              <h3 className="font-semibold">Select Variant:</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant, index) => (
                  <Button
                    key={index}
                    variant={selectedVariant === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedVariant(index)}
                    disabled={!variant.inStock}
                    className="relative"
                  >
                    {variant.name}
                    {!variant.inStock && <span className="absolute inset-0 bg-muted/50 rounded" />}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">{product.stockCount} items available</span>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1" disabled={!currentVariant.inStock}>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {currentVariant.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button size="lg" variant="outline">
                  Request Quote
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Free Delivery</div>
                  <div className="text-xs text-muted-foreground">On orders above ₹2000</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">2 Year Warranty</div>
                  <div className="text-xs text-muted-foreground">Manufacturer warranty</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">7 days return policy</div>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" className="flex-1 bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Support
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Product Description</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <h4 className="font-semibold mb-3">Features & Benefits:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl font-bold">{product.rating}</div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">Based on {product.reviews} reviews</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">Reviews will be displayed here in a real implementation.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Shipping Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Truck className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Free Delivery</div>
                        <div className="text-sm text-muted-foreground">
                          Free delivery on orders above ₹2000. Standard delivery charges apply for orders below ₹2000.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Secure Packaging</div>
                        <div className="text-sm text-muted-foreground">
                          All products are securely packaged to prevent damage during transit.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <RotateCcw className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Easy Returns</div>
                        <div className="text-sm text-muted-foreground">
                          7 days return policy. Items must be in original condition with all accessories.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold font-sans mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-sm font-sans line-clamp-2">{relatedProduct.name}</h3>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(relatedProduct.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({relatedProduct.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹{relatedProduct.price.toLocaleString()}</span>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/product/${relatedProduct.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
