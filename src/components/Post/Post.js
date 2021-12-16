import React, { useContext } from 'react';
import { LikedPosts } from '../../store/LikedPosts';

import './Post.css';

const Post = (props) => {

    const { likedPosts, setLikedPosts } = useContext(LikedPosts);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>

            </div>
            {
                likedPosts.includes(props.id)
                    ?
                    <button onClick={() => {
                        let removedPost = likedPosts;
                        removedPost.splice(removedPost.indexOf(props.id), 1);
                        setLikedPosts(removedPost);
                        console.log(likedPosts);
                    }}>
                        Unfollow </button>
                    :
                    <button onClick={() => {
                        setLikedPosts([...likedPosts, props.id]);
                        console.log(likedPosts);
                    }}>
                        Follow </button>}
            {/* add this to blog context */}
        </article>
    );
}

export default Post;