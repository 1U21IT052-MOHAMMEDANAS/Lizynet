export const programs = [
  {
    id: 'prog-1',
    slug: 'affiliate-program',
    name: 'Affiliate Program',
    icon: 'Link2',
    tagline: 'Earn by referring',
    description:
      'Share Lizy businesses and products with your audience and earn commission on every conversion.',
    benefits: [
      'Trackable referral links for every business',
      'Transparent commission on qualified sales',
      'Real-time performance dashboard (coming soon)',
    ],
  },
  {
    id: 'prog-2',
    slug: 'partner-program',
    name: 'Partner Program',
    icon: 'Handshake',
    tagline: 'Grow with the ecosystem',
    description:
      'Bring your business onto LizyNet and reach customers across the entire ecosystem network.',
    benefits: [
      'Featured placement across LizyNet',
      'Access to shared logistics and marketing',
      'Dedicated partner support',
    ],
  },
  {
    id: 'prog-3',
    slug: 'seller-program',
    name: 'Seller Program',
    icon: 'Store',
    tagline: 'Sell on LizyMart',
    description:
      'List your products on LizyMart and reach thousands of buyers across the network.',
    benefits: [
      'Simple onboarding and listing tools',
      'Secure payments and order management',
      'Built-in audience from LizyNet',
    ],
  },
  {
    id: 'prog-4',
    slug: 'service-provider',
    name: 'Service Provider',
    icon: 'Wrench',
    tagline: 'Offer your services',
    description:
      'Join LizyServe as a verified provider and get discovered by customers who need your expertise.',
    benefits: [
      'Direct WhatsApp inquiries from customers',
      'Verified provider badge',
      'Zero listing fees to start',
    ],
  },
  {
    id: 'prog-5',
    slug: 'delivery-partner',
    name: 'Delivery Partner',
    icon: 'Truck',
    tagline: 'Deliver across the network',
    description:
      'Become a delivery partner and power logistics for every business in the Lizy ecosystem.',
    benefits: [
      'Flexible working hours',
      'Consistent order flow across businesses',
      'Weekly payouts',
    ],
  },
  {
    id: 'prog-6',
    slug: 'business-partnership',
    name: 'Business Partnership',
    icon: 'Building2',
    tagline: 'Bring your brand in',
    description:
      'Strategic partnerships for established businesses looking to plug into the Lizy ecosystem.',
    benefits: [
      'Co-branded ecosystem presence',
      'Cross-promotion across Lizy businesses',
      'Priority integration support',
    ],
  },
]

export function getProgramBySlug(slug) {
  return programs.find((p) => p.slug === slug)
}
