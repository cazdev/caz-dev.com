import React from 'react'
import projects from '../resources/data/projects.json'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

export default function ProjectsSection() {
  return (
    <section className="projects" id="ProjectsSection">
      <div className="projects__inner">
        <div className="section-header">
          <span className="section-tag">Work</span>
          <h2 className="section-title">
            Selected <span className="grad-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of personal and open-source projects built in my spare time.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
