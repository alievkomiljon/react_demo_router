import React from "react";
import { Route, Routes , Navigate} from 'react-router-dom';
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Posts from "../Posts/Posts";

const PageRoutes = () => {

    return (
        <Routes>
            <Route path="posts" element={<Posts />} >
                <Route path=':id' element={<FullPost />} />  
            </Route >
            <Route path="new-post" element={< NewPost />} />
            <Route path="/" element={<Navigate replace to="posts" />} />
        </Routes>
    );

}

export default PageRoutes;