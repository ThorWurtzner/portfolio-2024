import React, { useState } from 'react'
import "./SmallProject.css";

export default function SmallProject({img, title, description, tags, codeLink, websiteLink, number}) {

    return (
        <div className="smallProject">
            <p className='projectNumberSmall'>{number}.</p>
            <img src={img} />
            <h3>{title}</h3>
            <p className='projectDescription'>{description}</p>
            <div className="projectTags">
                {
                    tags.map((tag, i) => <div key={i} className='projectTag' style={{background: 
                        tag == "React" ? "#ABD5FF" :
                        tag == "Sass" ? "#ED9EF4" :
                        tag == "Firebase" ? "#F6D38E" :
                        tag == "TDD" ? "#ABFFC3" :
                        "aliceblue"
                    }}>{tag}</div>)
                }
            </div>
            <div className="projectLinks">
                <a href={codeLink} target='_blank'>Code</a>
                <p>|</p>
                <a href={websiteLink} target='_blank'>Website</a>
            </div>
        </div>
    )
}
