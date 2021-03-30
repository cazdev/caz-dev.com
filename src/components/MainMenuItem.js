import React from 'react'
import '../styles/MainMenuItem.css'

export default function MainMenuItem( {image, subtext, link} ) {
    return (
        <div className="container">
            <a href={link}>
                <div className="MenuItem">
                    <img src={image} className="MainMenuItem" alt="MainMenuItem" />
                    <p className="SubText">{subtext}</p>
                </div>
            </a>
        </div>
    )
}