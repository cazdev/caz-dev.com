import './App.css';
import React, {useRef, useEffect} from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {gsap, TimelineLite, Power3} from 'gsap';

/* Components */
import MainSection from './components/MainSection'
import {Link} from 'react-scroll'

gsap.registerPlugin(ScrollTrigger)

/* Refresh animations onload */
window.onload = function(e) { 
  gsap.utils.toArray(".hoverAnim").forEach(MenuItem => {
    let hover = gsap.to(MenuItem, {scale: 1.1, duration: 0.2, paused: true, ease: Power3.easeOut});
    MenuItem.addEventListener("mouseenter", () => hover.play());
    MenuItem.addEventListener("mouseleave", () => hover.reverse());
  });
}

function App() {

  let tl = new TimelineLite({ delay: 0.0 });

  useEffect(() => {
    tl.from('.inAnim', {y: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, 'Start');
    tl.staggerFrom('.textAnim', 1, {y: 30, ease: Power3.easeOut, opacity: 0}, 0.1, 'Start');
  }, [])

  return (
    <>
      {/* Main landing page */}
      <MainSection id="MainSection"/>

      {/* Profile page */}
      <div className="ProfileSection" id="ProfileSection">
        <h2>Profile</h2>
      </div>

      {/* Projects page */}
      <div className="ProjectsSection" id="ProjectsSection">
        <h2>Projects</h2>
      </div>

      <Link  to={"MainSection"} spy={true} >
        <div className="ScrollToTop" ></div>
      </Link>
    </>
  );
}

export default App;