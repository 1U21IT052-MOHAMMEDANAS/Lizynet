import { Compass } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import './DetailPage.css'

export default function NotFound() {
  return (
    <div className="not-found">
      <Compass size={40} strokeWidth={1.5} color="var(--color-primary)" />
      <span className="not-found__code">404</span>
      <h1>We couldn't find that page</h1>
      <p>It might have moved, or the ecosystem link is out of date.</p>
      <Button to="/" variant="primary" size="md">
        Back to LizyNet
      </Button>
    </div>
  )
}
