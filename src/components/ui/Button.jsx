const VARIANTS = {
  primary: 'bg-sawah-700 text-beras-50 hover:bg-sawah-800 border border-sawah-700',
  secondary: 'bg-padi-500 text-sawah-900 hover:bg-padi-600 border border-padi-500',
  outline: 'bg-transparent text-sawah-700 border border-sawah-700 hover:bg-sawah-50',
  ghost: 'bg-transparent text-sawah-700 border border-transparent hover:bg-sawah-50',
}

const SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-padi-600 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
