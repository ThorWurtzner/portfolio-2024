import React from 'react'
import "./Projects.css";
import Dracanvas from '../Dracanvas/Dracanvas';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Projects(props) {
    

    return (
        <>
            <SectionTitle title="PROJECTS." />
            <div className="projects">
                <Dracanvas />

                <div className="cellular"></div>
                <p>Resten</p>
            </div>
        </>
    )
}
