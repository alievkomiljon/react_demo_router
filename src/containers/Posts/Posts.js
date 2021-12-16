import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';
import FullPost from '../../components/FullPost/FullPost';
import { APIConfig } from '../../store/API-Config';

const Posts = (props) => {

    console.log("POSTS --- RENDERED!")
    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true); // indicates that is retreiving data

    function fetchPostsHandler() {
        const headers = {
            'Access-Control-Allow-Origin': '*',
        }
        axios(postAPI, { headers })
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(fetchPostsHandler, []); 

    const rposts = posts.map(post => {
        return <Link to={`${post.id}`} key={post.id}>  
            <Post
                title={post.title}
                author={post.author}
                id={post.id} />
        </Link>
    });

    let content = <p >No posts available</p>;
    if (isLoading) {
        content = <p> Loading ... </p>;  
    }
    else if (rposts.length > 0) {
        content = rposts;
    }

    return (
        <div>
            <section className="Posts">
                {content}
            </section>
            <FullPost />
        </div>
    );
}

export default Posts;
