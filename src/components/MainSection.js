import React from 'react'

/* Components */
import NeoButtonLink from './NeoButtonLink'
import NeoButtonScroll from './NeoButtonScroll'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import DarkModeToggle from './DarkModeToggle'

/* Styles */
import './MainSection.css'

/* Images */
import portfolio from '../resources/images/menu/portfolio.png';
import profile from '../resources/images/menu/profile.png'
import resume from '../resources/images/menu/resume.png'
import contact from '../resources/images/menu/contact.png'

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Icons */
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

/* Information */
import {name, jobtitle, company} from '../util/Info';

/* Define icons */
const envelope = <FontAwesomeIcon icon={faPaperPlane} />
const marker = <FontAwesomeIcon icon={faMapMarker} />
const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const blogIcon = <FontAwesomeIcon icon={faCommentDots} />

export default function MainSection() {
    return (
        <>
        {/* Main landing page */}
        <div className="MainSection">
            <body className="App-body">

              {/* Dark mode toggle button */}
              <DarkModeToggle />

                {/* Title and tagline section */}
                <MainHeader
                  name={ name }
                  jobtitle={ jobtitle }
                  company={ company }
                  icon1={ github } 
                  icon2={ linkedin }
                  icon3={ blogIcon }
                />
        
                {/* Main menu items list */}
                <div className="MainMenuList">
                  <NeoButtonScroll image={profile} subtext="Experience" id="ProfileSection"/>
                  <NeoButtonScroll image={portfolio} subtext="Projects" id="ProjectsSection"/>
                  <NeoButtonLink image={resume} subtext="Resume" link="https://drive.google.com/u/0/uc?id=18PNVOmApvbXoYA6aPAOkw3UCfQelI_bn" rel="noreferrer" target="_blank"/>
                  <NeoButtonLink image={contact} subtext="Contact"  link="mailto:contact@caz-dev.com?subject=Hi Chaz!" />
                </div>

                {/* Footer */}
                <MainFooter 
                  icon1={ envelope } 
                  icon2={ marker }
                />
            </body>
        </div>
        </>
    )
}
