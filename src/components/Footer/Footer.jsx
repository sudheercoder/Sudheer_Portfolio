import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Heart, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react'
import logoImg from '/images/Sudheer-Pal-Logo.png'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

const socials = [
  { icon: FaGithub,      href: 'https://github.com/sudheercoder',     label: 'GitHub' },
  { icon: FaLinkedinIn,  href: 'https://www.linkedin.com/in/sudheerpal001/', label: 'LinkedIn' },
  { icon: HiOutlineMail, href: 'mailto:spal57304@gmail.com',            label: 'Email' },
  { icon: FaInstagram,   href: 'https://www.instagram.com/sudheerpal01?igsh=MWN1NTFzNHgxdWtmdA==',                 label: 'Instagram' },
]

const contactDetails = [
  { icon: Mail,   label: 'spal57304@gmail.com',              href: 'mailto:spal57304@gmail.com' },
  { icon: Phone,  label: '+91 9720535155',                   href: 'tel:+919720535155' },
  { icon: MapPin, label: 'Lucknow, Uttar Pradesh, India',    href: null },
]

const Footer = () => {
  const scrollTo = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #050505 100%)', borderTop: '1px solid rgba(212,175,55,0.12)' }}
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8 relative z-10">

        {/* Top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div whileHover={{ scale: 1.02 }} className="mb-5">
              <img src={logoImg} alt="Sudheer Pal" className="h-12 object-contain"/>
            </motion.div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Building modern, scalable, and beautiful web experiences with the MERN stack.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }} title={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-gold transition-all duration-300"
                  style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.12)' }}
                ><Icon size={15} /></motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold inline-block" />
              Contact
            </h4>
            <ul className="space-y-3.5">
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  {href ? (
                    <a href={href} className="flex items-start gap-2.5 text-white/40 hover:text-gold transition-colors duration-300 text-sm group">
                      <Icon size={14} className="text-gold/50 flex-shrink-0 mt-0.5 group-hover:text-gold transition-colors" />
                      {label}
                    </a>
                  ) : (
                    <span className="flex items-start gap-2.5 text-white/40 text-sm">
                      <Icon size={14} className="text-gold/50 flex-shrink-0 mt-0.5" />
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hire me CTA card */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold inline-block" />
              Availability
            </h4>
            <div className="rounded-xl p-5 mb-4"
              style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.18)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-white text-sm font-medium">Open to Work</span>
              </div>
              <p className="text-white/40 text-xs mb-4 leading-relaxed">
                Available for full-time roles, freelance projects, and collaborations.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('#contact')}
                className="w-full py-2.5 rounded-lg text-xs font-semibold font-mono flex items-center justify-center gap-1.5 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8941F)', color: '#0A0A0A' }}
              >
                Get In Touch <ArrowUpRight size={13} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] mb-7"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-mono">
            © 2026 <span className="text-gold/60">Sudheer Pal</span>. All Rights Reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1.5">
            Crafted with <Heart size={11} className="text-gold fill-gold" /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
