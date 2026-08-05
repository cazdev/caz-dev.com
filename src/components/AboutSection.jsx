import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './AboutSection.css'

/* Company logos */
import inLogo   from '../resources/images/timeline/in.png'
import hwLogo   from '../resources/images/timeline/hw.png'
import rydeLogo from '../resources/images/timeline/ryde.png'
import alLogo   from '../resources/images/timeline/al.png'
import plannLogo from '../resources/images/timeline/plann.png'
import snswLogo from '../resources/images/timeline/snsw.png'

const skills = [
  'React', 'TypeScript', 'JavaScript', 'Node.js',
  'CSS / Sass', 'Web Components', 'GSAP', 'Figma',
  'Python', 'Go', 'C#', 'SQL', 'Git', 'Agile',
]

function TimelineItem({ logo, date, role, company, description }) {
  return (
    <VerticalTimelineElement
      date={date}
      icon={<img src={logo} alt={`${company} logo`} />}
    >
      <p className="timeline-role">{role}</p>
      <p className="timeline-company">@ {company}</p>
      <p className="timeline-desc">{description}</p>
    </VerticalTimelineElement>
  )
}

export default function AboutSection() {
  return (
    <section className="about" id="AboutSection">
      <div className="about__inner">

        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">
            Hi, I'm <span className="grad-text">Chaz</span>
          </h2>
          <p className="section-subtitle">
            Frontend-focused Software Engineer based in Sydney with broad experience
            spanning UI/UX engineering, mapping services, kiosk development, and enterprise IT.
          </p>
        </div>

        {/* Skills */}
        <div className="about__skills">
          {skills.map((s, i) => (
            <span key={s} className={`skill-chip ${i < 6 ? 'skill-chip--accent' : ''}`}>
              {s}
            </span>
          ))}
        </div>

        {/* Experience timeline */}
        <VerticalTimeline lineColor="rgba(255,255,255,0.08)">
          <TimelineItem
            logo={snswLogo}
            date="2023 — Present"
            role="Front-end Software Engineer"
            company="Service NSW"
            description="Developing a secure, fast, framework-agnostic JavaScript component library for mapping and spatial services used across government digital products."
          />
          <TimelineItem
            logo={plannLogo}
            date="2022 — 2023"
            role="Front-end Software Engineer"
            company="Plannthat.com"
            description="Led front-end development of interactive screens and kiosks at Sydney Trains stations. Delivered software for the Australian Defence Force and other government projects."
          />
          <TimelineItem
            logo={inLogo}
            date="2021 — 2022"
            role="Full-stack Software Engineer"
            company="Interserv"
            description="Built and maintained full-stack applications for transport and defence clients, including interactive station kiosk interfaces for Sydney Trains."
          />
          <TimelineItem
            logo={rydeLogo}
            date="2020 — 2021"
            role="Product Development Engineer"
            company="City of Ryde"
            description="Worked in a team of 8 engineers to design and develop a product solution for a food-waste collection trial across multi-unit dwellings over a 6-month timeline."
          />
          <TimelineItem
            logo={hwLogo}
            date="2019 — 2021"
            role="IT Analyst & Engineer"
            company="Holman Webb"
            description="Deployed and maintained enterprise AI cybersecurity software (Darktrace) and MFA security software (Duo) across the firm's Australian offices."
          />
          <TimelineItem
            logo={alLogo}
            date="2018 — 2019"
            role="Software Support Technician"
            company="Animal Logic"
            description="Configured software and functions to specifications, maintained local networks for optimal performance, and performed troubleshooting across VFX studio infrastructure."
          />
        </VerticalTimeline>

      </div>
    </section>
  )
}
