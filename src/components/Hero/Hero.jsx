import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaReact, FaNode, FaJs } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ArrowDown, Download } from "lucide-react";
import profileImg from "/images/Sudheer-Profile-Pic.png";
import { SiExpress, SiMongodb } from "react-icons/si";

const typingTexts = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Frontend Developer",
];

const floatingTech = [
  { label: "Node", angle: 50, radius: 230, icon: <FaNode /> },
  { label: "JS", angle: 140, radius: 230, icon: <FaJs /> },
  { label: "Mongo", angle: 200  , radius: 230, icon:<SiMongodb /> },
  { label: "Express", angle: 270, radius: 230, icon: <SiExpress /> },
  {  angle: 340, radius: 230, icon: <FaReact /> },
  
];

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[index];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting ? text.slice(0, -1) : current.slice(0, text.length + 1),
          );
        },
        deleting ? 60 : 90,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="gold-text font-display">
      {text}
      <span
        className="inline-block w-[3px] h-[1em] bg-gold ml-1 align-middle"
        style={{ animation: "blink 0.8s step-end infinite" }}
      />
    </span>
  );
};

const Hero = () => {
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold/10"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20 - i * 5, 0],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* ── Left ── */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-xs font-mono tracking-wider">
                Available for Work
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gold/80 font-mono text-sm tracking-[4px] uppercase mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Sudheer <span className="gold-text">Pal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl sm:text-2xl font-sans font-light text-white/80 mb-6 h-9"
            >
              <TypingText />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/50 text-base leading-relaxed max-w-lg mb-10"
            >
              Passionate Full Stack Developer specializing in MERN Stack
              Development. I build modern, scalable, responsive, and
              user-friendly web applications with exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/images/Sudheer Pal FullStack.pdf"
                download
                className="btn-primary flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={16} />
                  Download Resume
                </span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-outline"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* ── Right: Profile ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center items-center"
          >
            
            <div
              className="relative flex items-center justify-center"
              style={{ width: "520px", height: "520px" }}
            >
              {/* Orbit rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-gold/10"
                  style={{
                    width: `${384 + (i + 1) * 40}px`,
                    height: `${384 + (i + 1) * 40}px`,
                    animation: `spin ${20 + i * 10}s linear infinite ${i % 2 === 0 ? "" : "reverse"}`,
                    zIndex: 0,
                  }}
                />
              ))}

              {/* ✅ Profile photo — original size w-96 h-96, z-index 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-full overflow-hidden"
                style={{
                  width: "384px" /* lg:w-96 = 384px */,
                  height: "384px" /* lg:h-96 = 384px */,
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  border: "2px solid rgba(212,175,55,0.5)",
                  boxShadow:
                    "0 0 60px rgba(212,175,55,0.35), 0 0 120px rgba(212,175,55,0.12), inset 0 0 40px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Sudheer Pal"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: "brightness(0.92) contrast(1.05)" }}
                />
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(212,175,55,0.05) 0%, rgba(0,0,0,0.35) 100%)",
                  }}
                />
              </motion.div>

              {/* Glow pulse */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "384px",
                  height: "384px",
                  background:
                    "radial-gradient(circle at center, rgba(212,175,55,0.18) 0%, transparent 70%)",
                  zIndex: 2,
                }}
              />

              {/* ✅ Floating tech badges — z-index 10, image ke center se orbit */}
              {floatingTech.map((tech, i) => {
                const rad = (tech.angle * Math.PI) / 180;
                const x = Math.cos(rad) * tech.radius;
                const y = Math.sin(rad) * tech.radius;
                return (
                  <motion.div
                    key={tech.label}
                    className="absolute glass rounded-full p-2 flex items-center justify-center text-yellow-500  text-2xl font-mono"
                    style={{
                      left: `calc(50% + ${x}px - 30px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                      zIndex: 10,
                      pointerEvents: "none",
                    }}
                    animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  >
                    <span>{tech.icon}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
