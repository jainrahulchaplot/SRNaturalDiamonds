import { ProductKnowledge } from '../types/VoiceAssistant';
import { jewelryBundle } from '../data/products';

export class VoiceAssistantService {
  private knowledge: ProductKnowledge;

  constructor() {
    this.knowledge = {
      diamondQuality: {
        cut: "Our diamonds feature excellent cut grades that maximize brilliance and fire, ensuring each stone captures and reflects light beautifully.",
        clarity: "We use VS1 to VS2 clarity diamonds, meaning they have very slight inclusions that are invisible to the naked eye, ensuring exceptional beauty.",
        carat: "Our collection features diamonds ranging from 0.25 to 1.5 carats, with the total bundle containing 2.5 carats of natural diamonds.",
        color: "Our diamonds are graded F to G on the color scale, which means they appear colorless to the naked eye with exceptional brilliance."
      },
      brandUSP: [
        "100% natural diamonds with IGI and BIS certification",
        "Unbeatable pricing through direct sourcing and AI-optimized operations",
        "AI-first shopping experience with personalized recommendations",
        "Traditional Indian craftsmanship meets modern design",
        "Lifetime authenticity guarantee and professional cleaning service"
      ],
      pricing: "Our Royal Heritage Collection is priced at ₹85,000, which is 23% below market rate due to our direct sourcing and efficient operations.",
      authenticity: "Every diamond comes with IGI certification and BIS hallmarking. We provide a lifetime authenticity guarantee because we believe in complete transparency."
    };
  }

  async processQuery(query: string): Promise<string> {
    const lowerQuery = query.toLowerCase();

    // Product information queries
    if (lowerQuery.includes('product') || lowerQuery.includes('collection') || lowerQuery.includes('bundle')) {
      return `Our Royal Heritage Collection is a curated bundle featuring ${jewelryBundle.name}. It includes two elegant earrings, one delicate nose piece, and one stunning necklace, all crafted with natural diamonds and 18K gold. The collection is priced at ₹${jewelryBundle.price.toLocaleString('en-IN')} and comes with a lifetime authenticity guarantee.`;
    }

    // Diamond quality queries
    if (lowerQuery.includes('cut')) {
      return this.knowledge.diamondQuality.cut;
    }
    if (lowerQuery.includes('clarity')) {
      return this.knowledge.diamondQuality.clarity;
    }
    if (lowerQuery.includes('carat')) {
      return this.knowledge.diamondQuality.carat;
    }
    if (lowerQuery.includes('color')) {
      return this.knowledge.diamondQuality.color;
    }

    // Quality general query
    if (lowerQuery.includes('quality') || lowerQuery.includes('diamond')) {
      return "Our diamonds are carefully selected for the 4Cs: Cut for maximum brilliance, VS1-VS2 Clarity for exceptional beauty, F-G Color grade for colorless appearance, and varying Carat weights up to 2.5 total carats in our bundle. Each diamond is IGI certified and BIS hallmarked.";
    }

    // Pricing queries
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('expensive')) {
      return this.knowledge.pricing;
    }

    // Brand USP queries
    if (lowerQuery.includes('why') || lowerQuery.includes('choose') || lowerQuery.includes('special') || lowerQuery.includes('different')) {
      return `What makes SR Natural Diamonds special: ${this.knowledge.brandUSP.join(', ')}. We're committed to making authentic luxury accessible to every Indian woman.`;
    }

    // Authenticity queries
    if (lowerQuery.includes('authentic') || lowerQuery.includes('real') || lowerQuery.includes('genuine') || lowerQuery.includes('certificate')) {
      return this.knowledge.authenticity;
    }

    // Try-on queries
    if (lowerQuery.includes('try') || lowerQuery.includes('fitting') || lowerQuery.includes('size')) {
      return "We offer virtual try-on experiences and can schedule in-person consultations in Mumbai. Our jewelry is designed with adjustable settings to ensure the perfect fit for every customer.";
    }

    // Purchase/checkout queries
    if (lowerQuery.includes('buy') || lowerQuery.includes('purchase') || lowerQuery.includes('order') || lowerQuery.includes('checkout')) {
      return "To purchase our Royal Heritage Collection, you can click the 'Inquire Now' button on our product page, or I can connect you with our personal jewelry consultant for a customized experience. We offer flexible payment options and nationwide delivery.";
    }

    // Greeting responses
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('namaste')) {
      return "Namaste! Welcome to SR Natural Diamonds. I'm Jay, your personal jewelry assistant. I'm here to help you discover our beautiful collection of natural diamonds and answer any questions about quality, pricing, or our brand. How may I assist you today?";
    }

    // Default response
    return "I'm here to help you with information about our diamond collection, quality details, pricing, or any questions about SR Natural Diamonds. You can ask me about our products, diamond specifications, authenticity, or how to make a purchase. What would you like to know?";
  }
}