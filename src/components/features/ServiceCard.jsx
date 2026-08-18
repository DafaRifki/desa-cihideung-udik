import { Clock, CheckCircle2 } from 'lucide-react'
import Card from '../ui/Card'

export default function ServiceCard({ service }) {
  return (
    <Card className="flex flex-col" hover={false}>
      <Card.Body className="flex flex-1 flex-col">
        <h3 className="font-display text-lg font-medium text-ink">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>

        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-sawah-700">Syarat</p>
          <ul className="space-y-1.5">
            {service.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-sawah-500" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </Card.Body>
      <Card.Footer className="flex items-center gap-2 text-sm text-sawah-700">
        <Clock size={15} />
        Estimasi: {service.duration}
      </Card.Footer>
    </Card>
  )
}
