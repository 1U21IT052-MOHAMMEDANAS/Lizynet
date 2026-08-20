import { useState } from 'react'
import { Network, CheckCircle2 } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import './Auth.css'

const roles = ['Customer', 'Business', 'Seller', 'Service Provider', 'Affiliate', 'Delivery Partner']

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [role, setRole] = useState(roles[0])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="auth-page">
      <div className="auth-page__panel">
        <div className="auth-page__brand">
          <span className="auth-page__logo">
            <Network size={20} strokeWidth={2.2} />
          </span>
          LizyNet
        </div>
        <h1 className="auth-page__panel-title">Join the Lizy ecosystem.</h1>
        <p className="auth-page__panel-desc">
          Whether you're a customer, a business, a seller or a service provider — there's a
          place for you across the network.
        </p>
        <ul className="auth-page__panel-list">
          <li><CheckCircle2 size={16} strokeWidth={2.4} /> Free to join, in minutes</li>
          <li><CheckCircle2 size={16} strokeWidth={2.4} /> Access every Lizy business</li>
          <li><CheckCircle2 size={16} strokeWidth={2.4} /> Programs for partners & affiliates</li>
        </ul>
      </div>

      <div className="auth-page__form-side">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="auth-form__title">Create your account</h2>
          <p className="auth-form__subtitle">
            Already on LizyNet? <a href="/login">Log in</a>
          </p>

          <div className="auth-form__fields">
            <div className="auth-form__field">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>
            <div className="auth-form__field">
              <label htmlFor="join-email">Email address</label>
              <input id="join-email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="auth-form__field">
              <label htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" placeholder="+91 90000 00000" required />
            </div>
            <div className="auth-form__field">
              <label htmlFor="role">I'm joining as a</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                {roles.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="auth-form__field">
              <label htmlFor="join-password">Password</label>
              <input id="join-password" type="password" placeholder="••••••••" required />
            </div>
            <Button as="button" type="submit" variant="primary" size="md" className="auth-form__submit">
              Join LizyNet
            </Button>
          </div>

          {submitted && (
            <p style={{ marginTop: 16, fontSize: 13.5, color: 'var(--color-success)' }}>
              This is a frontend-only demo — account creation isn't connected yet.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
