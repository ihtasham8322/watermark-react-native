import {
    SET_POSTS,
    SET_CURRENT_POST,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
} from "../actionTypes";

const initialState = {
    all: null,
    current: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                all: action.payload,
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                current: action.payload,
            };
        case ADD_POST:
            return {
                ...state,
                all: [...state.all, action.payload],
            };
        case UPDATE_POST:
            return {
                ...state,
                all: state.all.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                ),
            };
        case DELETE_POST:
            return {
                ...state,
                all: state.all.filter((post) => post._id !== action.payload),
            };
        default:
            return state;
    }
}

export const selectPosts = (state) => state.root.post.all;
export const selectCurrentPost = (state) => state.root.post.current;