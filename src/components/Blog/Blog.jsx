import React, { useEffect, useState } from 'react'
import "./Blog.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import Post from './Post/Post';

export default function Blog(props) {

    let [posts, setPosts] = useState();

    useEffect(() => {

        fetch("https://dev.to/api/articles?username=thorwurtzner")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                console.log(posts);
            })

    }, []);
    

    return (
        <>
            <SectionTitle title="BLOG." />
            <div className="blog">
                <p>I'm passionate about tech, and enjoy talking to myself about the things i learn about.</p>
                {
                    posts && posts.map(post => <Post title={post.title} />)
                }
            </div>
        </>
    )
}
