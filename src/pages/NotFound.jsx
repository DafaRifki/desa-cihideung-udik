import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <div className="stempel mb-5">
        <Compass size={26} strokeWidth={1.6} />
      </div>
      <h1 className="font-display text-3xl font-semibold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-soft">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <Button as={Link} to="/" className="mt-6">
        Kembali ke Beranda
      </Button>
    </div>
  )
}
