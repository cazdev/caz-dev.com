import React from 'react'
import './MainFooter.css'

export default function MainFooter( {icon1, icon2} ) {
    return (
        <div className={["App-Footer","inAnim"].join(' ')}>
          <div className="icon">{ icon1 }</div>
          <span> contact@caz-dev.com</span>
          <div className="icon">{ icon2 }</div>
          <span>Sydney, NSW</span>
        </div>
    )
}
