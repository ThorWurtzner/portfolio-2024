import React from 'react'
import "./Projects.css";
import Dracanvas from './Dracanvas/Dracanvas';
import SectionTitle from '../SectionTitle/SectionTitle';
import Cellular from './Cellular/Cellular';
import SmallProject from './SmallProject/SmallProject';

export default function Projects(props) {
    

    return (
        <>
            <SectionTitle title="PROJECTS." id="projects" />
            <div className="projects">
                <Dracanvas />
                <Cellular />
                
                <div className="smallProjects">
                    <SmallProject 
                        title={"Online Multiplayer Game"}
                        img={"/images/projectCards/multiplayerGame.png"}
                        description={"A group project that involved creating a server that ran the multiplayer game pictured above, that everybody could connect to and compete in."}
                        tags={["Java", "TCP", "Network"]}
                        codeLink={""}
                        websiteLink={""}
                        number={3}
                    />
                    <SmallProject 
                        title={"Pinger"}
                        img={"/images/projectCards/pinger.jpg"}
                        description={"A fullstack app with Firebase as the backend, and continual updates every time theres activity in the chat. Logging in with a Google account by Oauth - you're able to send live updated messages to other people signed in."}
                        tags={["React", "Firebase", "OAuth", "Sass"]}
                        codeLink={"https://github.com/ThorWurtzner/Pinger/tree/master"}
                        websiteLink={"https://electron-chat-43469.firebaseapp.com"}
                        number={5}
                    />
                    <SmallProject 
                        title={"Inventory Management System"}
                        img={"/images/projectCards/sall.png"}
                        description={"My 2nd semester exam, which involved creating an extensive report and application in collaberation with Sall Whisky Distillery."}
                        tags={["Java", "Wireframing", "UML"]}
                        codeLink={""}
                        websiteLink={""}
                        number={4}
                    />
                    <SmallProject 
                        title={"Matthew - The bot"}
                        img={"/images/projectCards/matthew.png"}
                        description={"A bot for discord, that can be triggered to speak by various commands. He'll primarily sit in your voice channel and remind everyone to check their posture at an interval. He sadly died on 2022 when Heroku shut down their free tier."}
                        tags={["Python", "Discord API", "Heroku"]}
                        codeLink={"https://github.com/ThorWurtzner/Posture-bot-discord"}
                        number={6}
                    />
                    <SmallProject 
                        title={"Dappy Crypto"}
                        img={"/images/projectCards/dappy.jpg"}
                        description={"A landing page for a fictional cryptocurrency business. Connected to Google analytics with split testing, to test user engagement on different call-to-action colors."}
                        tags={["React", "Sass", "Split testing"]}
                        codeLink={"https://github.com/ThorWurtzner/Crypto-Landingpage"}
                        websiteLink={"https://dappy-crypto.netlify.app/"}
                        number={7}
                    />
                    <SmallProject 
                        title={"Football App Homepage"}
                        img={"/images/projectCards/soccer.jpg"}
                        description={"A landing page for a fictional football app. Focus on Test Driven Development with multiple tests on various items withing the components."}
                        tags={["React", "TDD","Jest", "Sass"]}
                        codeLink={"https://thorwurtzner.dk/#"}
                        websiteLink={"https://sports-app-landingpage.netlify.app/"}
                        number={8}
                    />
                </div>
            </div>
        </>
    )
}
