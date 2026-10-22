import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './AboutSection.css'
import experience from '../resources/data/experience'

const skills = [
  'React', 'TypeScript', 'JavaScript', 'Node.js',
  'CSS / Sass', 'Web Components', 'GSAP', 'Figma',
  'Python', 'Go', 'C#', 'SQL', 'Git', 'Agile',
]

function TimelineItem({ logo, logoClassName, date, role, company, website, location, technologies, description }) {
  return (
    <VerticalTimelineElement
      date={date}
      icon={<img className={logoClassName} src={logo} alt={`${company} logo`} />}
    >
      <p className="timeline-role">{role}</p>
      <p className="timeline-company">
          <a href={website} target="_blank" rel="noopener noreferrer">@ {company}</a>
        <span className="timeline-location">{location}</span>
      </p>
      <p className="timeline-tech">{technologies}</p>
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
            Full-stack Software Engineer based in Sydney. I build systems for
            government and enterprise, as well as SaaS tools, marketplaces, and
            mobile apps.
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
          {experience.map((job) => (
            <TimelineItem key={`${job.company}-${job.date}`} {...job} />
          ))}
        </VerticalTimeline>

      </div>
    </section>
  )
}
