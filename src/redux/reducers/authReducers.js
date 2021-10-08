import { REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../constants/authConstants";

//regsiter user reducer
export const register_user_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { loading: true }
        case REGISTER_USER_SUCCESS:
            return { loading: false, message: 'Register Success!' }
        case REGISTER_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}