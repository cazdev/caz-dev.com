import '../styles/App.css';

/* Components */
import MainSection from './MainSection'
import ProjectsSection from './ProjectsSection';
import ProfileSection from './ProfileSection';
import ScrollToTop from './ScrollToTop'

/* GSAP Animations */
import Animations from '../util/Animations'

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