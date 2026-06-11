import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../../utils/animations";
import { projectsData } from "../../data/projects";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const colorMap = {
    "#D4AF37": "rgba(212,175,55,0.12)",
    "#4DB33D": "rgba(77,179,61,0.12)",
    "#61DAFB": "rgba(97,218,251,0.12)",
    "#FF6B6B": "rgba(255,107,107,0.12)",
  };
  const bg = colorMap[project.color] || "rgba(212,175,55,0.1)";

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative rounded-2xl overflow-hidden group flex flex-col transition-all duration-500 h-full"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(212,175,55,0.1)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top center, ${bg} 0%, transparent 65%)`,
        }}
      />

      {/* Preview banner */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        {/* Aapki image yahan */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-fit "
          style={{ filter: `drop-shadow(0 0 12px ${project.color}60)` }}
        />

        {/* Number badge */}
        {/* <div
          className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono"
          style={{
            background: `${project.color}25`,
            border: `1px solid ${project.color}40`,
            color: project.color,
          }}
        >
          0{index + 1}
        </div> */}

        {/* Category tag */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono"
          style={{
            background: `${project.color}20`,
            border: `1px solid ${project.color}35`,
            color: project.color,
          }}
        >
          {project.category}
        </div>

        {/* Corner sparkle */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
          className="absolute bottom-4 right-4"
        >
          <Sparkles size={16} style={{ color: project.color }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full"
              style={{
                background: `${project.color}12`,
                border: `1px solid ${project.color}28`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-[1px] mb-4"
          style={{
            background:
              "linear-gradient(90deg, rgba(212,175,55,0.15), transparent)",
          }}
        />

        {/* Action links */}
        <div className="flex gap-3">
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}bb)`,
                color: "#0A0A0A",
                boxShadow: `0 4px 20px ${project.color}30`,
              }}
            >
              <ExternalLink size={13} /> Live Demo
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${project.live ? "" : "flex-1"} flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold font-mono border transition-all duration-300 text-white/60 hover:text-white hover:border-white/30`}
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Github size={13} /> GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)",
      }}
    >
      {/* BG pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(212,175,55,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="section-subheading">What I've Built</p>
          <h2 className="section-heading">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <div
            className="w-16 h-[2px] mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">
            Real-world projects built with modern technologies and clean
            architecture.
          </p>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* More projects link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-14"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/sudheercoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline text-sm"
          >
            <Github size={16} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
