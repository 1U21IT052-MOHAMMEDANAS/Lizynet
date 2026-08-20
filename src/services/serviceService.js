import { services } from '../data/services.js'

// Mock implementation today; swap the bodies below for real API calls
// once the Lizy Admin backend is live.

export async function getServices() {
  return Promise.resolve(services)
}

export async function getServiceBySlug(slug) {
  return Promise.resolve(services.find((s) => s.slug === slug) ?? null)
}
