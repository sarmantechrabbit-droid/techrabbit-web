import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden selection:bg-indigo-50 selection:text-indigo-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
