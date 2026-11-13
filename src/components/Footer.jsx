import LinkList from './ui/LinkList'
import { fullName, profiles } from '../util/Info'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <p>© {new Date().getFullYear()} {fullName}</p>
        <LinkList links={profiles} />
      </div>
    </footer>
  )
}
