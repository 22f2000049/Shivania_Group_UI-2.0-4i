// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const navMenu = document.getElementById("navMenu")

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Hero Slider
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    slides[index].classList.add("active")
    dots[index].classList.add("active")
    currentSlide = index
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length
    showSlide(next)
  }

  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length
    showSlide(prev)
  }

  // Auto-advance slides
  setInterval(nextSlide, 5000)

  // Navigation controls
  if (nextBtn) nextBtn.addEventListener("click", nextSlide)
  if (prevBtn) prevBtn.addEventListener("click", prevSlide)

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index))
  })

  // Product Carousel
  const featuredCarousel = document.getElementById("featuredCarousel")
  const featuredTrack = featuredCarousel?.querySelector(".carousel-track")
  const featuredPrev = document.getElementById("featuredPrev")
  const featuredNext = document.getElementById("featuredNext")

  let carouselPosition = 0
  const cardWidth = 300 // 280px + 20px gap

  function updateCarousel() {
    if (featuredTrack) {
      featuredTrack.style.transform = `translateX(-${carouselPosition * cardWidth}px)`
    }
  }

  if (featuredNext) {
    featuredNext.addEventListener("click", () => {
      const maxPosition = featuredTrack.children.length - Math.floor(featuredCarousel.offsetWidth / cardWidth)
      if (carouselPosition < maxPosition) {
        carouselPosition++
        updateCarousel()
      }
    })
  }

  if (featuredPrev) {
    featuredPrev.addEventListener("click", () => {
      if (carouselPosition > 0) {
        carouselPosition--
        updateCarousel()
      }
    })
  }

  // Auto-scroll carousel
  setInterval(() => {
    if (featuredTrack) {
      const maxPosition = featuredTrack.children.length - Math.floor(featuredCarousel.offsetWidth / cardWidth)
      if (carouselPosition >= maxPosition) {
        carouselPosition = 0
      } else {
        carouselPosition++
      }
      updateCarousel()
    }
  }, 4000)

  // Search functionality
  const searchBtn = document.getElementById("searchBtn")
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = prompt("Enter search term:")
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`)
        // Implement actual search functionality here
      }
    })
  }

  // Add to cart functionality
  const addToCartBtns = document.querySelectorAll(".add-to-cart")
  let cartCount = 0
  const cartCountElement = document.querySelector(".cart-count")

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++
      if (cartCountElement) {
        cartCountElement.textContent = cartCount
      }

      // Visual feedback
      btn.textContent = "Added!"
      btn.style.background = "#10b981"

      setTimeout(() => {
        btn.textContent = "Add to Cart"
        btn.style.background = ""
      }, 1500)
    })
  })

  // Brochure download
  const downloadBtn = document.querySelector(".download-btn")
  const brochureEmail = document.getElementById("brochureEmail")

  if (downloadBtn && brochureEmail) {
    downloadBtn.addEventListener("click", () => {
      const email = brochureEmail.value.trim()
      if (email && email.includes("@")) {
        alert("Catalog download link sent to your email!")
        brochureEmail.value = ""
      } else {
        alert("Please enter a valid email address.")
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".category-card, .product-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price)
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle window resize
let carouselPosition = 0 // Declare carouselPosition here
window.addEventListener(
  "resize",
  debounce(() => {
    // Recalculate carousel positions on resize
    const featuredCarousel = document.getElementById("featuredCarousel")
    if (featuredCarousel) {
      carouselPosition = 0
      const featuredTrack = featuredCarousel.querySelector(".carousel-track")
      if (featuredTrack) {
        featuredTrack.style.transform = "translateX(0)"
      }
    }
  }, 250),
)
