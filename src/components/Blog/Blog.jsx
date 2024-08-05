import React, { useEffect, useState } from 'react'
import "./Blog.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import Post from './Post/Post';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Blog(props) {

    let [posts, setPosts] = useState();

    useEffect(() => {

        fetch("https://dev.to/api/articles?username=thorwurtzner")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })

    }, []);
    

    return (
        <>
            <SectionTitle title="BLOG." id="blog" />
            <div className="blog">
                <div className='blogIntroWrapper'>
                    <h3 className='blogIntro'>I love exploring various aspects of software development and staying up-to-date with the latest weird trends. My blog features a collection of posts where I share what I've learned, from tips to interesting tech discoveries.
                        <br/> 
                        {/* <br/> */}
                        Even just writing about what I'm currently studying is a great way to enchance my understanding of the subject. 
                        <span>Check out some of my posts below!</span>
                    </h3>
                    <div className="blogIllustration">
                        <DotLottieReact
                            src="https://lottie.host/503dff86-4755-497e-b4da-5e4545412908/MPUBReCqZa.json" // https://lottie.host/02e4eadd-f162-4103-a8e6-b4a2a202554f/1zZGK0puBG.json
                            loop
                            autoplay
                        />
                    </div>
                </div>
                <div className='blogWrapper'>
                    <div className="blogPosts">
                        {
                            posts && posts.map(post => 
                                <Post
                                    key={post.title} 
                                    title={post.title}
                                    img={post.cover_image} 
                                    tags={post.tag_list}
                                    description={post.description}
                                    url={post.url}
                                    reactions={post.public_reactions_count}
                                />)
                        }
                        <Post 
                            title={"Cellular Automata - Wonders of Emergent Patterns from Biology to Computer Science"}
                            img={"https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpc1ikp4lky2k52pbj2wg.png"} 
                            tags={["cells", "math", "biology"]}
                            description={"It doesn't matter how beautiful your site is, if a push with some faulty code can crumble it..."}
                            url={"post.url"}
                            reactions={"28"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
