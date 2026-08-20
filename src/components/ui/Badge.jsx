import './Badge.css'

export default function Badge({ children, tone = 'brand', icon: Icon, className = '' }) {
  return (
    <span className={`badge badge--${tone} ${className}`.trim()}>
      {Icon && <Icon size={13} strokeWidth={2.5} />}
      {children}
    </span>
  )
}
