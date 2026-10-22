import inLogo from '../images/timeline/in.png'
import okendoLogo from '../images/timeline/okendo-logo.webp'
import plannLogo from '../images/timeline/plann.png'
import growLogo from '../images/timeline/grow-logo.svg'
import snswLogo from '../images/timeline/snsw.png'

/* Work history, most recent first. The hero tagline is derived from the current role. */
const experience = [
  {
    logo: okendoLogo,
    date: '2024 — Current',
    role: 'Senior Software Engineer (Full Stack)',
    company: 'Okendo',
    website: 'https://okendo.io/',
    location: 'Sydney, NSW',
    technologies: 'AWS · TypeScript · React · Vue · Angular · Terraform',
    description: 'Implemented major features for Okendo Loyalty, integrated into the Shopify ecosystem.',
  },
  {
    logo: snswLogo,
    date: '2021 — 2024',
    role: 'Senior Software Engineer (Frontend)',
    company: 'Service NSW',
    website: 'https://www.service.nsw.gov.au/',
    location: 'Sydney, NSW',
    technologies: 'JavaScript · Preact · Express · AWS',
    description: 'Developed a high-speed, framework-agnostic mapping library.',
  },
  {
    logo: growLogo,
    logoClassName: 'timeline-logo--mark',
    date: '2020 — 2021',
    role: 'Software Engineer (Frontend)',
    company: 'Grow Inc',
    website: 'https://grow.inc/',
    location: 'Sydney, NSW',
    technologies: 'React · AWS · TypeScript',
    description: 'Built scalable enterprise white-label financial platforms.',
  },
  {
    logo: plannLogo,
    date: '2019 — 2020',
    role: 'Software Engineer (Full Stack)',
    company: 'Plann (Acquired by LinkTree)',
    website: 'https://www.plannthat.com/',
    location: 'Sydney, NSW',
    technologies: 'Vue 2 · Vue 3 · TypeScript · Hono',
    description: 'Engineered core SaaS web features.',
  },
  {
    logo: inLogo,
    date: '2017 — 2019',
    role: 'Software Engineer (Full Stack)',
    company: 'Interserv',
    website: 'https://interserv.com.au/',
    location: 'Sydney, NSW',
    technologies: 'Blaze · C# · React · Express · .NET · AWS',
    description: 'Led Sydney Trains informational screen development.',
  },
]

export const currentJob = experience.find((job) => /current/i.test(job.date)) ?? experience[0]

export default experience
