import React from 'react'
import "./Dracanvas.css";

export default function Dracanvas(props) {
    

    return (
        <div className='dracanvasShowcase'>
            <p className='projectNumber'>1.</p>
            <div className='dracanvasShowcase__innerContent'>
                <div className='dracanvasShowcase__innerContent__title'>
                    <img className="dracanvasShowcase__innerContent__code" src='/images/dracanvas/dracanvasCode.png' alt='dracanvasCode' />
                    <div>
                        <img className="dracanvasShowcase__innerContent__title__logo" src='/images/dracanvas/dracanvasLogo.png' alt='dracanvasLogo' />
                        <h2>Dracanvas</h2>
                        <h3>Mirroring the Hidden</h3>
                    </div>
                </div>
                <div className='dracanvasShowcase__mobileWrapperMobile'>
                    <img className="dracanvasShowcase__mobileWrapper__picture" src='/images/dracanvas/dracanvasMobiles.png' alt='dracanvas' />
                </div>
                <p className='dracanvasShowcase__innerContent__text'>
                My magnum opus. A project that has grown to wild proportions, and undoubtedly the one I am most proud of. 
                I kept getting annoyed by how needlessly convuluted it was to access the relevant lecture information for each subject, so I decided to fix that.
                <br/>
                It runs through a proxy to circumvent CORS, breaks several of the academy's rules - and has essentially become the most patchwork codebase I have ever seen. 
                But it is mine, created without help, since no help can be found for the monster of an application that Dracanvas (Dracula theme, Canvas - get it?) has become.
                    <br/>
                    <br/>
                    Despite its convoluted structure and labyrinthine logic, it stands as a beacon of personal achievement.
                    <br/>
                    With time, and without upkeep, it will sadly break - and because of the questionable rulebreaking (and me repeatably accidentally pushing my API keys - whoops), the code will be kept private for now, but contact me if there's an interest.
                </p>
            </div>
            <div className='dracanvasShowcase__mobileWrapper'>
                <img className="dracanvasShowcase__mobileWrapper__picture" src='/images/dracanvas/dracanvasMobiles.png' alt='dracanvas' />
            </div>
            <img className="dracanvasShowcase__codeMobile" src='/images/dracanvas/dracanvasCode.png' alt='dracanvasCode' />
        </div>
    )
}
