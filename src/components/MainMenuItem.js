import React from 'react'
import '../styles/MainMenuItem.css'
import {Link} from 'react-scroll'

export default function MainMenuItem( {image, subtext, link, id, target} ) {
    return (
        <div className="container">
            <a href={link} target={target}>
            <Link  to={id} spy={true} >
            <div className={["MenuItem", "hoverAnim", "inAnim"].join(' ')}>
                    <img src={image} className="MainMenuItem" alt="MainMenuItem" />
                    <p className="SubText">{subtext}</p>
                </div>
            </Link>
            </a>
        </div>
    )
}