import React from 'react'
import Timeline from '../components/Timeline'

export default function ProfileSection( {company} ) {
    return (
        /* Profile page */
        <div className="ProfileSection">
            <h2>Hi, I am Chaz 👋</h2>
                <p>I am a Software Engineer based in Sydney with broad experience in Front-End, Back-End, Testing, Security and IT.</p>
                <Timeline />
        </div>
    )
}
