import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PublicLayout from '../layouts/PublicLayout'
import HomePage from '../pages/public/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

/**
 * AppRouter LensaKarya
 * Tahap 1: Route publik (HomePage & NotFoundPage)
 * Tahap 2: Route Galeri, Paket, Detail Fotografer
 * Tahap 3-6: Auth, Dashboard Admin, Fotografer, Customer
 */
export default function AppRouter() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

