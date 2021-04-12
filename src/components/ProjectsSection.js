import React from 'react'
/* Projects data */
import '../styles/ProjectCard.css'
import projects from '../resources/data/projects.json'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsSection() {

    return (
        /* Projects page */
        <div className="ProjectsSection">
            <h2>Projects</h2>
                {/* Dynamically generate ProjectCard components from JSON data */}
                {projects.map(project => <ProjectCard project={project} />)}
        </div>
    )
}
