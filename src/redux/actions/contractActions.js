import axios from "axios"
import { apiUrl } from "../../utils/apiUrl"
import {
    CREATE_CONTRACTS_FAIL,
    CREATE_CONTRACTS_REQUEST,
    CREATE_CONTRACTS_SUCCESS,
    GET_ALL_USER_CONTRACTS_FAIL,
    GET_ALL_USER_CONTRACTS_REQUEST,
    GET_ALL_USER_CONTRACTS_SUCCESS,
    GET_A_CONTRACT_FAIL,
    GET_A_CONTRACT_REQUEST,
    GET_A_CONTRACT_SUCCESS,
} from "../constants/contractsConstants"

export const create_a_contract = (msg_obj, id, token) => (dispatch) => {
    dispatch({
        type: CREATE_CONTRACTS_REQUEST,
        payload: { msg_obj, id }
    })
    axios.post(`${apiUrl}/contract/create/${id}`, {
        ...msg_obj
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_CONTRACTS_SUCCESS,
            // payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_CONTRACTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })

}

export const get_a_Contract = (id) => (dispatch) => {
    dispatch({
        type: GET_A_CONTRACT_REQUEST,
        payload: { id }
    })
    axios.get(`${apiUrl}/contract/${id}`).then(res => {
        dispatch({
            type: GET_A_CONTRACT_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_A_CONTRACT_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })
}

//GET ALL USER CONTRACTS for notifications
export const get_user_contracts_Action = (token, status) => (dispatch) => {
    dispatch({
        type: GET_ALL_USER_CONTRACTS_REQUEST,
        payload: { token }
    })
    axios.get(`${apiUrl}/contract/user`,{status: 'pending'}, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: GET_ALL_USER_CONTRACTS_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_USER_CONTRACTS_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })

}

//get all user contracts 
export const get_all_user_contracts_Action = (id) => (dispatch) => {}

//react to a contract 
export const react_to_a_contract_Action = (id, status) => (dispatch) => {}