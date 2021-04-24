import React from 'react'
import '../styles/MainHeader.css'

export default function MainHeader( {name, jobtitle, company, icon1, icon2, icon3} ) {
    return (
        <div className="App-header">
          <h1 className="textAnim">{ name }</h1>
          <h2 className="textAnim">{ jobtitle } at <u>{ company }</u></h2>
            <div className="Social-Icons">
              <span className="Social-Icon"><a href="https://github.com/cazdev"><div className={["icon", "hoverAnim", "inAnim"].join(' ')}>{ icon1 }</div></a></span>
              <span className="Social-Icon"><a href="https://linkedin.com/in/chaz-lambrechtsen"><div className={["icon", "hoverAnim", "inAnim"].join(' ')}>{ icon2 }</div></a></span>
              <span className="Social-Icon"><a href="https://chaz.page"><div className={["icon", "hoverAnim", "inAnim"].join(' ')}>{ icon3 }</div></a></span>
            </div>
        </div>
    )
}
