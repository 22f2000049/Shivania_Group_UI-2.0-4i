"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Mail, CheckCircle } from "lucide-react"

export function BrochureDownload() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically handle the email submission
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-16 bg-shivania-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Download className="h-8 w-8" />
            <h2 className="text-3xl md:text-4xl font-bold font-sans">Get Our Complete Catalogue</h2>
          </div>

          <p className="text-lg font-serif mb-8 opacity-90 max-w-2xl mx-auto">
            Download our comprehensive product catalogue with detailed specifications, pricing, and availability
            information for all categories.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white text-gray-900 border-0 h-12"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold h-12"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/10 rounded-lg p-6">
                <CheckCircle className="h-6 w-6 text-green-300" />
                <div className="text-left">
                  <div className="font-semibold">Catalogue Sent!</div>
                  <div className="text-sm opacity-80">Check your email for the download link</div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm opacity-80">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>10,000+ Products Listed</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Updated Pricing & Specs</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Instant Download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
