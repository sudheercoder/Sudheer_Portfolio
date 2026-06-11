import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig } from '../../utils/animations'
import { Code2, Layers, Zap, Award } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '2+', icon: Award },
  { label: 'Projects Built', value: '10+', icon: Layers },
  { label: 'Technologies', value: '15+', icon: Code2 },
  { label: 'Certifications', value: '3', icon: Zap },
]

const About = () => {
  return (
    <section id="about" className="relative py-28 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
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
          <p className="section-subheading">Get to Know Me</p>
          <h2 className="section-heading">About <span className="gold-text">Me</span></h2>
          <div className="w-16 h-[2px] mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Animated visual */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, transparent, #D4AF37)',
                  padding: '2px',
                  borderRadius: '1rem',
                }}
              >
                <div className="w-full h-full rounded-2xl bg-dark-100" />
              </motion.div>

              <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-dark-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="font-display text-7xl font-bold gold-text mb-4"
                  >SP</motion.div>
                  <div className="space-y-2">
                    {['React.js', 'Node.js', 'MongoDB', 'Express.js'].map((t, i) => (
                      <motion.div
                        key={t}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-white/50 text-xs font-mono"
                      >
                        <div className="w-1 h-1 rounded-full bg-gold/60" />
                        {t}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              {[
                'top-0 right-0 border-t-2 border-r-2',
                'bottom-0 left-0 border-b-2 border-l-2',
              ].map((cls, i) => (
                <div key={i} className={`absolute w-8 h-8 ${cls} border-gold/40 rounded`} />
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="font-display text-3xl font-bold text-white mb-6">
              Full Stack Developer &<br />
              <span className="gold-text">MERN Specialist</span>
            </h3>

            <div className="space-y-4 text-white/60 text-base leading-relaxed mb-10">
              <p>
                I'm <strong className="text-gold">Sudheer Pal</strong>, a passionate Full Stack Developer from Lucknow, India.
                Recently Completed my B.Tech in Computer Science from Raja Balwant Singh Engineering Technical Campus, Agra.
              </p>
              <p>
                I specialize in the MERN stack — building scalable, performant, and visually stunning web applications
                from the database layer to the polished user interface. I love turning complex problems into elegant, simple solutions.
              </p>
              <p>
                I'm a quick learner, self-motivated, and passionate about staying up-to-date with the latest technologies.
                When I'm not coding, I'm exploring new frameworks and contributing to personal projects.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { label: 'Name', value: 'Sudheer Pal' },
                { label: 'Email', value: 'spal57304@gmail.com' },
                { label: 'Phone', value: '+91 9720535155' },
                { label: 'Location', value: 'Lucknow, UP' },
                { label: 'Degree', value: 'B.Tech CSE' },
                { label: 'Status', value: 'Open to Work' },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-lg p-3">
                  <p className="text-gold/70 text-xs font-mono uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-white text-sm font-medium truncate">{value}</p>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary inline-block"
            >
              <span>Let's Work Together</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: 'rgba(212,175,55,0.1)' }}
              >
                <Icon size={20} className="text-gold" />
              </div>
              <div className="font-display text-3xl font-bold gold-text mb-1">{value}</div>
              <div className="text-white/50 text-xs font-mono uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
