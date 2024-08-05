import React from 'react';
import "./Footer.css";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Footer() {

    return (
        <footer className='footer' id='contact'>

            {/* <div className='contact'>
                <DotLottieReact className='contactIllustration'
                    // src="https://lottie.host/950d51a2-1913-4b5b-ac85-643421549d41/CBryhjGEGm.lottie"
                    // src="https://lottie.host/44021df0-90c6-47b0-9a24-f73cecb18ad2/xXobAS00ZY.json"
                    src="https://lottie.host/793dab06-660b-4ec8-ae7d-f17c77dad12c/Y1siqmXYgg.json"
                    loop
                    autoplay
                />
                <p>Wanna get in contact?</p>
                <a href="mailto:thorwurtzner@gmail.com">Write me a mail</a>
            </div> */}

            {/* <div className='socialMedia'>
                <a href="https://github.com/ThorWurtzner" target="_blank">
                    <img src='/images/icons/github.png' alt='icon' />
                </a>
                <a href="https://www.linkedin.com/in/thor-wurtzner/" target="_blank">
                    <img src='/images/icons/linkedin.png' alt='icon' />
                </a>
                <a href="https://dev.to/thorwurtzner" target="_blank">
                    <img src='/images/icons/devto.png' alt='icon' />
                </a>
                <a href="https://www.behance.net/thorwrtzner" target="_blank">
                    <img src='/images/icons/behance.png' alt='icon' />
                </a>
            </div> */}

            <div className="credit">
                <p>Designed loosely in Figma, and built in React</p>
            </div>
        </footer>
    )
}
