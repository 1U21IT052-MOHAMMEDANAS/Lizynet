export default function Logo({ size = 30, className = '', onDark = false }) {
  const mark = onDark ? '#F8FAFC' : '#171717'

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <rect x="14" y="10" width="20" height="80" fill="#F97316" />
      <rect x="14" y="70" width="50" height="20" fill="#F97316" />
      <rect x="46" y="10" width="16" height="80" fill={mark} />
      <rect x="82" y="10" width="16" height="80" fill={mark} />
      <polygon points="46,10 62,10 98,90 82,90" fill={mark} />
    </svg>
  )
}
