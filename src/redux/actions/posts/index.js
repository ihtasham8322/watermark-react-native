import {
    setPosts,
    addPost,
    updatePost,
    deletePost,
    updateUser
} from '..';

import { API_URL } from '../../../config';

export const getPosts = (userId) => async (dispatch, getState) => {
    try {
        const userId = getState().root.user.user._id;
        const token = getState().root.auth.accessToken;

        let response = await fetch(`${API_URL}/posts/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token
            },
        });
        let data = await response.json();

        dispatch(setPosts(data));
    } catch (err) {
        console.log(err);
    }
};

export const createPost = (post) => async (dispatch, getState) => {
    try {
   
        const { credits, _id: userId } = getState().root.user.user;
       
        const token = getState().root.auth.accessToken;
        // console.log("token",token)
        let response = await fetch(`${API_URL}/posts/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: post
        });
        await response.json();
    
        dispatch(updateUser({
            credits: credits - 1
        }))
        dispatch(getPosts(userId));

    } catch (err) {
        console.log(err);
    }
};