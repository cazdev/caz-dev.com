import React from 'react'

/* Components */
import NeoButtonLink from './NeoButtonLink'
import NeoButtonScroll from './NeoButtonScroll'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import DarkModeToggle from './DarkModeToggle'

/* Images */
import portfolio from '../resources/images/portfolio.png';
import profile from '../resources/images/profile.png'
import resume from '../resources/images/resume.png'
import contact from '../resources/images/contact.png'
/* import avatar from '../resources/images/photo.png' */

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Icons */
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

/* Define icons */
const envelope = <FontAwesomeIcon icon={faPaperPlane} />
const marker = <FontAwesomeIcon icon={faMapMarker} />
const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const globe = <FontAwesomeIcon icon={faGlobe} />

/* Information */
var name = "Chaz L.";
var jobtitle = "Software Engineer";
var company = "Interserv";

export default function MainSection() {
    return (
        <>
        {/* Main landing page */}
        <div className="MainSection">
            <body className="App-body">
              <DarkModeToggle />

                {/* Avatar image */}
                {/*<img className="Avatar" src={avatar} alt="MainMenuItem" /> // Profile image*/}

                {/* Title and tagline section */}
                <MainHeader
                  name={ name }
                  jobtitle={ jobtitle }
                  company={ company }
                  icon1={ github } 
                  icon2={ linkedin }
                  icon3={ globe }
                />
        
                {/* Main menu items list */}
                <div className="MainMenuList">
                  <NeoButtonScroll image={profile} subtext="Profile" id="ProfileSection"/>
                  <NeoButtonScroll image={portfolio} subtext="Projects" id="ProjectsSection"/>
                  <NeoButtonLink image={resume} subtext="Resume" link="/dl/Resume.pdf" target="_blank"/>
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
