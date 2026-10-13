import { motion } from 'framer-motion'
import { Monitor, Server, Wrench } from 'lucide-react'
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportConfig
} from '../../utils/animations'
import { skillsData } from '../../data/skills'
import {
  Boxes,
  Cloud,
  Globe,
  Layers,
  LockKeyhole,
  Network,
  Package,
  ShieldCheck,
  Terminal,
  Workflow
} from 'lucide-react'


const toolkit = [
  { name: 'Hostinger', icon: Globe },
  { name: 'VPS Hosting', icon: Server },
  { name: 'Docker', icon: Package },
  { name: 'Docker Compose', icon: Boxes },
  { name: 'Vercel', icon: Layers },
  { name: 'Render', icon: Cloud },
  { name: 'Nginx', icon: Server },
  { name: 'Linux', icon: Terminal },
  { name: 'SSH', icon: Network },
  { name: 'Domain & DNS', icon: Workflow },
  { name: 'SSL / HTTPS', icon: LockKeyhole },
  { name: 'CI/CD', icon: ShieldCheck }
]

const SkillBar = ({ name, level, icon, delay = 0 }) => {
  const Icon = icon

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass rounded-xl p-4 hover:border-gold/30 transition-all duration-300"
      style={{ border: '1px solid rgba(212,175,55,0.1)' }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Icon className="text-xl text-gold" />
          <span className="text-white text-sm font-medium">{name}</span>
        </div>

        <span className="text-gold text-xs font-mono">
          {level}%
        </span>
      </div>

      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #D4AF37, #F5E27A)'
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={viewportConfig}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: delay * 0.1
          }}
        />
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ title, skills, icon: CategoryIcon }) => (
  <motion.div
    variants={staggerItem}
    className="glass rounded-2xl p-6"
    style={{ border: '1px solid rgba(212,175,55,0.1)' }}
  >
    <div className="flex items-center gap-3 mb-5">
      <CategoryIcon className="w-6 h-6 text-gold" />
      <h3 className="font-display text-lg font-bold text-white">
        {title}
      </h3>
    </div>

    <div className="space-y-3">
      {skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          {...skill}
          delay={i}
        />
      ))}
    </div>
  </motion.div>
)

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-8 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)'
          }}
        />

        <div
          className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)'
          }}
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
          <p className="section-subheading">
            What I Know
          </p>

          <h2 className="section-heading">
            Technical{' '}
            <span className="gold-text">
              Skills
            </span>
          </h2>

          <div
            className="w-16 h-[2px] mx-auto mt-4"
            style={{
              background:
                'linear-gradient(90deg, transparent, #D4AF37, transparent)'
            }}
          />
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          <SkillCategory
            title="Frontend Development"
            skills={skillsData.frontend}
            icon={Monitor}
          />

          <SkillCategory
            title="Backend Development"
            skills={[
              ...skillsData.backend,
              ...skillsData.database
            ]}
            icon={Server}
          />
        </motion.div>

        {/* Tools Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-8"
        >
          <div
            className="glass rounded-2xl p-6"
            style={{
              border: '1px solid rgba(212,175,55,0.1)'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-6 h-6 text-gold" />
              <h3 className="font-display text-lg font-bold text-white">
                Tools & Technologies
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {skillsData.tools.map((tool, i) => {
                const Icon = tool.icon

                return (
                  <motion.div
                    key={tool.name}
                    initial={{
                      opacity: 0,
                      scale: 0.8
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1
                    }}
                    viewport={viewportConfig}
                    transition={{
                      delay: i * 0.08
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -4
                    }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl text-center cursor-default transition-all duration-300"
                    style={{
                      background:
                        'rgba(212,175,55,0.04)',
                      border:
                        '1px solid rgba(212,175,55,0.1)'
                    }}
                  >
                    <Icon className="text-3xl text-gold" />

                    <span className="text-white/70 text-xs font-medium">
                      {tool.name}
                    </span>

                    <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            'linear-gradient(90deg, #D4AF37, #F5E27A)'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${tool.level}%`
                        }}
                        viewport={viewportConfig}
                        transition={{
                          duration: 1,
                          delay: i * 0.1
                        }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>


         <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="mt-8 rounded-2xl border border-gold/10 bg-[#111111] p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Layers className="h-5 w-5 text-gold" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold text-white">
                    Deployment Toolkit
                  </h3>
                </div>
        
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                  {toolkit.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex min-h-12 items-center gap-2 rounded-lg border border-gold/10 bg-white/[0.02] px-3 py-2 text-xs font-medium text-white/70 transition-colors duration-300 hover:border-gold/35 hover:text-white"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
      </div>
    </section>
  )
}

export default Skills