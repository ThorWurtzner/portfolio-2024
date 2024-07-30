 import React from 'react'
import "./Introduction.css";
import Particle from '../Particle/Particle'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Typewriter } from 'react-simple-typewriter'

export default function Introduction(props) {
    
    return (
        <>
            <div className="introductionWrapper">
                <Particle id="tsparticles" />

                <div className="introductionContent">
                    <div className="introductionText">
                        <h1>Hey, I'm <span>Thor Würtzner.</span></h1>
                        <h2>
                            I develop&nbsp;
                            <span>
                                <Typewriter
                                    words={['back-end', 'front-end']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae magnam saepe facilis, quia consequuntur possimus beatae excepturi, exercitationem ea totam necessitatibus dolorem distinctio sint pariatur perferendis at tenetur illum nulla?</p> */}
                    </div>
                    <div className="illustration">
                        <DotLottieReact
                            src="https://lottie.host/1416ee11-cc68-4bb7-bf5f-229d1fb410ee/uoyVLTb1Tj.json"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
