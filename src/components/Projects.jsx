import Section from './ui/Section'
import Entry, { EntryList } from './ui/Entry'
import projects from '../resources/data/projects.json'
import './Projects.css'

function ProjectImage({ project }) {
  return (
    <a
      className="project-image"
      href={project.url}
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      style={project.imageBackground ? { background: project.imageBackground } : undefined}
    >
      <picture>
        {project.imageMobile && <source media="(max-width: 480px)" srcSet={project.imageMobile} />}
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className={project.imageVariant === 'brand' ? 'project-image__img--contain' : undefined}
        />
      </picture>
    </a>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Products I've designed and built.">
      <EntryList>
        {projects.map((project) => (
          <Entry
            key={project.title}
            meta={project.type}
            title={project.title}
            href={project.url}
            media={<ProjectImage project={project} />}
          >
            <p>{project.description}</p>
          </Entry>
        ))}
      </EntryList>
    </Section>
  )
}
