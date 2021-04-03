import React from 'react';
import useDarkMode from 'use-dark-mode';

/* Styles for dark and light mode switching */
import '../styles/DarkModeStyle.css';

/* Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Icons */
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const circle = <FontAwesomeIcon icon={faCircle} />


const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <p className="darkModeToggle" onClick={darkMode.toggle}>
        {circle}
      </p>
    </div>
  );
};

export default DarkModeToggle;