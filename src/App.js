import './App.css';

/* Components */
import MainSection from './components/MainSection'
import ProjectsSection from './components/ProjectsSection';
import ProfileSection from './components/ProfileSection';
import ScrollToTop from './components/ScrollToTop'

/* GSAP Animations */
import Animations from './components/Animations'

function App() {

  /* Inject GSAP JavaScript animations  */
  Animations();

  return (
    <>
      {/* Main landing page */}
      <MainSection />

      {/* Profile page */}
      <ProfileSection />

      {/* Projects page */}
      <ProjectsSection />

      {/* Scroll back to top button */}
      <ScrollToTop />
    </>
  );
}

export default App;