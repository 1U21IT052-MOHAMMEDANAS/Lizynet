import {
  ShoppingBag,
  Fuel,
  Building2,
  Wrench,
  Globe,
  Truck,
  CalendarCheck,
  Megaphone,
  Wheat,
  Lightbulb,
  Bed,
  Droplet,
  Headphones,
  Sofa,
  Code2,
  Home,
  Briefcase,
  Link2,
  Handshake,
  Store,
  Circle,
} from 'lucide-react'

const icons = {
  ShoppingBag,
  Fuel,
  Building2,
  Wrench,
  Globe,
  Truck,
  CalendarCheck,
  Megaphone,
  Wheat,
  Lightbulb,
  Bed,
  Droplet,
  Headphones,
  Sofa,
  Code2,
  Home,
  Briefcase,
  Link2,
  Handshake,
  Store,
}

export default function DynamicIcon({ name, size = 20, strokeWidth = 2, className = '' }) {
  const Icon = icons[name] || Circle
  return <Icon size={size} strokeWidth={strokeWidth} className={className} />
}
