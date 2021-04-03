import './App.css';
import React, {useEffect} from 'react';
import {gsap, TimelineLite, Power3} from 'gsap';

/* Components */
import MainSection from './components/MainSection'
import {Link} from 'react-scroll'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Icons */
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

/* Scroll Trigger */
import scrollTrigger from 'gsap/ScrollTrigger';
/* Register Scroll Trigger */
gsap.registerPlugin(scrollTrigger)

/* Define icons */
const arrowup = <FontAwesomeIcon icon={faArrowUp} />

/* Animation timeline Hook dependancy for useEffect */
let tl = new TimelineLite({ delay: 0.0 });

/* Refresh animations onload */
window.onload = function(e) { 
  gsap.utils.toArray(".hoverAnim").forEach(MenuItem => {
    let hover = gsap.to(MenuItem, {scale: 1.1, duration: 0.2, paused: true, ease: Power3.easeOut});
    MenuItem.addEventListener("mouseenter", () => hover.play());
    MenuItem.addEventListener("mouseleave", () => hover.reverse());
  });
}

function App() {

  useEffect(() => {
    tl.from(
      '.inAnim', {
        y: 15, 
        opacity: 0, 
        ease: Power3.easeOut, 
        delay: 0.2 
      }, 'Start');

    tl.staggerFrom(
      '.textAnim', 1, {
        y: -30, 
        opacity: 0, 
        ease: Power3.easeOut
      }, 0.1, 'Start');

    gsap.from('.ProfileSection', {
      duration: 1, 
      y: '-80', 
      opacity: 0, 
      ease: 'ease-in', 
      scrollTrigger: {
        trigger: '.ProfileSection', 
        start: 'top 80%', 
        end: 'bottom 20%',
        markers: false,
        toggleActions: 'restart none none none'
      }
    })

    gsap.from('.ProjectsSection', {
      duration: 1, 
      y: '-80', 
      opacity: 0, 
      ease: 'ease-in', 
      scrollTrigger: {
        trigger: '.ProjectsSection', 
        start: 'top 80%', 
        end: 'bottom 20%',
        markers: false,
        toggleActions: 'restart none none none'
      }
    })

    gsap.from('.ScrollToTop', {
      duration: 0.1, 
      y: '-100', 
      opacity: 1, 
      ease: 'ease-in', 
      scrollTrigger: {
        trigger: '.ProfileSection', 
        start: 'top 5%', 
        end: 'bottom -5%',
        markers: false,
        toggleActions: 'play none none reverse'
      }
    })

  }, [])

  return (
    <>

      {/* Main landing page */}
      <MainSection id="MainSection"/>

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

      <Link  to={"MainSection"} spy={true} >
        <div className="ScrollToTop" > {arrowup}</div>
      </Link>
    </>
  );
}

export default App;