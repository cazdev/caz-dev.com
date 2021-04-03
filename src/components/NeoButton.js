import React from 'react'
import '../styles/NeoButton.css'
import {Link} from 'react-scroll'

export default function NeoButton( {image, subtext, link, id, target} ) {
    return (
        <div className="container">
            <a href={link} target={target}>
            <Link  to={id} spy={true} >
            <div className={["MenuItem", "hoverAnim", "inAnim"].join(' ')}>
                    <img src={image} className="NeoButton" alt="NeoButton" />
                    <p className="SubText">{subtext}</p>
                </div>
            </Link>
            </a>
        </div>
    )
}