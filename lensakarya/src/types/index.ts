// Tipe data utama LensaKarya (mengikuti struktur response Laravel API)

export type Role = 'admin' | 'photographer' | 'customer'

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  count: number
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  photographer: string
  orientation: 'portrait' | 'landscape' | 'square'
  featured?: boolean
}

export interface PhotoPackage {
  id: number
  name: string
  slug: string
  category: string
  price: number
  duration: number // menit
  image: string
  description: string
  features: string[]
  popular?: boolean
}

export interface Photographer {
  id: number
  name: string
  slug: string
  specialty: string
  experience: number // tahun
  rating: number
  projects: number
  photo: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  message: string
  rating: number
  photo: string
}

