const TONE_MAP = {
  'beras-to-sawah': { top: '#fbf8f0', bottom: '#23391f' },
  'sawah-to-beras': { top: '#23391f', bottom: '#fbf8f0' },
  'beras-to-beras50': { top: '#fbf8f0', bottom: '#fdfbf5' },
  'beras50-to-beras': { top: '#fdfbf5', bottom: '#fbf8f0' },
}

export default function TerraceDivider({ tone = 'beras-to-sawah', flip = false }) {
  const { top, bottom } = TONE_MAP[tone] || TONE_MAP['beras-to-sawah']

  return (
    <div className="terrace-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
        <rect width="1200" height="60" fill={top} />
        <path
          d="M0,60 L0,38 C100,20 200,50 300,32 C400,14 500,44 600,26 C700,8 800,38 900,22 C1000,6 1100,34 1200,18 L1200,60 Z"
          fill={bottom}
        />
      </svg>
    </div>
  )
}
