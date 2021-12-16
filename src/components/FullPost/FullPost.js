import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';
import { APIConfig } from '../../store/API-Config';
import { useParams, useNavigate } from 'react-router-dom';


const FullPost = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const param = useParams();
    const navigate = useNavigate();

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const [postCall, setPostCall] = useState({});

    useEffect(() => {
        if (param.id !== undefined){
            axios(postAPI + param.id, { headers })
            .then(response => {
                setPostCall(response.data);
            })
            .catch(err => 
                console.log("FULLPOST NOT FETCHED " + err.message))
        }
    }, [param.id]);  

    const deletePost = () => {
        axios.delete(postAPI + param.id, { headers })
            .then(response => {
                navigate('/');
                console.log(response);
            })
            .catch(error => console.log(error.message))
    };

    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Post!</p>;

    if (param.id != null) {
        post = (
            <div className="FullPost">
                <h1>{postCall.title}</h1>
                <p>{postCall.content}</p>
                <div className="Edit">
                    <button onClick={deletePost} className="Delete">Delete</button>
                </div>
            </div>
        );
    }

    return post;
}

export default FullPost;