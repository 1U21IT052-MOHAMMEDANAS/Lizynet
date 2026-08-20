import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({
  as,
  href,
  to,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} strokeWidth={2.25} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} strokeWidth={2.25} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  const Tag = as || 'button'
  return (
    <Tag className={classes} {...rest}>
      {content}
    </Tag>
  )
}
