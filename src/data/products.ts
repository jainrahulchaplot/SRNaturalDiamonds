import { Product } from '../types/Product';

export const jewelryBundle: Product = {
  id: 'luxury-bundle-001',
  name: 'Royal Heritage Collection',
  description: 'A curated collection of authentic natural diamonds crafted for the modern Indian woman. This exclusive bundle includes two elegant earrings, one delicate nose piece, and one stunning necklace.',
  price: 85000,
  images: [
    'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  features: [
    'Certified natural diamonds',
    'Traditional Indian craftsmanship',
    'Premium 18K gold setting',
    'Lifetime authenticity guarantee',
    'Complimentary jewelry box',
    'Free professional cleaning service'
  ],
  specifications: {
    material: '18K Gold with Natural Diamonds',
    purity: 'VS1-VS2 Clarity, F-G Color Grade',
    weight: 'Total Diamond Weight: 2.5 Carats',
    certification: 'IGI & BIS Hallmarked'
  }
};