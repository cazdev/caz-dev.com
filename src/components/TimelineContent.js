import React from 'react'

export default function TimelineContent( {role, company, description} ) {
    return (
        <div>
            <h3 className="vertical-timeline-element-title">
                {role}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
                @ {company}
            </h4>
            <p>
                {description}
            </p>
        </div>
    )
}
