import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Education from '../components/Education/Education'
import Certificates from '../components/Certificates/Certificates'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/9720535155"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed left-5 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-7 w-7"
        >
          <path d="M20.52 3.48A11.75 11.75 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2 .51 3.99 1.48 5.74L0 24l6.57-1.71A11.99 11.99 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52Zm-8.46 17.05a9.83 9.83 0 0 1-5.34-1.53l-.38-.24-3.91 1.02 1.04-3.82-.25-.39A9.78 9.78 0 0 1 2.3 12.04C2.3 6.26 6.26 2.3 12 2.3c2.61 0 5.07.99 6.91 2.82A9.82 9.82 0 0 1 21.7 12c0 5.74-4.96 9.83-9.64 9.83Zm5.3-7.23c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.76.94-.93 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.51.07-.78.36c-.27.29-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.19 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
        </svg>
      </a>
    </main>
  )
}

export default Home
