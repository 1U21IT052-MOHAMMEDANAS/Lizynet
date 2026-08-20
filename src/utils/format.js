export function formatPrice(price, unit) {
  const formatted = new Intl.NumberFormat('en-IN').format(price)
  return `₹${formatted}${unit ? ` / ${unit}` : ''}`
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
