// Contact page functionality
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const data = Object.fromEntries(formData)

      // Validate form
      if (validateForm(data)) {
        // Simulate form submission
        showSuccessMessage()
        this.reset()
      }
    })
  }

  function validateForm(data) {
    const required = ["name", "email", "subject", "message"]

    for (const field of required) {
      if (!data[field] || data[field].trim() === "") {
        showError(`Please fill in the ${field} field.`)
        return false
      }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      showError("Please enter a valid email address.")
      return false
    }

    return true
  }

  function showError(message) {
    // Create or update error message
    let errorDiv = document.querySelector(".form-error")
    if (!errorDiv) {
      errorDiv = document.createElement("div")
      errorDiv.className = "form-error"
      contactForm.insertBefore(errorDiv, contactForm.firstChild)
    }

    errorDiv.textContent = message
    errorDiv.style.cssText = `
            background: #fee2e2;
            color: #dc2626;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #fecaca;
        `

    // Remove error after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentNode) {
        errorDiv.remove()
      }
    }, 5000)
  }

  function showSuccessMessage() {
    // Create success message
    const successDiv = document.createElement("div")
    successDiv.className = "form-success"
    successDiv.textContent = "Thank you! Your message has been sent successfully. We will get back to you soon."
    successDiv.style.cssText = `
            background: #dcfce7;
            color: #166534;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid #bbf7d0;
        `

    contactForm.insertBefore(successDiv, contactForm.firstChild)

    // Remove success message after 5 seconds
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove()
      }
    }, 5000)
  }

  // Add form field animations
  const formInputs = document.querySelectorAll(".contact-form input, .contact-form select, .contact-form textarea")
  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentNode.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      if (this.value === "") {
        this.parentNode.classList.remove("focused")
      }
    })
  })
})
