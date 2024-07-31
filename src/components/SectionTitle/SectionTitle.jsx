import React from 'react';
import "./SectionTitle.css";

export default function SectionTitle({title, id}) {
    
    return (
        <h2 className='sectionTitle' id={id}>{title}</h2>
    )
}
