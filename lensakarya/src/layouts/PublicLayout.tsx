import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollManager from '../components/common/ScrollManager'

/** Layout halaman publik (customer-facing): navbar + konten + footer. */
export default function PublicLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <ScrollManager />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

