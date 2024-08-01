import React from 'react'
import "./Dracanvas.css";

import { Slide, Fade } from "react-awesome-reveal";

export default function Dracanvas(props) {
    

    return (
        <div className='dracanvasShowcase'>
            <p className='projectNumber'>1.</p>
            <div className='dracanvasShowcase__innerContent'>
                <div className='dracanvasShowcase__innerContent__title'>
                    <Fade direction='left' duration={1200}>
                        <img className="dracanvasShowcase__innerContent__code" src='/images/dracanvas/dracanvasCode.png' alt='dracanvasCode' />
                    </Fade>
                    <Fade duration={1500} delay={500} triggerOnce>
                        <div>
                            <img className="dracanvasShowcase__innerContent__title__logo" src='/images/dracanvas/dracanvasLogo.png' alt='dracanvasLogo' />
                            <h2>Dracanvas</h2>
                            <h3>Mirroring the Hidden</h3>
                        </div>
                    </Fade>
                </div>
                <div className='dracanvasShowcase__mobileWrapperMobile'>
                    <Fade direction='left' duration={1200}>
                        <img className="dracanvasShowcase__mobileWrapper__picture" src='/images/dracanvas/dracanvasMobiles.png' alt='dracanvas' />
                    </Fade>
                </div>
                <Fade duration={1500} delay={500} triggerOnce>
                    <p className='dracanvasShowcase__innerContent__text'>
                    My magnum opus. A project that has grown to wild proportions, and undoubtedly the one I am most proud of. 
                    I kept getting annoyed by how needlessly convuluted it was to access the relevant lecture information for each subject, so I decided to fix that.
                    <br/>
                    It runs through a proxy to circumvent CORS, breaks several of the academy's rules - and has essentially become the most patchwork codebase I have ever seen. 
                    But it is mine, created without help, since no help can be found for the monster of an application that Dracanvas (Dracula theme, Canvas - get it?) has become.
                        <br/>
                        <br/>
                        With time, and without upkeep, it will sadly break - and because of the questionable rulebreaking (and me repeatably accidentally pushing my API keys - whoops), the code will be kept private for now, but contact me if there's an interest.
                    </p>
                </Fade>
            </div>
            <div className='dracanvasShowcase__mobileWrapper'>
                <Fade direction='up' duration={1000}>
                    <img className="dracanvasShowcase__mobileWrapper__picture" src='/images/dracanvas/dracanvasMobiles.png' alt='dracanvas' />
                </Fade>
            </div>
            {/* <Fade direction='left' duration={1200} delay={300}> */}
                <img className="dracanvasShowcase__codeMobile" src='/images/dracanvas/dracanvasCode.png' alt='dracanvasCode' />
            {/* </Fade> */}
        </div>
    )
}
