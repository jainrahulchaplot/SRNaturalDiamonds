# SR ENT - Authentic Luxury Diamonds

A modern, responsive React application showcasing SR Natural Diamond' premium collection of authentic natural diamond Jewellery. Built with cutting-edge web technologies and featuring an elegant, luxury-focused user interface.

## 🌟 Overview

SR ENT is a sophisticated e-commerce platform that celebrates the perfect harmony of traditional Indian elegance and modern sophistication. The application showcases the complete ENT Collection, featuring four exquisite pieces of natural diamond Jewellery handcrafted with precision and passion.

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Beautiful translucent glass effects with backdrop blur
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Dark Theme**: Elegant dark color scheme with luxury aesthetics
- **Interactive Elements**: Hover effects, sparkle animations, and micro-interactions

### 🛍️ Product Showcase
- **Complete ENT Collection**: Four-piece Jewellery collection
  - Imperial Nose Pin with natural diamond
  - Heritage Earrings (matching pair)
  - Majestic Royal Bliss Pendant
- **High-Quality Product Images**: Professional product photography
- **Detailed Descriptions**: Comprehensive product information
- **Bundle Pricing**: Special collection pricing with savings

### 🎯 User Experience
- **Voice Assistant Integration**: AI-powered diamond expert consultation
- **Smooth Scrolling Navigation**: Seamless page navigation
- **Trust Metrics**: 75+ years of legacy and trust indicators
- **Interactive Video**: Hero section with product showcase video
- **Call-to-Action Buttons**: Strategic placement for user engagement

### 📱 Mobile Optimization
- **Mobile-First Design**: Optimized for mobile devices
- **Touch-Friendly Interface**: Large touch targets and gestures
- **Responsive Typography**: Scalable text across all screen sizes
- **Optimized Performance**: Fast loading on mobile networks

## 🚀 Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready motion library
- **React Router**: Client-side routing
- **Lucide React**: Beautiful, customizable SVG icons

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting
- **PostCSS**: CSS processing

### Assets
- **Custom Animations**: CSS keyframes and transitions
- **High-Quality Images**: Professional product photography
- **Video Content**: Product showcase videos
- **Custom Fonts**: Premium typography

## 📁 Project Structure

```
SR ENT/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── onlylogo.png
│   │   │   └── sr-oglogo.png
│   │   ├── products/
│   │   │   ├── leftear.png
│   │   │   ├── rightear.png
│   │   │   ├── Pendant.png
│   │   │   └── nosepiece.png
│   │   └── hero/
│   │       └── bothfounders.png
│   ├── videos/
│   │   ├── hero/
│   │   │   └── ad_video1.mp4
│   │   └── product-showcase/
│   │       └── product_showcase.mp4
│   └── icons/
│       └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ModernHero.tsx
│   │   ├── DynamicIslandHeader.tsx
│   │   ├── TrustMetrics.tsx
│   │   ├── DiamondBundleShowcase.tsx
│   │   ├── VoiceAssistant.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   ├── Homepage.tsx
│   │   └── ProductPage.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "SR ENT"
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000) - Luxury and elegance
- **Secondary**: White (#FFFFFF) - Purity and sophistication
- **Accent**: Gold (#FFD700) - Premium and traditional
- **Text**: Obsidian variants - Subtle grays for readability

### Typography
- **Headings**: Custom display font for luxury feel
- **Body**: Clean, readable sans-serif
- **Responsive**: Scales appropriately across devices

### Components

#### ModernHero
- Hero section with video background
- Animated headlines with wave light effects
- Trust metrics display
- Call-to-action buttons

#### DynamicIslandHeader
- Glassmorphism design with backdrop blur
- Responsive navigation
- Logo and branding
- Smooth scroll navigation

#### TrustMetrics
- Four key trust indicators
- Animated cards with hover effects
- Responsive grid layout

#### DiamondBundleShowcase
- Product showcase with video
- 2x2 product grid
- Bundle pricing section
- "What's Included" and specifications

#### VoiceAssistant
- AI-powered consultation modal
- Interactive voice interface
- Professional consultation experience

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- 20px left/right padding on mobile
- Reduced spacing for compact layout
- Touch-friendly button sizes (44px minimum)
- Optimized typography scaling

### Desktop Features
- Full navigation menu
- Hover effects and animations
- Larger spacing and typography
- Enhanced visual effects

## 🎬 Animations & Effects

### CSS Animations
- **Sparkle**: Rotating sparkle effects
- **Glow**: Pulsing glow animations
- **Float**: Floating element animations
- **Wave Light**: Gradient wave text effects

### Framer Motion
- **Page Transitions**: Smooth page changes
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive element animations
- **Layout Animations**: Smooth layout changes

## 🛍️ Product Information

### ENT Collection
1. **Imperial Nose Pin** - ₹15,000
   - Single natural diamond
   - Traditional Indian design
   - 18K gold setting

2. **Heritage Earrings** - ₹25,000 (each)
   - Brilliant-cut natural diamonds
   - Matching pair design
   - Timeless sophistication

3. **Majestic Royal Bliss Pendant** - ₹45,000
   - Multiple natural diamonds
   - Statement piece design
   - Perfect for special occasions

### Bundle Pricing
- **Individual Total**: ₹156,000
- **Collection Price**: ₹21,000
- **Savings**: 87% discount

## 🎯 User Journey

1. **Landing**: Hero section with video and trust metrics
2. **Discovery**: Product showcase with detailed information
3. **Engagement**: Voice assistant consultation
4. **Action**: Collection exploration and contact

## 🔧 Customization

### Adding New Products
1. Add product images to `/public/images/products/`
2. Update the `products` array in `DiamondBundleShowcase.tsx`
3. Adjust pricing and descriptions as needed

### Modifying Colors
1. Update Tailwind configuration
2. Modify CSS custom properties in `index.css`
3. Adjust component-specific styling

### Adding New Sections
1. Create new component in `/src/components/`
2. Import and use in `Homepage.tsx`
3. Add responsive styling with Tailwind

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Optimized product images
- **Lazy Loading**: Components load as needed
- **Bundle Analysis**: Optimized bundle size

### Loading Performance
- **Fast Initial Load**: Vite-powered development
- **Smooth Animations**: 60fps animations
- **Responsive Images**: Optimized for all devices

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Options
- **Vercel**: Recommended for React applications
- **Netlify**: Easy deployment with drag-and-drop
- **GitHub Pages**: Free hosting for static sites
- **AWS S3**: Scalable cloud hosting

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_APP_TITLE=SR ENT
VITE_APP_DESCRIPTION=Authentic Luxury Diamonds
```

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Maintain responsive design principles
4. Test on multiple devices
5. Follow the existing code structure

### Code Style
- Use functional components with hooks
- Implement proper TypeScript types
- Follow naming conventions
- Add comments for complex logic

## 📞 Support

### Contact Information
- **Website**: [SR Natural Diamond](https://srnaturaldiamond.com)
- **Email**: srsonsros@gmail.com
- **Phone**: +91-XXXX-XXXXXX

### Business Hours
- **Monday - Friday**: 9:00 AM - 6:00 PM
- **Saturday**: 10:00 AM - 4:00 PM
- **Sunday**: Closed

## 📄 License

This project is proprietary software owned by SR Natural Diamond. All rights reserved.

## 🙏 Acknowledgments

- **Design Inspiration**: Traditional Indian Jewellery craftsmanship
- **Technology**: Modern web development best practices
- **Photography**: Professional product photography
- **Branding**: Legacy meets luxury philosophy

---

**SR ENT** - Where Legacy Meets Luxury ✨

*Authentic Natural Diamonds for Every Woman in India*
