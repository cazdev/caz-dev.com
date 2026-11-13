import TextLink from './TextLink'
import './Entry.css'

/*
 * A row with a short label on the left and content on the right.
 * Used for jobs, projects and skills so they all share one rhythm.
 */
export default function Entry({ meta, title, href, subtitle, children, footer, media }) {
  return (
    <article className="entry">
      <p className="entry__meta">{meta}</p>
      <div className="entry__body">
        {title && (
          <h3 className="entry__title">
            {href ? <TextLink href={href}>{title}</TextLink> : title}
          </h3>
        )}
        {subtitle && <p className="entry__subtitle">{subtitle}</p>}
        {children && <div className="entry__content">{children}</div>}
        {footer && <p className="entry__footer">{footer}</p>}
        {media && <div className="entry__media">{media}</div>}
      </div>
    </article>
  )
}

export function EntryList({ children }) {
  return <div className="entry-list">{children}</div>
}
