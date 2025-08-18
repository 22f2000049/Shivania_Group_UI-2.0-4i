"use client"

import { useState } from "react"
import { TrendingDown, Zap, Gift, Star, Clock } from "lucide-react"

const announcements = [
  {
    icon: TrendingDown,
    text: "🔥 MEGA PRICE DROP: Industrial Cleaning Supplies - Up to 40% OFF!",
    type: "price-drop",
  },
  {
    icon: Zap,
    text: "⚡ FLASH SALE: Power Tools & Equipment - Limited Time 35% Discount!",
    type: "flash-sale",
  },
  {
    icon: Gift,
    text: "🎁 NEW ARRIVAL: Premium Safety Equipment Collection Now Available!",
    type: "new-arrival",
  },
  {
    icon: Star,
    text: "⭐ BEST SELLER: Professional Adhesives & Sealants - Most Trusted by 10,000+ Businesses!",
    type: "best-seller",
  },
  {
    icon: Clock,
    text: "⏰ LIMITED TIME: Free Shipping on Orders Above ₹5,000 - Ends Tonight!",
    type: "limited-time",
  },
  {
    icon: TrendingDown,
    text: "💰 PRICE ALERT: Construction Materials - Prices Reduced by 25%!",
    type: "price-drop",
  },
  {
    icon: Gift,
    text: "🚀 JUST LAUNCHED: Smart Lighting & Automation Solutions!",
    type: "new-arrival",
  },
]

export function AnnouncementMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="bg-shivania-gradient text-white py-2 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-green-600/90" />

      <div
        className={`flex whitespace-nowrap animate-marquee ${isPaused ? "animation-paused" : ""} relative z-10`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* First set of announcements */}
        {announcements.map((announcement, index) => {
          const IconComponent = announcement.icon
          return (
            <div key={`first-${index}`} className="flex items-center mx-8 text-sm font-medium">
              <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">{announcement.text}</span>
              <div className="w-px h-4 bg-white/30 mx-8" />
            </div>
          )
        })}

        {/* Duplicate set for seamless loop */}
        {announcements.map((announcement, index) => {
          const IconComponent = announcement.icon
          return (
            <div key={`second-${index}`} className="flex items-center mx-8 text-sm font-medium">
              <IconComponent className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap">{announcement.text}</span>
              <div className="w-px h-4 bg-white/30 mx-8" />
            </div>
          )
        })}
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs opacity-75 z-10">Paused</div>
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
