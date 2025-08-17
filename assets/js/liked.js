// Liked products page functionality
document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".view-btn")
  const likedProducts = document.getElementById("liked-products")
  const emptyState = document.getElementById("empty-state")
  let likedCount = 6

  // View toggle functionality
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      viewButtons.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")

      const view = this.dataset.view
      if (view === "list") {
        likedProducts.classList.add("list-view")
      } else {
        likedProducts.classList.remove("list-view")
      }
    })
  })

  // Update liked count
  function updateLikedCount() {
    const badges = document.querySelectorAll(".badge, .nav-badge")
    const totalLiked = document.querySelector(".total-liked")

    badges.forEach((badge) => {
      badge.textContent = likedCount
      badge.style.display = likedCount > 0 ? "block" : "none"
    })

    if (totalLiked) {
      totalLiked.textContent = `${likedCount} items saved`
    }

    // Show/hide empty state
    if (likedCount === 0) {
      likedProducts.style.display = "none"
      emptyState.style.display = "block"
    } else {
      likedProducts.style.display = "grid"
      emptyState.style.display = "none"
    }
  }

  // Remove liked item
  window.removeLiked = (button) => {
    const productCard = button.closest(".product-card")
    productCard.style.animation = "fadeOut 0.3s ease"

    setTimeout(() => {
      productCard.remove()
      likedCount--
      updateLikedCount()
    }, 300)
  }

  // Clear all liked items
  window.clearAllLiked = () => {
    if (confirm("Are you sure you want to remove all liked products?")) {
      const productCards = document.querySelectorAll(".product-card")
      productCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.animation = "fadeOut 0.3s ease"
          setTimeout(() => {
            card.remove()
            if (index === productCards.length - 1) {
              likedCount = 0
              updateLikedCount()
            }
          }, 300)
        }, index * 100)
      })
    }
  }

  // Share wishlist
  window.shareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Shivania Group Wishlist",
        text: `Check out my wishlist of ${likedCount} products from Shivania Group!`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = window.location.href
      navigator.clipboard.writeText(url).then(() => {
        alert("Wishlist link copied to clipboard!")
      })
    }
  }

  // Add product actions
  document.querySelectorAll(".action-btn.primary").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.textContent = "Added!"
      this.style.background = "#059669"
      setTimeout(() => {
        this.textContent = "Add to Cart"
        this.style.background = ""
      }, 2000)
    })
  })

  // Initialize
  updateLikedCount()
})

// Add CSS animations
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.8); }
    }
    
    .list-view {
        display: flex !important;
        flex-direction: column;
        gap: 1rem;
    }
    
    .list-view .product-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem;
    }
    
    .list-view .product-image {
        width: 120px;
        height: 120px;
        margin-right: 1rem;
        flex-shrink: 0;
    }
    
    .list-view .product-info {
        flex: 1;
    }
    
    .list-view .product-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
`
document.head.appendChild(style)
