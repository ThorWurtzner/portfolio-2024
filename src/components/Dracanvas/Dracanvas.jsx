import React from 'react'
import "./Dracanvas.css";

export default function Dracanvas(props) {
    

    return (
        <div className='dracanvasShowcase'>
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
                It runs through a proxy to circumvent CORS, breaks several of the academy's rules - and has essentially become the ugliest codebase I have ever seen. 
                But it is mine, created without help—since no help can be found for the monster of an application that Dracanvas (Dracula theme, Canvas - get it?) has become.
                    <br/>
                    <br/>
                    Each line of code is a testament to my journey through growing as a Software Developer. The countless hours spent debugging in the dead of night, 
                    and the thrill of overcoming one impossible hurdle after another. <br/>
                    Despite its convoluted structure and labyrinthine logic, it stands as a beacon of personal achievement.
                </p>
            </div>
            <div className='dracanvasShowcase__mobileWrapper'>
                <img className="dracanvasShowcase__mobileWrapper__picture" src='/images/dracanvas/dracanvasMobiles.png' alt='dracanvas' />
            </div>
            <img className="dracanvasShowcase__codeMobile" src='/images/dracanvas/dracanvasCode.png' alt='dracanvasCode' />
        </div>
    )
}
