import { useEffect, useState } from 'react'
import { X, Send } from 'lucide-react'
import Button from './Button.jsx'
import { openWhatsApp } from '../../utils/whatsapp.js'
import './EnquiryModal.css'

const WHATSAPP_NUMBER = '7094637631'

export default function EnquiryModal({ service, services = [], onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [comment, setComment] = useState('')

  useEffect(() => {
    if (service) setServiceType(service.name)
  }, [service])

  useEffect(() => {
    document.body.style.overflow = service ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [service])

  useEffect(() => {
    if (!service) return
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [service, onClose])

  if (!service) return null

  function handleSubmit(e) {
    e.preventDefault()

    const message = [
      'Hi! I have a service enquiry from LizyNet.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${serviceType}`,
      comment.trim() ? `Comment: ${comment.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    openWhatsApp(WHATSAPP_NUMBER, message)

    setName('')
    setPhone('')
    setComment('')
    onClose()
  }

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div
        className="enquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="enquiry-modal__head">
          <button type="button" className="enquiry-modal__close" onClick={onClose} aria-label="Close">
            <X size={18} strokeWidth={2.4} />
          </button>
          <span className="enquiry-modal__eyebrow">Service Enquiry</span>
          <h3 className="enquiry-modal__title" id="enquiry-modal-title">{service.name}</h3>
        </div>

        <form className="enquiry-modal__form" onSubmit={handleSubmit}>
          <div className="enquiry-modal__field">
            <label htmlFor="enquiry-name">Full name</label>
            <input
              id="enquiry-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="enquiry-modal__field">
            <label htmlFor="enquiry-phone">Phone number</label>
            <input
              id="enquiry-phone"
              type="tel"
              placeholder="+91 90000 00000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="enquiry-modal__field">
            <label htmlFor="enquiry-service">Service type</label>
            <select
              id="enquiry-service"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              {services.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          <div className="enquiry-modal__field">
            <label htmlFor="enquiry-comment">Comment</label>
            <textarea
              id="enquiry-comment"
              placeholder="Tell us a bit more about what you need..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
            />
          </div>

          <Button as="button" type="submit" variant="primary" size="md" icon={Send} className="enquiry-modal__submit">
            Send Enquiry
          </Button>
          <p className="enquiry-modal__note">You'll be redirected to WhatsApp to send this enquiry.</p>
        </form>
      </div>
    </div>
  )
}
