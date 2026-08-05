import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Animations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Hero content stagger */
      gsap.from('.hero__content > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      })

      /* About section */
      gsap.from('.about__inner .section-header', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about',
          start: 'top 80%',
        },
      })

      gsap.from('.skill-chip', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about__skills',
          start: 'top 85%',
        },
      })

      /* Project cards */
      gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: (i % 2) * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
