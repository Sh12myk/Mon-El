import React from 'react';
import './Post.css';


const Post = (props) => {
    return (
        <article>
            <div className = "author-photo flex">
                <img src = {props.author.photo} alt = {"img"} />
            </div>
            <div className = "post-wrapper flex">
                <div className = "post-inner flex">                
                    <div className="post-data flex">
                        <div className = "post-data-author flex">
                            <h3>{props.author.name}</h3>
                            <p>{props.author.nickname}</p>
                            <p> &#183; {props.date}</p>
                        </div>
                        <h4>{props.content}</h4>
                    </div>
                </div>
                <img src = {props.image} alt = {"img"}/>
            </div>
        </article>
    );
};


export default Post;