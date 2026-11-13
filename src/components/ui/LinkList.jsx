import TextLink from './TextLink'
import './LinkList.css'

/* A horizontal row of TextLinks, used for navigation, profiles and the footer. */
export default function LinkList({ links }) {
  return (
    <ul className="link-list">
      {links.map(({ label, href }) => (
        <li key={href}>
          <TextLink href={href}>{label}</TextLink>
        </li>
      ))}
    </ul>
  )
}
