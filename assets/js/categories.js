// Categories page functionality
document.addEventListener("DOMContentLoaded", () => {
  const categorySearch = document.querySelector(".category-search")
  const filterSelect = document.querySelector(".filter-select")
  const categoryCards = document.querySelectorAll(".category-card")

  // Search functionality
  if (categorySearch) {
    categorySearch.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()
      filterCategories(searchTerm, filterSelect.value)
    })
  }

  // Filter functionality
  if (filterSelect) {
    filterSelect.addEventListener("change", function () {
      const filterValue = this.value
      const searchTerm = categorySearch ? categorySearch.value.toLowerCase() : ""
      filterCategories(searchTerm, filterValue)
    })
  }

  function filterCategories(searchTerm, filterValue) {
    categoryCards.forEach((card) => {
      const title = card.querySelector(".category-title").textContent.toLowerCase()
      const description = card.querySelector(".category-description").textContent.toLowerCase()
      const category = card.dataset.category

      const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm)
      const matchesFilter = filterValue === "all" || category === filterValue

      if (matchesSearch && matchesFilter) {
        card.style.display = "block"
        card.style.animation = "fadeIn 0.3s ease"
      } else {
        card.style.display = "none"
      }
    })
  }

  // Add hover effects
  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})

// Add CSS animation
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`
document.head.appendChild(style)
