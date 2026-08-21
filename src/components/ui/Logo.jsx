import logoLight from '../../assets/logos/lizynet-icon.png'
import logoDark from '../../assets/logos/lizynet-icon-dark.png'

export default function Logo({ size = 30, className = '', onDark = false }) {
  return (
    <img
      src={onDark ? logoDark : logoLight}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  )
}
