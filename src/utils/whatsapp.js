const DEFAULT_COUNTRY_CODE = '91'

function normalizeNumber(number) {
  const digits = String(number).replace(/[^\d]/g, '')
  if (digits.length === 10) return `${DEFAULT_COUNTRY_CODE}${digits}`
  return digits
}

export function buildWhatsAppUrl(number, message) {
  const phone = normalizeNumber(number)
  const text = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${text}`
}

export function openWhatsApp(number, message) {
  window.open(buildWhatsAppUrl(number, message), '_blank', 'noopener,noreferrer')
}

export function productInquiryMessage(productName, businessName) {
  return `Hi, I'd like the best price for "${productName}"${businessName ? ` from ${businessName}` : ''}.`
}
