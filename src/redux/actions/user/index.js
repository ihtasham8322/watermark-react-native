import { updateUser } from "..";
import { API_URL } from '../../../config';

export const setUpdatedUser = (updatedUser, isMultipart = false) => {
    return async (dispatch, getState) => {
        //send to server
        let token = getState().root.auth.accessToken;
        const userId = getState().root.user.user._id;

        let response = await fetch(`${API_URL}/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
                'Accept': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: isMultipart ? updatedUser : JSON.stringify(updatedUser)
        });

        let data = await response.json();
        
        // console.log("fferfer",JSON.stringify(updatedUser))
   
        if (isMultipart) {
         
            //update user in redux store
            //the data is formdata, convert to json
            let _updatedUser = {};
            updatedUser._parts.forEach(function (part) {
                _updatedUser[part[0]] = part[1];
            });
            console.log("API CALL: ", _updatedUser.data)

            dispatch(updateUser(_updatedUser.data));
        } else {
            console.log("api call 2",updatedUser.data)
            dispatch(updateUser(updatedUser));
        }
    }
}
