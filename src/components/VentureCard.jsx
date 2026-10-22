import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function VentureCard({ venture }) {
  return (
    <article className="venture-card">
      <a
        href={venture.url}
        target="_blank"
        rel="noreferrer"
        className={`venture-card__image-wrap${venture.imageVariant === 'brand' ? ' venture-card__image-wrap--brand' : ''}`}
        style={venture.imageBackground ? { background: venture.imageBackground } : undefined}
        aria-label={`Visit ${venture.title}`}
      >
        <picture>
          {venture.imageMobile && <source media="(max-width: 480px)" srcSet={venture.imageMobile} />}
          <img src={venture.image} alt="" loading="lazy" />
        </picture>
        <div className="venture-card__image-overlay" />
        <span className="venture-card__badge">
          {venture.badge}
        </span>
      </a>

      <div className="venture-card__body">
        <div className="venture-card__meta">
          <h3 className="venture-card__title">{venture.title}</h3>
          <span className="venture-card__role">{venture.role}</span>
        </div>
        <p className="venture-card__desc">{venture.description}</p>
        <div className="venture-card__footer">
          <a
            className="venture-card__link"
            href={venture.url}
            target="_blank"
            rel="noreferrer"
          >
            Visit
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: '0.65rem' }} />
          </a>
        </div>
      </div>
    </article>
  )
}
