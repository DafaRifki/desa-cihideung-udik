export default function EmptyState({ icon: Icon, title = 'Belum ada data', description, action }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-sawah-200 bg-beras-50 px-6 py-16 text-center">
      {Icon && (
        <div className="stempel mb-4">
          <Icon size={26} strokeWidth={1.6} />
        </div>
      )}
      <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-sm text-ink-soft">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
