import React from 'react'

/* Scroll linking */
import {Link} from 'react-scroll'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Icons */
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

/* Define icons */
const arrowup = <FontAwesomeIcon icon={faArrowUp} />

export default function ScrollToTop() {
    return (
        <div>
            <Link  to={"MainSection"} spy={true} >
                <div className={["ScrollToTop", "hoverAnim"].join(' ')} >
                     {arrowup}
                </div>
            </Link>
        </div>
    )
}
