/** Format angka ke Rupiah, contoh: 2500000 -> "Rp 2.500.000" */
export function formatRupiah(value: number | string): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(Number(value) || 0)
    .replace(/\u00a0/g, ' ')
}

/** Format durasi menit -> "2 jam 30 menit" */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const r = minutes % 60
  if (h && r) return `${h} jam ${r} menit`
  if (h) return `${h} jam`
  return `${r} menit`
}

/** Gabungkan className secara kondisional */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

