import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import { CREATE_SERVICE_FAIL, CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS } from "../constants/serviceConstants"

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