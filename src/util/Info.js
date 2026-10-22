import { currentJob } from '../resources/data/experience'

/* Information */
export var name = "Chaz L.";
/* Derived from the current role in experience.js, minus any "(Full Stack)"-style qualifier */
export var jobtitle = currentJob.role.replace(/\s*\(.*?\)\s*/g, ' ').trim();
export var company = currentJob.company;
