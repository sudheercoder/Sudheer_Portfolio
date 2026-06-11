import Navbar from './components/Navbar/Navbar'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import BackToTop from './components/BackToTop/BackToTop'
import CursorGlow from './components/CursorGlow/CursorGlow'
import Home from './pages/Home'

function App() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Home />
      <BackToTop />
    </>
  )
}

export default App
