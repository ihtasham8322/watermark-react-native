import { SET_USER, UPDATE_USER } from "../actionTypes";

const intialState = {
    user: {},
}

export default function (state = intialState, action) {
    switch (action.type) {
        case SET_USER:
        return {
                ...state,
                user: action.payload,
            }
        case UPDATE_USER:
            console.log("************************************************************************")
           console.log("STATE: ", state.user)
            console.log("************************************************************************")
           console.log("ACTION: ", action.payload)
           const d = {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
            console.log("************************************************************************")
            console.log("DATA: ", d)
            return d
        default:
            return state;
    }
}

export const selectUser = state => state.root.user;