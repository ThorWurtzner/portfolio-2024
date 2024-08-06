import { useState } from 'react'
import "./AboutMe.css";
// import "../Footer/Footer.css";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutMe(props) {


    return (
        <>
            {/* <SectionTitle title="ABOUT ME." id="aboutMe" /> */}
            <section className='aboutMe' id="aboutMe">
                <h2 className='sectionTitleAbout'>About Me.</h2>
                <div className='aboutMe__content'>
                    <div className='aboutMe__portraitWrapper'>
                        <img className='portrait' src='/images/portrait.png'/>
                        <div className='aboutMe__portraitWrapper__description'>
                            <h2>Thor Hinz Würtzner</h2>
                            <div>
                                {/* <p className='aboutMe__portraitWrapper__description__studying'>Currently studying:</p> */}
                                <p>- Datamatiker -</p>
                                <p>Business Academy Aarhus</p>
                            </div>
                            <div>
                                <p>- Web Developer -</p>
                                <p>Roskilde Technical College</p>
                            </div>
                        </div>

                        <div className='socialMedia'>
                            <a href="https://github.com/ThorWurtzner" target="_blank">
                                <img src='/images/icons/github.png' alt='icon' />
                            </a>
                            <a href="https://www.linkedin.com/in/thor-wurtzner/" target="_blank">
                                <img src='/images/icons/linkedin.png' alt='icon' />
                            </a>
                            <a href="https://dev.to/thorwurtzner" target="_blank">
                                <img src='/images/icons/devto.png' alt='icon' />
                            </a>
                            {/* <a href="https://www.behance.net/thorwrtzner" target="_blank">
                                <img src='/images/icons/behance.png' alt='icon' />
                            </a> */}
                        </div>
                    </div>

                    <div className='aboutMe__content__inner'>

                        <p>
                        I am driven by a genuine desire to contribute on work that is crucial for our society to function. As I near the completion of my Datamatiker education, I am eager to apply my skills and knowledge in software development to create these meaningful solutions. <br/><br/> My passion lies in leveraging technology to solve real-world problems, improve efficiency, and enhance user experiences. <br/> I am excited about the prospect of collaborating with like-minded professionals and organizations to bring innovative ideas to life.
                        </p>
                        <a className='cvBtn' href="https://drive.google.com/file/d/1kxEeNor0MYbEldm_tQYVWLBiCKjkHDvh/view?usp=sharing" target='_blank'>My CV</a>

                        <div className="contact">
                            <p>Wanna get in contact?</p>
                            <DotLottieReact className='contactIllustration'
                                // src="https://lottie.host/950d51a2-1913-4b5b-ac85-643421549d41/CBryhjGEGm.lottie"
                                // src="https://lottie.host/44021df0-90c6-47b0-9a24-f73cecb18ad2/xXobAS00ZY.json"
                                src="https://lottie.host/793dab06-660b-4ec8-ae7d-f17c77dad12c/Y1siqmXYgg.json"
                                loop
                                autoplay
                            />
                            <a href="mailto:thorwurtzner@gmail.com" className='contactBtn'>Write me a mail</a>
                        </div>

                        {/* <h2>Some of my other illustrations and designs:</h2>
                        <div className='aboutMe__illustrations'>
                        <img className='aboutMe__illustrations__img' src='/images/illustrations/town2.png' alt='illustration' onClick={() => openLightbox('/images/illustrations/town2.png')} />
                            <img className='aboutMe__illustrations__img' src='/images/illustrations/copenhagen.png' alt='illustration' onClick={() => openLightbox('/images/illustrations/copenhagen.png')} />
                            <img className='aboutMe__illustrations__img' src='/images/illustrations/spotify1.png' alt='illustration' onClick={() => openLightbox('/images/illustrations/spotify1.png')} />
                            <img className='aboutMe__illustrations__img' src='/images/illustrations/spotify2.png' alt='illustration' onClick={() => openLightbox('/images/illustrations/spotify2.png')} />
                        </div> */}
                    </div>
                </div>
            </section>

            {/* {lightboxOpen && (
                <div className='lightbox' onClick={closeLightbox}>
                <span className='close' onClick={closeLightbox}>&times;</span>
                <img className='lightbox-content' src={lightboxImgSrc} alt='' />
                </div>
            )} */}
        </>
    )
}
