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
                        title={"iPlayMusic"}
                        img={"/images/projectCards/iplaymusic2.png"}
                        description={"A pretty comprehensive app that uses OAuth and the Spotify API to recreate the experience. The login-token is passed through the application with the use of Context. You're able to browse your own playlists, as well as currently trending."}
                        tags={["React", "OAuth", "Spotify"]}
                        codeLink={"https://github.com/ThorWurtzner/i-play-music"}
                        websiteLink={"https://i-play-music.netlify.app"}
                        number={3}
                    />
                    <SmallProject 
                        title={"Online Multiplayer Shooter"}
                        img={"/images/projectCards/multiplayerGame.png"}
                        description={"A group project that involved creating a TCP server that ran the multiplayer game pictured above that everybody could connect to and compete in. The game is primarily run client-side, while the server communicates relevant positional data to all connected players."}
                        tags={["Java", "TCP", "JavaFX"]}
                        codeLink={"https://github.com/ThorWurtzner/NetworkGame"}
                        websiteLink={""}
                        number={4}
                    />
                    <SmallProject 
                        title={"Pinger"}
                        img={"/images/projectCards/pinger.jpg"}
                        description={"A fullstack app with Firebase as the backend, and continual updates every time theres activity in the chat. Logging in with a Google account by Oauth - you're able to send live updated messages to other people signed in."}
                        tags={["React", "Firebase", "OAuth", "Sass"]}
                        codeLink={"https://github.com/ThorWurtzner/Pinger"}
                        websiteLink={"https://electron-chat-43469.firebaseapp.com"}
                        number={5}
                    />
                    <SmallProject 
                        title={"Inventory Management System"}
                        img={"/images/projectCards/sall2.webp"}
                        description={"'Sall Whisky Destillery' needed a digitalisation of their inventory keeping, which I built for my 2nd semester exam. My program was chosen out of 50'ish students, to be shown as a demo for the company."}
                        tags={["Java", "UML", "JavaFX"]}
                        codeLink={"https://github.com/ThorWurtzner/InventoryManagementSystem"}
                        websiteLink={""}
                        number={6}
                    />
                    <SmallProject 
                        title={"Matthew - The bot"}
                        img={"/images/projectCards/matthew.png"}
                        description={"A bot for discord, that can be triggered to speak by various commands. He'll primarily sit in your voice channel and remind everyone to check their posture at an interval. He sadly died on 2022 when Heroku shut down their free tier."}
                        tags={["Python", "Discord API", "Heroku"]}
                        codeLink={"https://github.com/ThorWurtzner/Posture-bot-discord"}
                        websiteLink={""}
                        number={7}
                    />
                    <SmallProject 
                        title={"Voice Recognition Script"}
                        img={"/images/projectCards/voice.webp"}
                        description={"A script which utilizes keybind triggered voice recognition, to send a message from your discord account to a specified server. This allows the user to control music playing in a channel, by modifying the recognized speech to fit the criteria of another bot listening for prompts."}
                        tags={["Python", "Discord API"]}
                        codeLink={"https://github.com/ThorWurtzner/voiceRecognition-software"}
                        websiteLink={""}
                        number={8}
                    />
                    {/* <SmallProject 
                        title={"Dappy Crypto"}
                        img={"/images/projectCards/dappy.jpg"}
                        description={"A landing page for a fictional cryptocurrency business. Connected to Google analytics with split testing, to test user engagement on different call-to-action colors."}
                        tags={["React", "Sass", "Split testing"]}
                        codeLink={"https://github.com/ThorWurtzner/Crypto-Landingpage"}
                        websiteLink={"https://dappy-crypto.netlify.app/"}
                        number={9}
                    /> */}
                    <SmallProject 
                        title={"Football Landing Page"}
                        img={"/images/projectCards/soccer.jpg"}
                        description={"A landing page for a fictional football app. Focus on Test Driven Development with multiple tests on various items withing the components."}
                        tags={["React", "TDD","Jest", "Sass"]}
                        codeLink={""}
                        websiteLink={"https://sports-app-landingpage.netlify.app/"}
                        number={10}
                    />
                    <SmallProject 
                        title={"Philips Hue Spotify integration"}
                        img={"/images/projectCards/hue.webp"}
                        description={"An app that connects to your Spotify account and Philips Hue lightbulbs. Playing music anywhere will change the color of the bulb to the corresponding album cover, and extract the tempo of the song to make the bulbs play along to the beat."}
                        tags={["React", "Spotify","Hardware"]}
                        codeLink={"https://github.com/ThorWurtzner/hue-music"}
                        websiteLink={"https://hue-music.netlify.app"}
                        number={11}
                    />
                </div>
            </div>
        </>
    )
}
