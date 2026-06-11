import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'
import { educationData } from '../../data/education'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section id="education" className="relative py-10 bg-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <p className="section-subheading">Academic Background</p>
          <h2 className="section-heading">My <span className="gold-text">Education</span></h2>
          <div className="w-16 h-[2px] mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="relative glass rounded-2xl p-6 overflow-hidden group transition-all duration-500"
              style={{ border: '1px solid rgba(212,175,55,0.1)' }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at top right, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
              />

              {/* Icon */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                >
                  {edu.icon}
                </div>

                <div className="mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider" style={{ color: edu.color }}>
                    {edu.grade}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-gold/70 text-sm font-medium mb-3">{edu.field}</p>

                <div className="w-full h-[1px] bg-gold/10 mb-4" />

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <GraduationCap size={13} className="text-gold/50 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-gold/40 flex-shrink-0" />
                    <span className="text-white/50 text-xs">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-gold/40 flex-shrink-0" />
                    <span className="text-white/50 text-xs font-mono">{edu.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
