# Public Assets Directory

This directory contains all static assets for the SR Élan application.

## Directory Structure

### `/images/`
- **`logos/`** - Brand logos, including the main SR Élan logo
- **`products/`** - Product images, jewelry photos, diamond showcases
- **`hero/`** - Hero section images and banners
- **`backgrounds/`** - Background images and textures

### `/videos/`
- **`hero/`** - Hero section videos and promotional content
- **`product-showcase/`** - Product demonstration videos
- **`testimonials/`** - Customer testimonial videos

### `/icons/`
- **SVG icons** - Custom icons and graphics

## Usage

Assets in this directory are served directly by Vite and can be referenced in your code using:

```jsx
// Images
<img src="/images/logos/sr-elan-logo.svg" alt="SR Élan Logo" />

// Videos
<video src="/videos/hero/diamond-showcase.mp4" />

// Icons
<img src="/icons/diamond.svg" alt="Diamond Icon" />
```

## File Naming Convention

- Use kebab-case for file names (e.g., `sr-elan-logo.svg`)
- Include descriptive names (e.g., `diamond-ring-gold-18k.jpg`)
- Use appropriate file extensions (.svg, .png, .jpg, .mp4, etc.)

## Optimization

- Compress images before adding to maintain fast loading times
- Use WebP format for images when possible
- Keep video files optimized for web delivery
