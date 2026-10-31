/**
 * DATA DUMMY — HANYA UNTUK TAHAP DESAIN AWAL (Tahap 1).
 * Pada tahap berikutnya seluruh data ini akan diganti dengan data dari Laravel REST API
 * (endpoint /api/categories, /api/galleries, /api/packages, /api/photographers, /api/testimonials).
 */
import img from '../assets/images'
import type { Category, GalleryItem, PhotoPackage, Photographer, Testimonial } from '../types'

export const studioInfo = {
  name: 'LensaKarya',
  tagline: 'Mengabadikan Cerita, Menghidupkan Karya',
  address: 'Jl. Senopati No. 27, Kebayoran Baru, Jakarta Selatan 12190',
  phone: '+62 812 3456 7890',
  email: 'halo@lensakarya.id',
  hours: 'Senin – Minggu, 08.00 – 21.00 WIB',
  instagram: '@lensakarya.studio',
}

export const stats = [
  { value: 12, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 4800, suffix: '+', label: 'Sesi Pemotretan' },
  { value: 25, suffix: '', label: 'Fotografer Profesional' },
  { value: 98, suffix: '%', label: 'Klien Puas' },
]

export const categories: Category[] = [
  { id: 1, name: 'Wedding', slug: 'wedding', image: img.wedding, count: 128 },
  { id: 2, name: 'Prewedding', slug: 'prewedding', image: img.prewedding, count: 96 },
  { id: 3, name: 'Portrait', slug: 'portrait', image: img.portrait, count: 142 },
  { id: 4, name: 'Produk', slug: 'produk', image: img.product, count: 74 },
  { id: 5, name: 'Keluarga', slug: 'keluarga', image: img.family, count: 63 },
  { id: 6, name: 'Event', slug: 'event', image: img.event, count: 88 },
]

export const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Janji Suci di Jendela Senja', category: 'Wedding', image: img.wedding, photographer: 'Arya Pratama', orientation: 'portrait', featured: true },
  { id: 2, title: 'Langkah di Pantai Bali', category: 'Prewedding', image: img.prewedding, photographer: 'Nadia Kusuma', orientation: 'landscape' },
  { id: 3, title: 'Golden Rim', category: 'Portrait', image: img.portrait, photographer: 'Nadia Kusuma', orientation: 'portrait' },
  { id: 4, title: 'Essence of Gold', category: 'Produk', image: img.product, photographer: 'Arya Pratama', orientation: 'square' },
  { id: 5, title: 'Hangat Bersama', category: 'Keluarga', image: img.family, photographer: 'Nadia Kusuma', orientation: 'landscape' },
  { id: 6, title: 'Malam Gala', category: 'Event', image: img.event, photographer: 'Arya Pratama', orientation: 'portrait' },
  { id: 7, title: 'Menanti Buah Hati', category: 'Maternity', image: img.maternity, photographer: 'Nadia Kusuma', orientation: 'portrait' },
  { id: 8, title: 'Toga & Mimpi', category: 'Wisuda', image: img.graduation, photographer: 'Arya Pratama', orientation: 'landscape' },
  { id: 9, title: 'Beige Monolith', category: 'Fashion', image: img.fashion, photographer: 'Nadia Kusuma', orientation: 'portrait' },
]

export const packages: PhotoPackage[] = [
  {
    id: 1,
    name: 'Essential Portrait',
    slug: 'essential-portrait',
    category: 'Portrait',
    price: 850000,
    duration: 60,
    image: img.portrait,
    description: 'Sesi portrait personal di studio dengan pencahayaan profesional.',
    features: ['1 fotografer', '1 jam sesi studio', '2 pilihan backdrop', '15 foto edit premium', 'Galeri online privat'],
  },
  {
    id: 2,
    name: 'Signature Prewedding',
    slug: 'signature-prewedding',
    category: 'Prewedding',
    price: 4500000,
    duration: 240,
    image: img.prewedding,
    description: 'Cerita cinta Anda di lokasi outdoor pilihan dengan arahan gaya profesional.',
    features: ['2 fotografer', '4 jam sesi outdoor', '2 lokasi', '50 foto edit premium', 'Video teaser 60 detik', 'Album eksklusif 20x30'],
    popular: true,
  },
  {
    id: 3,
    name: 'Grand Wedding',
    slug: 'grand-wedding',
    category: 'Wedding',
    price: 12500000,
    duration: 600,
    image: img.wedding,
    description: 'Dokumentasi lengkap hari bahagia Anda dari persiapan hingga resepsi.',
    features: ['3 fotografer', 'Liputan 10 jam', 'Unlimited shots', '150 foto edit premium', 'Cinematic highlight film', 'Album luxury + box'],
  },
]

export const photographers: Photographer[] = [
  { id: 1, name: 'Arya Pratama', slug: 'arya-pratama', specialty: 'Wedding & Event', experience: 10, rating: 4.9, projects: 620, photo: img.photographer1 },
  { id: 2, name: 'Nadia Kusuma', slug: 'nadia-kusuma', specialty: 'Portrait & Maternity', experience: 8, rating: 5.0, projects: 480, photo: img.photographer2 },
  { id: 3, name: 'Raka Aditya', slug: 'raka-aditya', specialty: 'Produk & Komersial', experience: 6, rating: 4.8, projects: 350, photo: img.product },
  { id: 4, name: 'Sekar Ayu', slug: 'sekar-ayu', specialty: 'Fashion & Editorial', experience: 7, rating: 4.9, projects: 410, photo: img.fashion },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dimas & Anindya',
    role: 'Klien Grand Wedding',
    message: 'Tim LensaKarya bekerja sangat rapi dan tenang. Setiap momen kecil di hari pernikahan kami tertangkap dengan indah — seperti menonton ulang hari itu.',
    rating: 5,
    photo: img.wedding,
  },
  {
    id: 2,
    name: 'Clarissa Wijaya',
    role: 'Founder Aurum Parfum',
    message: 'Foto produk kami terlihat jauh lebih mewah. Penjualan online naik signifikan setelah kami memakai hasil foto dari LensaKarya.',
    rating: 5,
    photo: img.product,
  },
  {
    id: 3,
    name: 'Keluarga Hartono',
    role: 'Klien Family Session',
    message: 'Anak-anak kami biasanya sulit difoto, tapi fotografernya sabar dan seru. Hasilnya hangat dan natural. Pasti kembali lagi!',
    rating: 5,
    photo: img.family,
  },
]

export const bookingSteps = [
  { title: 'Pilih Paket', desc: 'Jelajahi galeri dan pilih paket yang sesuai kebutuhan Anda.' },
  { title: 'Atur Jadwal', desc: 'Pilih fotografer favorit beserta tanggal & jam yang tersedia.' },
  { title: 'Konfirmasi & Bayar', desc: 'Booking diverifikasi admin, lalu lakukan pembayaran dengan mudah.' },
  { title: 'Terima Karya', desc: 'Lihat dan unduh hasil foto langsung dari akun Anda.' },
]

