/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out
  // that can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, or normal
  // shared hosting). Remove this line if you later add server-side features.
  output: 'export',

  // Each route becomes /about/index.html rather than /about.html, which keeps
  // URLs tidy on hosts that do not rewrite extensionless paths.
  trailingSlash: true,

  images: {
    // Next's image optimiser needs a server; a static export cannot use it.
    unoptimized: true,
  },
}

export default nextConfig
