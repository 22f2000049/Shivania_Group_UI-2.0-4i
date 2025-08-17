"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, ShoppingCart, User, Phone } from "lucide-react"
import { MobileSearchOverlay } from "./mobile-search-overlay"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = [
    {
      title: "Housekeeping & Cleaning",
      items: ["Floor Cleaners", "Hand Washes", "Air Care", "Cleaning Accessories"],
    },
    {
      title: "Garden Solutions",
      items: ["Garden Tools", "Plant Care", "Fertilizers", "Watering Systems"],
    },
    {
      title: "Industrial Supplies",
      items: ["Power Tools", "Safety Products", "Electrical Components", "Construction Materials"],
    },
    {
      title: "Kitchen & Laundry",
      items: ["Dish Care", "Fabric Care", "Kitchen Accessories", "Laundry Solutions"],
    },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Top Bar */}
        <div className="bg-shivania-gradient text-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span>Welcome to Hs Shivania Group</span>
                <span className="hidden md:inline">|</span>
                <span className="hidden md:inline">One App, All Solutions</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+91 12345 67890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/shivania-logo.png" alt="Hs Shivania Group Logo" className="h-10 w-10 object-contain" />
              <div className="hidden sm:block">
                <div className="font-bold text-lg font-sans">Hs Shivania Group</div>
                <div className="text-xs text-muted-foreground font-serif">One App, All Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>All Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      {categories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h4 className="font-medium text-sm text-primary">{category.title}</h4>
                          <ul className="space-y-1">
                            {category.items.map((item) => (
                              <li key={item}>
                                <Link
                                  href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/popular" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Popular Categories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-sm mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 bg-muted/50" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ShoppingCart className="h-5 w-5" />
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    <div className="py-4">
                      <h2 className="text-lg font-semibold mb-4">Menu</h2>
                      <nav className="space-y-4">
                        <Link
                          href="/"
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg hover:text-primary transition-colors"
                        >
                          Home
                        </Link>
                        <Link
                          href="/categories"
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg hover:text-primary transition-colors"
                        >
                          All Categories
                        </Link>
                        <Link
                          href="/popular"
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg hover:text-primary transition-colors"
                        >
                          Popular Categories
                        </Link>
                        <Link
                          href="/about"
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg hover:text-primary transition-colors"
                        >
                          About Us
                        </Link>
                        <Link
                          href="/contact"
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-lg hover:text-primary transition-colors"
                        >
                          Contact
                        </Link>
                      </nav>
                    </div>

                    <div className="border-t pt-4 mt-4">
                      <h3 className="font-medium mb-3 text-muted-foreground">Quick Categories</h3>
                      <div className="space-y-2">
                        {["Power Tools", "Electrical", "Safety", "Industrial"].map((cat) => (
                          <Link
                            key={cat}
                            href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4 mt-auto">
                      <div className="flex gap-2">
                        <Button className="flex-1" asChild>
                          <Link href="/contact" onClick={() => setIsOpen(false)}>
                            Contact Us
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <MobileSearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
