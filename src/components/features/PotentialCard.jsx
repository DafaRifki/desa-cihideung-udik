import { Phone } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export default function PotentialCard({ item }) {
  return (
    <Card className="flex flex-col">
      <Card.Media>
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute left-3 top-3">
          <Badge tone="sawah">{item.category}</Badge>
        </div>
      </Card.Media>
      <Card.Body className="flex flex-1 flex-col">
        <h3 className="font-display text-lg font-medium text-ink">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>
        {item.contact && (
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-sawah-700">
            <Phone size={14} />
            {item.contact}
          </p>
        )}
      </Card.Body>
    </Card>
  )
}
