import React from 'react'
import "./Post.css";

export default function Post({title}) {
    

    return (
        <div className='post'>
            <h3>{title}</h3>
        </div>
    )
}
