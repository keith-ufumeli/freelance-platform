import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/authConstants"

// regsiter user action
export const register_user_Action = (email, username, password, password2) => (dispatch) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
        payload: email, username, password
    })
    axios.post(`${apiUrl}/auth/register`, {
        email: email,
        username: username,
        password: password,
        password2: password2
    }).then(res => {
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//LOGIN USER ACYION
export const login_user_Action = (email, password) => (dispatch) => {
    dispatch({
        type: LOGIN_USER_REQUEST,
        payload: email, password
    })
    axios.post(`${apiUrl}/auth/login`, {
        email: email,
        password: password,
    }).then(res => {
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}