export const businesses = [
  {
    id: 'biz-1',
    slug: 'lizymart',
    name: 'LizyMart',
    tagline: 'The everyday marketplace',
    category: 'Marketplace',
    icon: 'ShoppingBag',
    description:
      'A curated marketplace connecting local sellers with buyers across essentials, electronics, fashion and more — built for trust and speed.',
    stats: { products: '400+', sellers: '120+' },
    accent: 'indigo',
    comingSoon: false,
  },
  {
    id: 'biz-2',
    slug: 'lizypumps',
    name: 'LizyPumps',
    tagline: 'Fuel & energy network',
    category: 'Energy',
    icon: 'Fuel',
    description:
      'A network of fuel stations and energy partners offering transparent pricing, loyalty rewards, and reliable service on the road.',
    stats: { locations: '30+', partners: '18+' },
    accent: 'amber',
    comingSoon: false,
  },
  {
    id: 'biz-3',
    slug: 'lizyrealty',
    name: 'LizyRealty',
    tagline: 'Property & real estate',
    category: 'Real Estate',
    icon: 'Building2',
    description:
      'Discover verified listings for residential and commercial property, backed by trusted local agents across the Lizy network.',
    stats: { listings: '250+', agents: '40+' },
    accent: 'teal',
    comingSoon: false,
  },
  {
    id: 'biz-4',
    slug: 'lizyserve',
    name: 'LizyServe',
    tagline: 'On-demand local services',
    category: 'Services',
    icon: 'Wrench',
    description:
      'Book trusted professionals for home, business and digital services — all discoverable and reachable in a single tap.',
    stats: { providers: '90+', categories: '15+' },
    accent: 'violet',
    comingSoon: false,
  },
  {
    id: 'biz-5',
    slug: 'lizyweb',
    name: 'LizyWeb',
    tagline: 'Digital & web studio',
    category: 'Digital Agency',
    icon: 'Globe',
    description:
      'Websites, apps, branding and digital marketing for businesses across the ecosystem — design and engineering under one roof.',
    stats: { projects: '150+', clients: '80+' },
    accent: 'blue',
    comingSoon: false,
  },
  {
    id: 'biz-6',
    slug: 'lizydelivery',
    name: 'LizyDelivery',
    tagline: 'Ecosystem-wide logistics',
    category: 'Logistics',
    icon: 'Truck',
    description:
      'Fast, reliable delivery infrastructure connecting every Lizy business to its customers.',
    stats: {},
    accent: 'rose',
    comingSoon: true,
  },
  {
    id: 'biz-7',
    slug: 'lizybook',
    name: 'LizyBook',
    tagline: 'Bookings & appointments',
    category: 'Booking',
    icon: 'CalendarCheck',
    description:
      'Unified scheduling for services and experiences across the entire Lizy network.',
    stats: {},
    accent: 'emerald',
    comingSoon: true,
  },
  {
    id: 'biz-8',
    slug: 'lizyads',
    name: 'LizyAds',
    tagline: 'Ecosystem advertising',
    category: 'Advertising',
    icon: 'Megaphone',
    description:
      'Promote your business across the entire Lizy network with targeted, performance-driven placements.',
    stats: {},
    accent: 'orange',
    comingSoon: true,
  },
]

export function getBusinessBySlug(slug) {
  return businesses.find((b) => b.slug === slug)
}
