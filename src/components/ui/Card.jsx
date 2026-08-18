export default function Card({ children, className = '', hover = true, as: Component = 'div', ...props }) {
  return (
    <Component
      className={`overflow-hidden rounded-2xl border border-sawah-100 bg-beras-50 shadow-sm ${
        hover ? 'transition-shadow duration-200 hover:shadow-md hover:shadow-sawah-900/5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

Card.Media = function CardMedia({ children, className = '', ratio = 'aspect-[4/3]' }) {
  return <div className={`relative overflow-hidden bg-sawah-100 ${ratio} ${className}`}>{children}</div>
}

Card.Body = function CardBody({ children, className = '' }) {
  return <div className={`p-5 ${className}`}>{children}</div>
}

Card.Footer = function CardFooter({ children, className = '' }) {
  return <div className={`border-t border-sawah-100 px-5 py-3 ${className}`}>{children}</div>
}
