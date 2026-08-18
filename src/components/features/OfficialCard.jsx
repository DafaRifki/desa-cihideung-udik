import Card from '../ui/Card'
import { User } from 'lucide-react'

export default function OfficialCard({ official }) {
  return (
    <Card className="text-center">
      <Card.Media ratio="aspect-square">
        <img
          src={official.photo}
          alt={official.name}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
        />
        <div className="absolute inset-0 hidden items-center justify-center bg-sawah-100 text-sawah-400">
          <User size={40} strokeWidth={1.5} />
        </div>
      </Card.Media>
      <Card.Body>
        <h3 className="font-display text-base font-medium text-ink">{official.name}</h3>
        <p className="mt-1 text-sm text-sawah-700">{official.position}</p>
        <p className="mt-1 font-mono text-xs text-ink-soft/70">{official.period}</p>
      </Card.Body>
    </Card>
  )
}
