import {
    LOGIN, LOGOUT,
    SET_USER, UPDATE_USER,
    SET_POSTS, SET_CURRENT_POST, ADD_POST, UPDATE_POST, DELETE_POST
} from "../actionTypes"

//Auth
export const loginSuccess = ({ token: { accessToken, refreshToken } }) => ({
    type: LOGIN,
    payload: {
        accessToken,
        refreshToken,
    }
})

export const logout = () => {
    return {
        type: LOGOUT
    }
}

//User
export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    // console.log("dwwew",user)
    return {
        type: UPDATE_USER,
        payload: user
    }
}

//posts
export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const setCurrentPost = (post) => {
    return {
        type: SET_CURRENT_POST,
        payload: post
    }
}

export const addPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        payload: postId
    }
}

