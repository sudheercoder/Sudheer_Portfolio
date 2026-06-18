import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '/images/Sudheer-Pal-logo.png'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false)
  const [active, setActive]       = useState('home')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(sections[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark shadow-xl' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between">

          {/* Logo */}
          <motion.button onClick={() => handleNavClick('#home')} whileHover={{ scale: 1.03 }} className="flex items-center gap-2">
            <img
              src={logo}
              alt="Sudheer Pal Logo"
              className="h-12 w-auto object-contain"
            />
          </motion.button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`relative font-sans text-sm tracking-wide transition-colors duration-300 ${active === id ? 'text-gold' : 'text-white/60 hover:text-white'}`}
                  >
                    {link.label}
                    {active === id && (
                      <motion.span layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                        style={{ background: 'linear-gradient(90deg, #D4AF37, #F5E27A)' }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Hire me CTA */}
          <div className="hidden lg:flex">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick('#contact')} className="btn-primary py-2.5 px-6 text-xs"
            ><span>Hire Me</span></motion.button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white/80 hover:text-gold transition-colors">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-8"
          >
            <img src={logo} alt="Logo" className="h-16 mb-4 object-contain"
              style={{ filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.6)) brightness(1.1)' }}
            />
            {navLinks.map((link, i) => (
              <motion.button key={link.label}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-2xl text-white hover:text-gold transition-colors"
              >{link.label}</motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
