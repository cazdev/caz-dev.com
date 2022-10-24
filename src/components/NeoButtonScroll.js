import React from 'react'
import './NeoButton.css'
import {Link} from 'react-scroll'

export default function NeoButton( {image, subtext, id} ) {
    return (
        <div>
        <div className="neo-button-container">
            <Link  to={id} spy={true} >
            <div className={["MenuItem", "hoverAnim", "inAnim"].join(' ')}>
                    <img src={image} className="NeoButton" alt="NeoButton" />
                    <p className="SubText">{subtext}</p>
                </div>
            </Link>
        </div>
        </div>
    )
}