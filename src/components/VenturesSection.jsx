import React from 'react'
import ventures from '../resources/data/ventures.json'
import VentureCard from './VentureCard'
import './VenturesSection.css'

export default function VenturesSection() {
  return (
    <section className="ventures" id="VenturesSection">
      <div className="ventures__inner">
        <div className="section-header">
          <span className="section-tag">Ventures</span>
          <h2 className="section-title">
            Founded &amp; <span className="grad-text">Co-Founded</span>
          </h2>
          <p className="section-subtitle">
            Products and companies I've built from the ground up — from idea to production.
          </p>
        </div>

        <div className="ventures__grid">
          {ventures.map(venture => (
            <VentureCard key={venture.title} venture={venture} />
          ))}
        </div>
      </div>
    </section>
  )
}
