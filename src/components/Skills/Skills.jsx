import React from 'react'
import "./Skills.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Skills(props) {
    

    return (
        <>
            <SectionTitle title="SKILLS." id="skills" />
            <div className='skills'>
                <h3 className='skillsIntro'>While this site primarily showcases my front-end work, I'm also proficient in back-end development and relational databases. I enjoy creating both beautiful and efficient systems and take pride in seeing applications through the entire full-stack process.</h3>
                <section>
                    <div className='skillsIllustration'>
                        <DotLottieReact
                            src="https://lottie.host/7034b011-ee55-4613-afba-02543b466b68/thmNpJXeIi.json"
                            loop
                            autoplay
                        />
                    </div>
                    <div className='skillsInner'>
                        <img src="/images/skillLogos/java.svg" alt="logo" />
                        <img src="/images/skillLogos/cSharp.svg" alt="logo" />
                        <img src="/images/skillLogos/node.svg" alt="logo" />
                        <img src="/images/skillLogos/sql.svg" alt="logo" />
                        <img src="/images/skillLogos/python.svg" alt="logo" />
                        <img src="/images/skillLogos/js.svg" alt="logo" />
                        <img src="/images/skillLogos/react.svg" alt="logo" />
                        <img src="/images/skillLogos/html.svg" alt="logo" />
                        <img src="/images/skillLogos/css.svg" alt="logo" />
                        <img src="/images/skillLogos/sass.svg" alt="logo" />
                        <img src="/images/skillLogos/figma.svg" alt="logo" />
                        <img src="/images/skillLogos/balsamiq.png" alt="logo" />
                        <img src="/images/skillLogos/vp.png" alt="logo" />
                        <img src="/images/skillLogos/git.svg" alt="logo" />
                    </div>
                </section>
            </div>
        </>
    )
}
