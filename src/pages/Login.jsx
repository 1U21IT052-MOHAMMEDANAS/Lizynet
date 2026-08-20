import { useState } from 'react'
import { Network, CheckCircle2 } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import './Auth.css'

export default function Login() {
  const [submitted, setSubmitted] = useState(false)

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
        <h1 className="auth-page__panel-title">Welcome back to the ecosystem.</h1>
        <p className="auth-page__panel-desc">
          Sign in to manage your presence across LizyMart, LizyServe, LizyRealty and every
          business in the Lizy network.
        </p>
        <ul className="auth-page__panel-list">
          <li><CheckCircle2 size={16} strokeWidth={2.4} /> One login, the whole ecosystem</li>
          <li><CheckCircle2 size={16} strokeWidth={2.4} /> Track orders, bookings & inquiries</li>
          <li><CheckCircle2 size={16} strokeWidth={2.4} /> Manage partner & affiliate programs</li>
        </ul>
      </div>

      <div className="auth-page__form-side">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="auth-form__title">Log in</h2>
          <p className="auth-form__subtitle">
            New to LizyNet? <a href="/join">Join the ecosystem</a>
          </p>

          <div className="auth-form__fields">
            <div className="auth-form__field">
              <label htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="auth-form__field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" required />
            </div>
            <div className="auth-form__row">
              <label className="auth-form__checkbox">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <Button as="button" type="submit" variant="primary" size="md" className="auth-form__submit">
              Log in
            </Button>
          </div>

          {submitted && (
            <p style={{ marginTop: 16, fontSize: 13.5, color: 'var(--color-success)' }}>
              This is a frontend-only demo — authentication isn't connected yet.
            </p>
          )}

          <div className="auth-form__divider">or continue with</div>
          <div className="auth-form__socials">
            <button type="button">Google</button>
            <button type="button">WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  )
}
