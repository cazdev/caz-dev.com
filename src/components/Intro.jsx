import TextLink from './ui/TextLink'
import LinkList from './ui/LinkList'
import VariableType from './ui/VariableType'
import { name, jobtitle, company, companyUrl, location, profiles } from '../util/Info'
import './Intro.css'

const sections = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Intro() {
  return (
    <header className="intro container">
      <nav className="intro__nav" aria-label="Sections">
        <LinkList links={sections} />
      </nav>

      <VariableType as="h1" className="intro__name" text={name} />
      <p className="intro__role">
        {jobtitle} at <TextLink href={companyUrl}>{company}</TextLink>, based in {location}.
      </p>
      <p className="intro__bio">
        Full-stack software engineer. I've built systems for government and
        enterprise, along with SaaS tools, marketplaces and mobile apps.
      </p>

      <LinkList links={profiles} />
    </header>
  )
}
