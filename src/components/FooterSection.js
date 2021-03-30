import React from 'react'
import '../styles/FooterSection.css'

export default function FooterSection( {icon1, icon2} ) {
    return (
        <div className="App-Footer">
          <div className="icon">{ icon1 }</div>
          <span> contact@caz-dev.com</span>
          <div className="icon">{ icon2 }</div>
          <span>Sydney, NSW</span>
        </div>
    )
}
