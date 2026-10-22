import '../styles/App.css'

import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import VenturesSection from './VenturesSection'
import ContactSection from './ContactSection'
import SiteFooter from './SiteFooter'
import ScrollToTop from './ScrollToTop'
import Animations from '../util/Animations'

function App() {
  Animations()

  return (
    <>
      <HeroSection />
      <AboutSection />
      <VenturesSection />
      <ContactSection />
      <SiteFooter />
      <ScrollToTop />
    </>
  )
}

export default App
