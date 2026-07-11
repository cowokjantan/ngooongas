# Robinhood Legends NFT Website

Production-ready, highly optimized Vanilla HTML/CSS/JS frontend for the **Robinhood Legends** NFT collection. Designed to mimic a AAA fantasy game portal with premium web3 aesthetics.

## Features
- **100% Vanilla JS & CSS**: No heavy frameworks. Maximum performance.
- **Glassmorphism UI**: Beautiful, transparent, blurred layouts for a premium feel.
- **Advanced Animations**: Custom 3D tilt effects, parallax scrolling, dynamic particle generation (floating leaves), and CSS keyframe fog/god rays.
- **60 FPS Performance**: Utilizing `requestAnimationFrame`, hardware-accelerated CSS transforms (`translateZ`, `scale3d`), and `IntersectionObserver` for lazy loading animations.
- **SEO Ready**: Fully configured Meta tags, Open Graph, Twitter Cards, Semantic HTML5, Schema.org JSON-LD, Sitemap, and Robots.txt.

## Project Structure
```text
/
├── index.html       # Main semantic markup
├── style.css        # Minified-ready stylesheet with custom properties
├── script.js        # Logic for observers, 3D tilt, and dynamic elements
├── manifest.json    # PWA Web Manifest
├── robots.txt       # Search engine crawler instructions
├── sitemap.xml      # XML Sitemap
├── vercel.json      # Security headers and caching configuration for Vercel
├── README.md        # Documentation
└── assets/
    ├── images/      # Place your downloaded generation assets here (1.jpg - 4.jpg)
    ├── icons/       # Favicons
    └── fonts/       # (Using Google Fonts via CDN in HTML)