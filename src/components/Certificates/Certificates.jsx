import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/animations'
import { certificatesData } from '../../data/education'
import { Award, Calendar } from 'lucide-react'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const CertCard = ({ cert }) => (
  <div className="relative glass rounded-2xl p-6 h-full group overflow-hidden"
    style={{ border: '1px solid rgba(212,175,55,0.1)' }}
  >
    <div className="absolute top-0 left-0 right-0 h-[2px]"
      style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
    />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
    />

    <div className="relative z-10">
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
          style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
        >
          {cert.icon}
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(212,175,55,0.08)' }}
        >
          <Award size={18} className="text-gold" />
        </div>
      </div>

      <span className="text-xs font-mono uppercase tracking-wider" style={{ color: cert.color }}>
        {cert.type}
      </span>
      <h3 className="font-display text-xl font-bold text-white mt-1 mb-2">{cert.title}</h3>

      <p className="text-white/50 text-sm leading-relaxed mb-4">{cert.description}</p>

      <div className="w-full h-[1px] bg-gold/10 mb-4" />

      <div className="flex items-center justify-between">
        <span className="text-white/60 text-xs font-medium">{cert.issuer}</span>
        <div className="flex items-center gap-1.5 text-white/40 text-xs">
          <Calendar size={11} />
          {cert.year}
        </div>
      </div>
    </div>
  </div>
)

const Certificates = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      spaceBetween: 24,
      slidesPerView: 1,
      autoplay: { delay: 3000, disableOnInteraction: false },
      pagination: { el: '.certs-pagination', clickable: true },
      navigation: { nextEl: '.certs-next', prevEl: '.certs-prev' },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    })
    return () => swiper.destroy()
  }, [])

  return (
    <section id="certificates" className="relative py-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-subheading">Credentials</p>
          <h2 className="section-heading">My <span className="gold-text">Certificates</span></h2>
          <div className="w-16 h-[2px] mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
        >
          <div ref={swiperRef} className="swiper certs-swiper pb-14">
            <div className="swiper-wrapper">
              {certificatesData.map((cert) => (
                <div key={cert.id} className="swiper-slide h-auto">
                  <CertCard cert={cert} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="certs-prev w-10 h-10 rounded-full glass flex items-center justify-center text-gold/60 hover:text-gold transition-all duration-300 border border-gold/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <div className="certs-pagination" />
              <button className="certs-next w-10 h-10 rounded-full glass flex items-center justify-center text-gold/60 hover:text-gold transition-all duration-300 border border-gold/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
