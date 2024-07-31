import React from 'react'
import "./Post.css";

export default function Post({title, img, tags, description, url, reactions}) {
    

    return (
        <a href={url} target="_blank" className='post'>
            <img src={img} />
            <h3>{title}</h3>
            <p className='postDescription'>{description}</p>
            <div className="tags">
                {
                    tags.map((tag, i) => <div key={i} className='tag'>{tag}</div>)
                }
            </div>
            <p className='reactions'>❤️ {reactions}</p>
        </a>
    )
}
