import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Timeline.css'
/* Company Logos */
import inLogo from '../resources/images/timeline/in.png'
import hwLogo from '../resources/images/timeline/hw.png'
import rydeLogo from '../resources/images/timeline/ryde.png'

export default function Timeline() {
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="2021 - Present"
                    icon={ <img src={inLogo} alt="logo icon"></img>}>
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Interserv
                    </h4>
                    <p>
                        Developing software for Sydney Trains, Australian defence force and other projects including leading front-end development of screens and interactive kiosks at train stations for Sydney Trains.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2020 - 2021"
                    icon={ <img src={rydeLogo} alt="logo icon"></img>}>
                    <h3 className="vertical-timeline-element-title">
                        Product Development Software Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        City of Ryde
                    </h4>
                    <p>
                        Optimising the outcome of our multi-unit dwelling food-waste collection trial. During a 6 month timeline I have worked in a team of 8 engineers to develop a product solution for the trial.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2019 - 2021"
                    icon={ <img src={hwLogo} alt="logo icon"></img>}>
                    <h3 className="vertical-timeline-element-title">
                        IT Analyst & Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Holman Webb
                    </h4>
                    <p>
                    Deployed and Maintained Enterprise AI cyber security software (www.darktrace.com) and MFA Security Software (duo.com) across the firm in offices around Australia
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2018 - 2019"
                    icon={ <img src={hwLogo} alt="logo icon"></img>}>
                    <h3 className="vertical-timeline-element-title">
                        Software Support Technician
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Animal Logic
                    </h4>
                    <p>
                    Install and configure appropriate software and functions according to specifications. Develop and maintain local networks in ways that optimize performance. Perform troubleshooting to diagnose and resolve problems
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="2017 - 2018"
                    icon={ <img src={hwLogo} alt="logo icon"></img>}>
                    <h3 className="vertical-timeline-element-title">
                        IT Technician
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        KFC
                    </h4>
                    <p>
                    Communicating with customers through various channels. Setting up IT equipment on premesis. Resolving Software and Hardware related problems
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
