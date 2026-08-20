import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function VentureCard({ venture }) {
  const badgeClass =
    venture.badge === 'Founded' || venture.badge === 'Co-Founded'
      ? 'venture-card__badge--founder'
      : venture.badge === 'Co-Owned'
      ? 'venture-card__badge--owner'
      : ''

  return (
    <article className="venture-card">
      <a
        href={venture.url}
        target="_blank"
        rel="noreferrer"
        className="venture-card__image-wrap"
      >
        <img src={venture.image} alt={`${venture.title} preview`} />
        <div className="venture-card__image-overlay" />
        <span className={`venture-card__badge ${badgeClass}`}>
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
          <span className="venture-card__stack">{venture.stack}</span>
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
