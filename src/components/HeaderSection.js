import React from 'react'
import '../styles/HeaderSection.css'

export default function HeaderSection( {name, jobtitle, company, icon1, icon2} ) {
    return (
        <div className="App-header">
          <h1>{ name }</h1>
          <div className="App-tagline">
            { jobtitle } at <u>{ company }</u>
            <div className="Social-Icons">
            <span><a href="https://github.com/cazdev"><div className="icon">{ icon1 }</div></a></span>
              <span><a href="https://www.linkedin.com/in/chaz-lambrechtsen"><div className="icon">{ icon2 }</div></a></span>
            </div>
          </div>
        </div>
    )
}
