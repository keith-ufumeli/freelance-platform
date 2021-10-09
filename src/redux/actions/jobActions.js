import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { GET_USER_JOBS_FAIL, GET_USER_JOBS_REQUEST, GET_USER_JOBS_SUCCESS } from "../constants/jobConstants"

export const get_user_jobs_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_USER_JOBS_REQUEST,
        payload: id
    })
    axios.get(`${apiUrl}/job/user/${id}`).then(res => {
        dispatch({
            type: GET_USER_JOBS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_USER_JOBS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}