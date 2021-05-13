import React from 'react'

/* Styles */
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Timeline.css'
 
/* Components */
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineContent  from './TimelineContent';

/* Company Logos */
import inLogo from '../resources/images/timeline/in.png'
import hwLogo from '../resources/images/timeline/hw.png'
import rydeLogo from '../resources/images/timeline/ryde.png'
import alLogo from '../resources/images/timeline/al.png'
import kfcLogo from '../resources/images/timeline/kfc.png'

export default function Timeline() {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="2021 - Present"
                    icon={ <img src={inLogo} alt="logo icon"></img>}>
                        <TimelineContent
                            role="Software Engineer"
                            company="Interserv" 
                            description="Developing software for Sydney Trains, Australian defence force 
                            and other projects including leading front-end development of screens and interactive 
                            kiosks at train stations for Sydney Trains."
                        />
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2020 - 2021"
                    icon={ <img src={rydeLogo} alt="logo icon"></img>}>
                        <TimelineContent 
                            role="Product Development Software Engineer"
                            company="City of Ryde" 
                            description="Optimising the outcome of our multi-unit dwelling food-waste 
                            collection trial. During a 6 month timeline I have worked in a team of 8 engineers 
                            to develop a product solution for the trial."
                        />
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2019 - 2021"
                    icon={ <img src={hwLogo} alt="logo icon"></img>}>
                        <TimelineContent 
                            role="IT Analyst & Engineer"
                            company="Holman Webb" 
                            description="Deployed and Maintained Enterprise AI cyber security software 
                            (www.darktrace.com) and MFA Security Software (duo.com) across the firm in 
                            offices around Australia"
                        />
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2018 - 2019"
                    icon={ <img src={alLogo} alt="logo icon"></img>}>
                        <TimelineContent 
                            role="Software Support Technician"
                            company="Animal Logic" 
                            description="Install and configure appropriate software and functions 
                            according to specifications. Develop and maintain local networks in ways that 
                            optimize performance. Perform troubleshooting to diagnose and resolve problems"
                        />
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2017 - 2018"
                    icon={ <img src={kfcLogo} alt="logo icon"></img>}>

                        <TimelineContent 
                            role="IT Technician"
                            company="KFC" 
                            description="Communicating with customers through various channels. Setting up IT 
                            equipment on premesis. Resolving Software and Hardware related problems"
                        />
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
