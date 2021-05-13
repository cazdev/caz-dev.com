import React from 'react'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Styles */
import '../styles/ProjectCard.css'

/* Icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const github = <FontAwesomeIcon icon={faGithub} />

export default function ProjectCard( {project} ) {
    return (
        <div className="projectContainer">
            <div className="imageContainer">
                <a href={project.github}><img className="image" src={project.image} alt={"preview"} /></a>
            </div>
            <div className="infoContainer">
                <p className="projectTitle"> {project.title} </p>
                <p className="projectDesc"> {project.description} </p>
                <a className='github' href={project.github}>{ github}</a>
            </div>
        </div>
    )
}
