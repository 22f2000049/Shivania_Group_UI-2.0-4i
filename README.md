# Shivania Group E-commerce Website

A modern, responsive e-commerce website for Shivania Group - a leading manufacturer and supplier of industrial, construction, and cleaning solutions.

## Features

- 🏠 Modern homepage with hero slider and product carousels
- 📱 Mobile-first responsive design
- 🛍️ Complete product catalog with 26+ categories
- 💝 Wishlist/Liked products functionality
- 🔍 Advanced search and filtering
- 📢 Announcement marquee for promotions
- 🎨 Beautiful gradient design matching brand colors
- ⚡ Static site optimized for GitHub Pages

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Fork or clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

3. **Update repository name** (if different):
   - Edit `next.config.mjs` and change `basePath` and `assetPrefix` to match your repository name
   - Example: If your repo is `my-ecommerce-site`, change `/shivania-ecommerce` to `/my-ecommerce-site`

4. **Push to main branch**:
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/repository-name`

### Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Project Structure

- `/app` - Next.js app router pages
- `/components` - Reusable React components
- `/public` - Static assets (images, logos)
- `/.github/workflows` - GitHub Actions for deployment

## Categories

The website includes 26+ product categories:
- Industrial supplies and machinery
- Construction materials and tools
- Cleaning and housekeeping products
- Safety equipment and more

## Technologies Used

- Next.js 14 with App Router
- React 18
- Tailwind CSS
- TypeScript
- Lucide React Icons
- Radix UI Components
