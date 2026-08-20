import { businesses } from '../data/businesses.js'

export async function getBusinesses() {
  return Promise.resolve(businesses)
}

export async function getBusinessBySlug(slug) {
  return Promise.resolve(businesses.find((b) => b.slug === slug) ?? null)
}
