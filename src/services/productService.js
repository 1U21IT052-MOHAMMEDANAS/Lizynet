import { products } from '../data/products.js'

// Mock implementation today; swap the bodies below for real API calls
// (e.g. fetch('/api/products')) once the Lizy Admin backend is live.

export async function getProducts() {
  return Promise.resolve(products)
}

export async function getProductBySlug(slug) {
  return Promise.resolve(products.find((p) => p.slug === slug) ?? null)
}

export async function getFeaturedProducts(limit = 6) {
  return Promise.resolve(products.slice(0, limit))
}
