import React, {useEffect} from 'react';
import {gsap, TimelineLite, Power3} from 'gsap';

/* Scroll Trigger */
import scrollTrigger from 'gsap/ScrollTrigger';
/* Register Scroll Trigger */
gsap.registerPlugin(scrollTrigger)

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

export default function Animations() {

    /* Main page fade in from top */
    useEffect(() => { 
        tl.from(
          '.inAnim', {
            y: 15, 
            opacity: 0, 
            ease: Power3.easeOut, 
            delay: 0.2 
          }, 'Start');
    
        /* Main text fade in from bottom */
        tl.staggerFrom(
          '.textAnim', 1, {
            y: -30, 
            opacity: 0, 
            ease: Power3.easeOut
          }, 0.1, 'Start');
    
          /* Profile page fade in */
        gsap.from('.ProfileSection', {
          duration: 0.5, 
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

        var containers = gsap.utils.toArray('.projectContainer');

        containers.forEach((container) => {
        /* Project items slide in */
        gsap.from(container, {
          duration: 0.5, 
          x: '100', 
          opacity: 0, 
          ease: 'ease-in', 
          scrollTrigger: {
            trigger: container, 
            start: '-600',
            end: '120%',
            markers: true,
            toggleActions: 'restart none none reverse'
          }
        })
      })
    
        /* ScrollToTop button appears after scrolling into profile section */
        gsap.from('.ScrollToTop', {
          duration: 0.1, 
          y: '-100', 
          opacity: 0, 
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

    return (<></>)
}
