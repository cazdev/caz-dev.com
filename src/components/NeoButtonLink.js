import React from 'react'
import './NeoButton.css'

export default function NeoButton( {image, subtext, link, target} ) {
    return (
        <div>
        <div className="neo-button-container">
            <a href={link} target={target}>
            <div className={["MenuItem", "hoverAnim", "inAnim"].join(' ')}>
                    <img src={image} className="NeoButton" alt="NeoButton" />
                    <p className="SubText">{subtext}</p>
                </div>
            </a>
        </div>
        </div>
    )
}