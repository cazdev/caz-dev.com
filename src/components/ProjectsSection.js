import React from 'react'

/* Projects data */
import projects from '../resources/data/projects.json'
import ProjectCard from '../components/ProjectCard'

/* Styles */
import './ProjectsSection.css'
import './ProjectCard.css'

export default function ProjectsSection() {

    return (
        /* Projects page */
        <div className="ProjectsSection">
            <h2>My Projects</h2>
                {/* Dynamically generate ProjectCard components from JSON data */}
                {projects.map(project => <ProjectCard project={project} />)}
        </div>
    )
}
