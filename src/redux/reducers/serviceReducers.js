import { CREATE_SERVICE_FAIL, CREATE_SERVICE_REQUEST, CREATE_SERVICE_SUCCESS, EDIT_SERVICE_FAIL, EDIT_SERVICE_REQUEST, EDIT_SERVICE_SUCCESS } from "../constants/serviceConstants"

//create a service reducer
export const create_a_service_Reducer = (state = { create_loading: false }, action) => {
    switch (action.type) {
        case CREATE_SERVICE_REQUEST:
            return { create_loading: true }
        case CREATE_SERVICE_SUCCESS:
            return { create_loading: false, service: action.payload, create_message: 'Service created!' }
        case CREATE_SERVICE_FAIL:
            return { create_loading: false, create_error: action.payload }
        default:
            return state
    }
}

//edit a service reducer
export const edit_a_service_Reducer = (state = { edit_loading: false }, action) => {
    switch (action.type) {
        case EDIT_SERVICE_REQUEST:
            return { edit_loading: true }
        case EDIT_SERVICE_SUCCESS:
            return { edit_loading: false, service: action.payload, edit_message: 'Service Edited!' }
        case EDIT_SERVICE_FAIL:
            return { edit_loading: false, edit_error: action.payload }
        default:
            return state
    }
}