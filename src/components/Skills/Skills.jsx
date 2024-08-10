import React from 'react'
import "./Skills.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LazyLoad from 'react-lazyload';

export default function Skills(props) {
    

    return (
        <>
            <SectionTitle title="SKILLS." id="skills" />
            <div className='skills'>
                <h3 className='skillsIntro'>While this site primarily showcases my front-end work, I'm also proficient in back-end development and relational databases. I enjoy creating both beautiful and efficient systems and take pride in seeing applications through the entire full-stack process.</h3>
                <section>
                    <LazyLoad offset={600} once>
                        <div className='skillsIllustration'>
                            <DotLottieReact
                                src="https://lottie.host/7034b011-ee55-4613-afba-02543b466b68/thmNpJXeIi.json"
                                loop
                                autoplay
                            />
                        </div>
                    </LazyLoad>
                    <div className='skillsInner'>
                        <img src="/images/skillLogos/java.svg" alt="Java" title='Java' />
                        <img src="/images/skillLogos/cSharp.svg" alt="C#" title='C#' />
                        <img src="/images/skillLogos/node.svg" alt="NodeJS" title='NodeJS' />
                        <img src="/images/skillLogos/sql.svg" alt="MS SQL Server" title='MS SQL Server' />
                        <img src="/images/skillLogos/python.svg" alt="Python" title='Python' />
                        <img src="/images/skillLogos/js.svg" alt="Javascript" title='Javascript' />
                        <img src="/images/skillLogos/react.svg" alt="React" title='React' />
                        <img src="/images/skillLogos/html.svg" alt="HTML" title='HTML' />
                        <img src="/images/skillLogos/css.svg" alt="CSS" title='CSS' />
                        <img src="/images/skillLogos/sass.svg" alt="Sass" title='Sass' />
                        <img src="/images/skillLogos/figma.svg" alt="Figma" title='Figma' />
                        <img src="/images/skillLogos/balsamiq.png" alt="Balsamiq" title='Balsamiq' />
                        <img src="/images/skillLogos/vp.png" alt="Visual Paradigm" title='Visual Paradigm' />
                        <img src="/images/skillLogos/git.svg" alt="Git" title='Git' />
                    </div>
                </section>
            </div>
        </>
    )
}
