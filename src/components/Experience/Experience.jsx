import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'
import { experienceData } from '../../data/experience'
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)' }}
    >
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="text-center mb-20"
        >
          <p className="section-subheading">My Journey</p>
          <h2 className="section-heading">Work <span className="gold-text">Experience</span></h2>
          <div className="w-16 h-[2px] mx-auto mt-4"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            Professional experience building real-world web applications with modern tech stacks.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-8"
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden group transition-all duration-500"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(212,175,55,0.12)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
              />

              {/* Hover glow bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top left, ${exp.color}08 0%, transparent 60%)` }}
              />

              <div className="relative z-10 p-7">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-start gap-4">
                    {/* Company icon */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${exp.color}18`, border: `1px solid ${exp.color}35` }}
                    >
                      <Building2 size={22} style={{ color: exp.color }} />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest mb-1 block"
                        style={{ color: exp.color }}
                      >{exp.type}</span>
                      <h3 className="font-display text-xl font-bold text-white leading-tight">{exp.role}</h3>
                    </div>
                  </div>

                  {/* Year badge */}
                  {/* <div className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-mono"
                    style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}25`, color: exp.color }}
                  >{exp.year}</div> */}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Briefcase size={13} style={{ color: exp.color }} />
                    <span className="text-white/80 font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/45 text-xs">
                    <MapPin size={12} className="text-gold/40" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/45 text-xs">
                    <Calendar size={12} className="text-gold/40" />
                    {exp.duration}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] mb-5"
                  style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.2), transparent)' }}
                />

                {/* Description points */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-white/55 text-sm leading-relaxed">
                      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: exp.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full transition-all duration-300"
                      style={{
                        background: `${exp.color}10`,
                        border: `1px solid ${exp.color}28`,
                        color: exp.color,
                      }}
                    >{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3"
            style={{ border: '1px solid rgba(212,175,55,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-sm font-mono">Currently open to new opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
