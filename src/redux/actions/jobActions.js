import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { CREATE_JOB_FAIL, CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS, GET_USER_JOBS_FAIL, GET_USER_JOBS_REQUEST, GET_USER_JOBS_SUCCESS } from "../constants/jobConstants"

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

//CREATEA A JIB
export const create_a_job_Action = (msg_obj, token) => (dispatch) => {
    dispatch({
        type: CREATE_JOB_REQUEST,
        payload: msg_obj
    })
    axios.post(`${apiUrl}/job/create`, {
        ...msg_obj
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_JOB_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_JOB_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}