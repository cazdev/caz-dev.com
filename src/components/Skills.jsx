import Section from './ui/Section'
import Entry, { EntryList } from './ui/Entry'

const groups = [
  {
    label: 'Most used',
    skills: [
      'TypeScript', 'JavaScript', 'React', 'React Native', 'Vue', 'Angular',
      'Node.js', 'AWS', 'LLM integration', 'CSS and Sass', 'Web Components',
    ],
  },
  {
    label: 'Also used',
    skills: [
      'Terraform', 'Docker', 'CI/CD', 'Playwright', 'Express', 'Java', '.NET', 'C#',
      'Python', 'Go', 'SQL', 'Shopify', 'GSAP', 'Figma', 'Git',
    ],
  },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <EntryList>
        {groups.map(({ label, skills }) => (
          <Entry key={label} meta={label}>
            <p>{skills.join(', ')}</p>
          </Entry>
        ))}
      </EntryList>
    </Section>
  )
}
