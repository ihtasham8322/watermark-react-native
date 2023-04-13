import { loginSuccess, logout, setUser } from '..'
import { API_URL } from '../../../config'

export function Login(user) {
  
    return async (dispatch) => {
              console.log("data",JSON.stringify({
                ...user
            }))
        let response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user
            })
        })
    
        let data = await response.json()

        if (data.token) {
            dispatch(setUser(data.user))
            dispatch(loginSuccess(data))
        } else {
            // console.log(data)
        }
    }
}

export function Register(user) {

    return async (dispatch) => {
        let response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...user
            })
        })
    //  console.log(response)
        let data = await response.json()
        if ('message' in data) {
            // console.log(data)
        } else {
            return
        }
    }
}

export function Logout() {
    return (dispatch) => {
        dispatch(logout())
    }
}
