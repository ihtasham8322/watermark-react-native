import { LOGIN, LOGOUT } from "../actionTypes";

const intialState = {
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
}

export default function (state = intialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                isAuthenticated: true,
            }
        case LOGOUT:
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}

export const checkAuth = state => state.root.auth.isAuthenticated;