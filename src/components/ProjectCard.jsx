import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a href={project.github} target="_blank" rel="noreferrer" className="project-card__image-wrap">
        <img src={project.image} alt={`${project.title} preview`} />
        <div className="project-card__image-overlay" />
      </a>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__footer">
          <span className="project-card__lang">{project.languages}</span>
          <a
            className="project-card__gh-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            View on GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '0.65rem' }} />
          </a>
        </div>
      </div>
    </article>
  )
}
