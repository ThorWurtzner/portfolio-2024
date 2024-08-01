import React from 'react'
import "./Cellular.css";
import { Fade } from 'react-awesome-reveal';

export default function Cellular(props) {
    

    return (
        <div className="cellular">
            <p className='projectNumber'>2.</p>

            <div className='cellularWrapper'>
                <Fade duration={1000}>
                    <h3>Cellular <br/> Automata</h3>
                </Fade>
                <div className="cellularIntro">
                    <Fade direction='left' duration={1200}>
                        <div className='lizardImgWrapper'>
                            <img src="/images/lizard.png" alt="lizardScale" className='lizardImg'/>
                            <section className='imgDesc'>
                                <p>The concept of Cellular Automata seen on a lizards skin</p>
                            </section>
                        </div>
                    </Fade>
                    <Fade>
                        <p> A subject I've been quite interested in, and a beautiful blend of software, biology and math - showcasing how complexity can arise from simplicity. 
                            At their core, they are computational models that mimic the way cells interact in nature, each with a specific state. Every tick of the clock, these cells evolve based on simple rules that take into account the states of their neighbors. 
                            Despite their simplicity, cellular automata can generate astonishingly intricate patterns and behaviors.
                            <a href="#blog">I’ve written a blog post about it here</a>
                        </p>
                    </Fade>
                </div>
                <div className="cellularVideos">
                    <div className="gameOfLifeSection">
                        <h4>Game of life</h4>
                        <p className='videoDescription'>My rendition of Conway's Game of Life, and one of the most well-known examples of cellular automata, here built in Javascript. 
                            In this simulation, cells on a grid live, die, or reproduce based on a set of simple rules, creating patterns that evolve over time.</p>
                        <video src="/videos/gameoflife.mp4" autoPlay loop muted className='golVideo'>
                            Your browser does not support the video tag.
                        </video>
                        <div className="simLinks">
                            <a href="https://github.com/ThorWurtzner/game_of_life">Code</a>
                            <p>|</p>
                            <a href="https://game-of-life-thorw.netlify.app">Try it yourself</a>
                        </div>
                    </div>
                    <div className="sandSection">
                        <h4>Sand simulation</h4>
                        <p className='videoDescription'>A virtual sandbox, where I've applied the principles of cellular automata to mimic the physics of falling sand in Javascript. 
                            The individual grains interact with each other through simple rules, settling into natural formations.</p>
                        <video src="/videos/sandsimulation.mp4" autoPlay loop muted className='sandVideo'>
                            Your browser does not support the video tag.
                        </video>
                        <div className="simLinks">
                            <a href="https://github.com/ThorWurtzner/sand_simulator">Code</a>
                            <p>|</p>
                            <a href="https://sandsimulatorthorw.netlify.app">Try it yourself</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
