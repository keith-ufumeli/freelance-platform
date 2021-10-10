import { CREATE_PROPOSAL_FAIL, CREATE_PROPOSAL_REQUEST, CREATE_PROPOSAL_SUCCESS } from '../constants/proposalConstants'
import { apiUrl } from '../../utils/apiUrl'
import axios from 'axios'

// create proposal action
export const create_proposal_Action = (id, token, body, pictures, amount, period, name) => (dispatch) => {
    dispatch({
        type: CREATE_PROPOSAL_REQUEST,
        payload: id
    })
    axios.post(`${apiUrl}/proposal/create/${id}`, {
        body: body,
        pictures: [],
        amount,
        period
    }, {
        headers: {
            Authorization: token
        }
    }).then(res => {
        dispatch({
            type: CREATE_PROPOSAL_SUCCESS,
            payload: res.data
        })
    }).catch(error => {
        dispatch({
            type: CREATE_PROPOSAL_FAIL,
            payload: error.response && error.response.data.error
                ? error.response.data.error
                : error.message,
        })
    })

}