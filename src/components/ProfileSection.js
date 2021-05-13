import React from 'react'

/* Components */
import Timeline from '../components/Timeline'

/* Styles */
import '../styles/ProfileSection.css'

export default function ProfileSection( {company} ) {
    return (
        /* Profile page */
        <div className="ProfileSection">
            <h2>Hi, I am Chaz 👋</h2>
                <p className="ProfileDesc">I am a Software Engineer based in Sydney with broad experience in Front-End, Back-End, Testing, Security and IT.</p>
                <Timeline />
        </div>
    )
}
