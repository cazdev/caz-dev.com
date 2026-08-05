import '../styles/App.css'

import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SiteFooter from './SiteFooter'
import ScrollToTop from './ScrollToTop'
import Animations from '../util/Animations'

function App() {
  Animations()

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SiteFooter />
      <ScrollToTop />
    </>
  )
}

export default App
