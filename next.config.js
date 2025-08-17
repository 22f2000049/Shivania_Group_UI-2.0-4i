/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // ensures Next.js exports static HTML
  images: {
    unoptimized: true, // disable Next.js image optimizer (GitHub Pages can't run it)
  },
  basePath: "/<your-repo-name>", // 👈 replace with your repo name
};

module.exports = nextConfig;
