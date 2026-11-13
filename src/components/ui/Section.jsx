import './Section.css'

/* Every content block on the page: a heading, an optional intro line, then its content. */
export default function Section({ id, title, intro, children }) {
  const headingId = `${id}-heading`

  return (
    <section className="section container" id={id} aria-labelledby={headingId}>
      <h2 className="section__title" id={headingId}>{title}</h2>
      {intro && <p className="section__intro">{intro}</p>}
      <div className="section__body">{children}</div>
    </section>
  )
}
