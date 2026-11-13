import './TextLink.css'

/* The only link style on the site. External links open in a new tab and get a small arrow. */
export default function TextLink({ href, children, external = /^https?:/.test(href), className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`text-link ${className}`.trim()}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      {...rest}
    >
      {children}
      {external && <span className="text-link__arrow" aria-hidden="true">↗</span>}
    </a>
  )
}
