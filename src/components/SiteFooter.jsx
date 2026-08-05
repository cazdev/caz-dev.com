import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './SiteFooter.css'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {year} Chaz Lambrechtsen · Built with React & GSAP
        </p>
        <div className="site-footer__links">
          <a href="https://github.com/cazdev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/chaz-lambrechtsen" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:contact@caz-dev.com?subject=Hi Chaz!" aria-label="Email">
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </div>
      </div>
    </footer>
  )
}
