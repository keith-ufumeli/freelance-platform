import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/authConstants"

// regsiter user action
export const register_user_Action = ( email, username, password, password2 ) => (dispatch) => {
    dispatch({
        type: REGISTER_USER_REQUEST,
        payload: email, username, password
    })
    axios.post(`${apiUrl}/auth/regsiter`, {
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