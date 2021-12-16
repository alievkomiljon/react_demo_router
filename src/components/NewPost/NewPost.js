import axios from 'axios';
import React, { useContext, useRef } from 'react';
import { APIConfig } from '../../store/API-Config';
import {useNavigate} from 'react-router-dom';

import './NewPost.css';

const NewPost = (props) => {

    const APIs = useContext(APIConfig);
    const postAPI = APIs.postAPI;

    const newPostForm = useRef();
    const singleVal = useRef();

    const naviagte = useNavigate();

    const PostDataHandler = () => {
        const form = newPostForm.current
        const data = {
            title: form['title'].value,
            content: form['content'].value,
            author: form['author'].value
        };
        console.log(data);
        axios.post(postAPI, data)
            .then(data => {
                console.log('Success:', data);
                navigate('/posts'); // push will add it to the page stack, replace will just replace the component  // props.history.replace('/posts'); 
            })
            .catch((error) => {
                console.error('Error:', error);
            }); // to check push, go to google, then newpost and submit, then go back.
    }

    return (
        <div className="NewPost">
            <form ref={newPostForm}>
                <h1>Add a Post</h1>

                <label>Title</label>
                <input type="text" label={'title'} name={'title'} />

                <label>Content</label>
                <textarea rows="4" label={'content'} name={'content'} />

                <label>Author</label>
                <select label={'author'} name={'author'} >
                    <option value="Dean">Dean</option>
                    <option value="Moe">Moe</option>
                    <option value="Julliane">Julliane</option>
                </select>
            </form>
            <button onClick={PostDataHandler}>Add Post </button>

        </div>
    );
}
// if i didnt use a form, you will get a Chrome sendrequest error: TypeError: Converting circular structure to JSON
export default NewPost;