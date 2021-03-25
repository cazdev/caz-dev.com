import './App.css';
import React from 'react';
/* Componented */

import MainMenuItem from './components/MainMenuItem'
import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'

/* Images */
import portfolio from './images/portfolio.png';
import profile from './images/profile.png'
import resume from './images/resume.png'
import contact from './images/contact.png'
import avatar from './images/photo.png'

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const envelope = <FontAwesomeIcon icon={faPaperPlane} />
const marker = <FontAwesomeIcon icon={faMapMarker} />
const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />

function App() {
  return (
    <div className="App">
      <body className="App-body">

      {/* Avatar image */}
      <img className="Avatar" src={avatar} alt="MainMenuItem" />

        {/* Title and tagline section */}
        <HeaderSection 
          title="Chaz L." 
          tagline="Software Engineer" 
          icon1={ github } 
          icon2={ linkedin }
        />
        
        {/* Main menu items list */}
        <div className="MainMenuList">
          <MainMenuItem image={profile} subtext="Profile" link="https://caz-dev.com/profile.html"/>
          <MainMenuItem image={portfolio} subtext="Portfolio" link="https://caz-dev.com/portfolio.html"/>
          <MainMenuItem image={resume} subtext="Resume" link="https://caz-dev.com/resume.html"/>
          <MainMenuItem image={contact} subtext="Contact" link="https://caz-dev.com/contact.html" />
        </div>

        {/* Footer */}
        <FooterSection 
          icon1={ envelope } 
          icon2={ marker }
        />
      </body>
    </div>
  );
}

export default App;