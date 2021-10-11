import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { CREATE_SERVICE_FAIL, CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS, EDIT_SERVICE_FAIL, EDIT_SERVICE_REQUEST, EDIT_SERVICE_SUCCESS, EXPLORE_SERVICES_FAIL, EXPLORE_SERVICES_REQUEST, EXPLORE_SERVICES_SUCCESS } from "../constants/serviceConstants"

//create a service action
export const create_a_service_Action = (body_obj, token) => (dispatch) => {
    dispatch({
        type: CREATE_SERVICE_REQUEST,
        payload: { ...body_obj, token }
    })
    axios.post(`${apiUrl}/service/add`, {
        ...body_obj
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_SERVICE_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_SERVICE_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//EDIT SERVICE
export const edit_a_service_Action = (body_obj, id, token) => (dispatch) => {
    dispatch({
        type: EDIT_SERVICE_REQUEST,
        payload: { ...body_obj, id }
    })
    axios.patch(`${apiUrl}/service/edit/${id}`, {
        ...body_obj
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: EDIT_SERVICE_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: EDIT_SERVICE_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//EDIT SERVICE
export const explore_serviceS_Action = (query) => (dispatch) => {
    dispatch({
        type: EXPLORE_SERVICES_REQUEST,
        payload: query
    })
    axios.post(`${apiUrl}/service/all`, {
        search: query
    }).then(res => {
        dispatch({
            type: EXPLORE_SERVICES_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: EXPLORE_SERVICES_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}