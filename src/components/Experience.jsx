import Section from './ui/Section'
import Entry, { EntryList } from './ui/Entry'
import TextLink from './ui/TextLink'
import experience from '../resources/data/experience'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <EntryList>
        {experience.map((job) => (
          <Entry
            key={`${job.company}-${job.date}`}
            meta={job.date}
            title={job.role}
            subtitle={
              <>
                <img
                  className={`company-logo${job.logoFit === 'cover' ? ' company-logo--cover' : ''}`}
                  src={job.logo}
                  alt=""
                  width="20"
                  height="20"
                />
                <TextLink href={job.website}>{job.company}</TextLink>
              </>
            }
            footer={job.technologies}
          >
            <p>{job.description}</p>
          </Entry>
        ))}
      </EntryList>
    </Section>
  )
}
