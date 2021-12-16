import React, { useState } from 'react';
import './Blog.css';
import { LikedPosts } from '../../store/LikedPosts';
import { APIConfig } from '../../store/API-Config';
import Header from '../Header/Header';
import PageRoutes from '../Routes/Routes';

const Blog = (props) => {

    const [likedPosts, setLikedPosts] = useState([]);
    const base = 'http://localhost:8080';

    return (
        <LikedPosts.Provider value={{ likedPosts, setLikedPosts }}>
            <APIConfig.Provider value={
                {
                    postAPI: base + '/posts/',
                    userAPI: base + '/users/'
                }
            }>
                <div className="Blog">
                    <Header />
                    <PageRoutes/>
                </div>
            </APIConfig.Provider>
        </LikedPosts.Provider >
    );
}


export default Blog;

