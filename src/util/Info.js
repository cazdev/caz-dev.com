import { currentJob } from '../resources/data/experience'

export const name = 'Chaz L.'
export const fullName = 'Chaz Lambrechtsen'
export const location = 'Sydney'

/* Derived from the current role in experience.js, minus any "(Full Stack)"-style qualifier */
export const jobtitle = currentJob.role.replace(/\s*\(.*?\)\s*/g, ' ').trim()
export const company = currentJob.company
export const companyUrl = currentJob.website

export const profiles = [
  { label: 'GitHub', href: 'https://github.com/cazdev' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/chaz-lambrechtsen' },
]
