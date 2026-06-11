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
    </main>
  )
}

export default Home
