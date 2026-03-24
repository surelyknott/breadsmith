export const siteData = {
  businessName: 'The Breadsmith',
  tagline: 'Handmade bread, pastries, and seasonal bakes from a growing local microbakery.',
  announcement:
    'Weekly drops land on Instagram first. Pre-orders open midweek for weekend collections.',
  hero: {
    eyebrow: 'Microbakery in motion',
    title: 'Made in Tunbridge Wells.',
    primaryCta: 'See the Menu',
    secondaryCta: 'How Orders Work',
    stats: [
      { label: 'Hero media', value: 'Photo or video ready' },
      { label: 'Menu style', value: 'Cut-out product cards' },
      { label: 'Story angle', value: 'Founder-led and local' },
    ]
  },
  homeHighlights: [
    {
      title: 'Built for people who discover you on Instagram',
      description:
        'The homepage carries the atmosphere, then quickly routes people into menu, story, orders, and contact without making them hunt.',
    },
    {
      title: 'A menu that can grow with the business',
      description:
        'Product cards are structured for transparent PNG cut-outs later, with expandable details for contents and allergens.',
    },
    {
      title: 'Story and credibility in the same place',
      description:
        'Founder imagery, awards, stockist mentions, and press references can sit together in a way social media cannot hold cleanly.',
    },
  ],
  featuredProducts: [
    {
      name: 'Country Sourdough',
      price: '£5.80',
      description: 'Crackling crust, open crumb, long fermentation.',
      contents: 'Organic white flour, wholegrain flour, water, sea salt.',
      allergens: 'Gluten',
      note: 'Core weekly loaf.',
      art: 'loaf',
    },
    {
      name: 'Pain au Chocolat',
      price: '£3.90',
      description: 'Laminated pastry with dark chocolate and deep colour.',
      contents: 'Flour, butter, milk, yeast, sugar, dark chocolate, salt.',
      allergens: 'Gluten, milk, egg, soy',
      note: 'Weekend favourite.',
      art: 'pastry',
    },
    {
      name: 'Seasonal Tart',
      price: '£24.00',
      description: 'Designed to echo the cut-out tart references from the brief.',
      contents: 'Sweet pastry shell, custard or seasonal filling.',
      allergens: 'Gluten, milk, egg, nuts depending on topping',
      note: 'Good candidate for transparent product photography.',
      art: 'tart',
    },
    {
      name: 'Morning Bun',
      price: '£3.40',
      description: 'Soft layers, citrus sugar, and a glossy finish.',
      contents: 'Flour, butter, sugar, citrus zest, yeast, salt.',
      allergens: 'Gluten, milk, egg',
      note: 'Strong visual product for homepage and menu.',
      art: 'bun',
    },
  ],
  menuIntro:
    'The menu page now follows the product-led references more closely: cleaner spacing, object-style artwork placeholders, and click-to-open details.',
  menuCollections: [
    {
      title: 'Weekly Bread',
      summary: 'Dependable loaves people can plan around.',
      items: [
        {
          name: 'Country Sourdough',
          price: '£5.80',
          description: 'Signature naturally leavened loaf.',
          contents: 'White flour, wholegrain flour, water, sea salt.',
          allergens: 'Gluten',
          notice: 'Available most weeks',
          art: 'loaf',
        },
        {
          name: 'Seeded Rye',
          price: '£6.20',
          description: 'Rye-led loaf with toasted seeds and deeper flavour.',
          contents: 'Rye flour, wheat flour, seeds, water, sea salt.',
          allergens: 'Gluten, sesame',
          notice: 'Best for toast and sandwiches',
          art: 'seeded',
        },
      ],
    },
    {
      title: 'Pastries and Treats',
      summary: 'High-appeal items that work well with cut-out photography.',
      items: [
        {
          name: 'Pain au Chocolat',
          price: '£3.90',
          description: 'Dark chocolate wrapped in crisp laminated layers.',
          contents: 'Flour, butter, milk, sugar, yeast, chocolate.',
          allergens: 'Gluten, milk, egg, soy',
          notice: 'Weekend drop',
          art: 'pastry',
        },
        {
          name: 'Morning Bun',
          price: '£3.40',
          description: 'Sticky citrus bun with a pastry-style finish.',
          contents: 'Flour, butter, sugar, yeast, citrus.',
          allergens: 'Gluten, milk, egg',
          notice: 'Weekend drop',
          art: 'bun',
        },
        {
          name: 'Seasonal Tart',
          price: '£24.00',
          description: 'Designed as the hero product for the cut-out card style.',
          contents: 'Short pastry shell with rotating seasonal filling.',
          allergens: 'Gluten, milk, egg, nuts depending on topping',
          notice: '48 hours notice',
          art: 'tart',
        },
      ],
    },
    {
      title: 'Special Orders',
      summary: 'Larger or custom bakes that need more notice.',
      items: [
        {
          name: 'Focaccia Tray',
          price: 'From £18.00',
          description: 'Olive oil-rich focaccia with rotating toppings.',
          contents: 'Flour, olive oil, water, sea salt, toppings vary.',
          allergens: 'Gluten',
          notice: 'Pre-order only',
          art: 'focaccia',
        },
        {
          name: 'Celebration Bake',
          price: 'Quote on request',
          description: 'Flexible format for larger gatherings or gifting.',
          contents: 'To be confirmed per order.',
          allergens: 'Varies by bake',
          notice: 'Minimum several days notice',
          art: 'celebration',
        },
      ],
    },
  ],
  orders: {
    intro:
      'Orders need to feel simple. This page explains the weekly rhythm first, then points people to the current drop on Instagram while leaving room for a proper order form later.',
    steps: [
      {
        step: '01',
        title: 'Watch for the weekly menu',
        description:
          'Use Instagram for the energy and latest drop, but keep the core ordering rules here so they stay easy to find.',
      },
      {
        step: '02',
        title: 'Send through the order',
        description:
          'For now this can stay manual by DM or email. The structure leaves room for a future order form when volume grows.',
      },
      {
        step: '03',
        title: 'Collect at the agreed time',
        description:
          'State the area, collection window, and notice period clearly so fewer customers need to message for basic logistics.',
      },
    ],
    policies: [
      'Pre-orders typically open midweek for weekend collection.',
      'Celebration or custom bakes should ask for at least 48 hours notice.',
      'Collection area, exact slot, and availability can be updated once confirmed by the client.',
    ],
  },
  faqs: [
    {
      question: 'Why keep Instagram if there is now a website?',
      answer:
        'Instagram stays useful for weekly drops and quick updates. The website becomes the stable home for menu expectations, story, logistics, and credibility.',
    },
    {
      question: 'Can products show allergens and contents without clutter?',
      answer:
        'Yes. The menu cards are set up to expand on click so the first view stays clean while full details remain accessible.',
    },
    {
      question: 'Can the homepage use video later?',
      answer:
        'Yes. The hero layout is intentionally built so a still image placeholder can be swapped for video without redesigning the page.',
    },
  ],
  story: {
    title: 'A local bakery story with room for a real founder image and proper context.',
    intro:
      'The story page should feel personal without becoming rambling. It needs a strong founder image, a short origin story, and enough context to explain why people choose this bakery over a generic bread order.',
    founderNote:
      'Placeholder image block for Sam or a strong portrait in the bakery. Replace with real photography when available.',
    values: [
      {
        title: 'Made slowly',
        description:
          'Long fermentation and deliberate production are part of the point of difference, not hidden backend details.',
      },
      {
        title: 'Built locally',
        description:
          'The client is already doing well in the area. The site should reinforce that local trust and familiarity.',
      },
      {
        title: 'Growing intentionally',
        description:
          'This is the stage where a business benefits from a proper website without losing the personality that made it work in the first place.',
      },
    ],
  },
  awards: [
    'Awards and mentions section ready for real badges, stamps, and press logos.',
    'Use this area for bread awards, publications, market features, or stockist highlights.',
    'The layout works even before the final assets arrive, so the page still feels finished.',
  ],
  instagram: {
    intro:
      'Instagram can appear near the bottom of the homepage or on contact. For now this is a visual placeholder grid styled to suggest a live feed.',
    tiles: [
      'Bakes on trays',
      'Founder portrait',
      'Market table',
      'Process video still',
      'Crumb shot',
      'Weekend special',
    ],
  },
  contact: {
    intro:
      'Keep the contact page simple and direct. A microbakery does not need a heavy form if email, Instagram, and collection info are clear.',
    email: 'hello@thebreadsmithbakery.co.uk',
    instagramHandle: '@thebreadsmithbakery',
    instagramUrl: 'https://www.instagram.com/thebreadsmithbakery/',
    collectionDetails: 'Weekend collection slots from the bakery or an agreed local pickup point.',
    collectionNote:
      'Replace this placeholder with the final collection area, timing, and any delivery details once confirmed.',
  },
}
