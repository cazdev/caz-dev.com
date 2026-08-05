import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane, faMapMarkerAlt, faFileAlt, faUser, faCode } from '@fortawesome/free-solid-svg-icons'
import { name, jobtitle, company } from '../util/Info'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" id="MainSection">
      {/* Ambient background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content">
        {/* Status badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="hero__name">
          <span className="grad-text">{name}</span>
        </h1>

        {/* Title */}
        <p className="hero__title">
          {jobtitle} at <strong>{company}</strong>
        </p>

        {/* Social links */}
        <div className="hero__socials">
          <a
            className="hero__social-link"
            href="https://github.com/cazdev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="hero__social-link"
            href="https://linkedin.com/in/chaz-lambrechtsen"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="hero__social-link"
            href="mailto:contact@caz-dev.com?subject=Hi Chaz!"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </div>

        {/* Navigation cards */}
        <nav className="hero__nav">
          <Link to="AboutSection" smooth duration={600} offset={-40}>
            <div className="hero__nav-card">
              <span className="hero__nav-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="hero__nav-label">Experience</span>
            </div>
          </Link>

          <Link to="ProjectsSection" smooth duration={600} offset={-40}>
            <div className="hero__nav-card">
              <span className="hero__nav-icon">
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span className="hero__nav-label">Projects</span>
            </div>
          </Link>

          <a
            className="hero__nav-card"
            href="https://drive.google.com/u/0/uc?id=18PNVOmApvbXoYA6aPAOkw3UCfQelI_bn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hero__nav-icon">
              <FontAwesomeIcon icon={faFileAlt} />
            </span>
            <span className="hero__nav-label">Resume</span>
          </a>

          <a
            className="hero__nav-card"
            href="mailto:contact@caz-dev.com?subject=Hi Chaz!"
          >
            <span className="hero__nav-icon">
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span className="hero__nav-label">Contact</span>
          </a>
        </nav>
      </div>

      {/* Footer contact strip */}
      <div className="hero__footer">
        <span className="hero__footer-item">
          <FontAwesomeIcon icon={faPaperPlane} className="hero__footer-icon" />
          contact@caz-dev.com
        </span>
        <span className="hero__footer-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="hero__footer-icon" />
          Sydney, NSW
        </span>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue">
        <div className="hero__scroll-line" />
        scroll
      </div>
    </section>
  )
}
