import websiteDevelopmentImage from '../assets/services/website-development.jpeg'
import digitalMarketingImage from '../assets/services/digital-marketing.jpeg'
import homeServicesImage from '../assets/services/home-services.jpeg'
import businessServicesImage from '../assets/services/business-services.jpeg'

export const services = [
  {
    id: 'srv-1',
    slug: 'website-development',
    name: 'Website Development',
    category: 'Digital',
    icon: 'Code2',
    image: websiteDevelopmentImage,
    description:
      'Custom, high-performance websites and web apps built for growth — from landing pages to full platforms.',
    providerName: 'LizyWeb',
    whatsappNumber: '9100010001',
  },
  {
    id: 'srv-2',
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Digital',
    icon: 'Megaphone',
    image: digitalMarketingImage,
    description:
      'SEO, social media and performance marketing campaigns designed to grow your reach across the ecosystem.',
    providerName: 'LizyWeb',
    whatsappNumber: '9100010002',
  },
  {
    id: 'srv-3',
    slug: 'home-services',
    name: 'Home Services',
    category: 'Home',
    icon: 'Home',
    image: homeServicesImage,
    description:
      'Trusted professionals for cleaning, repairs, electrical, plumbing and more — booked in minutes.',
    providerName: 'LizyServe',
    whatsappNumber: '9100010003',
  },
  {
    id: 'srv-4',
    slug: 'business-services',
    name: 'Business Services',
    category: 'Business',
    icon: 'Briefcase',
    image: businessServicesImage,
    description:
      'Accounting, compliance, legal and consulting support for businesses of every size across the network.',
    providerName: 'LizyServe',
    whatsappNumber: '9100010004',
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
