import React from 'react'

import '../styles/ProjectCard.css'
/* Projects data */
import projects from '../resources/data/projects.json'
import ProjectCard from '../components/ProjectCard'

/* Styles */
import '../styles/ProjectsSection.css'

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
