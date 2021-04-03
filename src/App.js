import './App.css';

/* Components */
import MainSection from './components/MainSection'
import {Link} from 'react-scroll'

/* GSAP Animations */
import Animations from './components/Animations'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Icons */
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

/* Define icons */
const arrowup = <FontAwesomeIcon icon={faArrowUp} />

function App() {

  /* Inject GSAP JavaScript animations  */
  Animations();

  return (
    <>
      {/* Main landing page */}
      <MainSection id="MainSection"/>

      {/* Scroll back to top button */}
      <Link  to={"MainSection"} spy={true} >
        <div className="ScrollToTop" > {arrowup}</div>
      </Link>

      {/* Profile page */}
      <div className="ProfileSection">
        <h2>Profile</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis tellus in metus vulputate eu scelerisque. Massa id neque aliquam vestibulum morbi. Diam ut venenatis tellus in metus vulputate eu. Fringilla urna porttitor rhoncus dolor. Convallis posuere morbi leo urna molestie at. Sagittis vitae et leo duis ut. Nulla facilisi morbi tempus iaculis urna. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. At tellus at urna condimentum mattis pellentesque. At quis risus sed vulputate. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Morbi tristique senectus et netus et malesuada fames. Molestie at elementum eu facilisis sed. Ac felis donec et odio pellentesque diam volutpat commodo. Sit amet purus gravida quis.
      </div>

      {/* Projects page */}
      <div className="ProjectsSection">
        <h2>Projects</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat scelerisque varius morbi enim nunc. Venenatis tellus in metus vulputate eu scelerisque. Massa id neque aliquam vestibulum morbi. Diam ut venenatis tellus in metus vulputate eu. Fringilla urna porttitor rhoncus dolor. Convallis posuere morbi leo urna molestie at. Sagittis vitae et leo duis ut. Nulla facilisi morbi tempus iaculis urna. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. At tellus at urna condimentum mattis pellentesque. At quis risus sed vulputate. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Morbi tristique senectus et netus et malesuada fames. Molestie at elementum eu facilisis sed. Ac felis donec et odio pellentesque diam volutpat commodo. Sit amet purus gravida quis.
      </div>
    </>
  );
}

export default App;