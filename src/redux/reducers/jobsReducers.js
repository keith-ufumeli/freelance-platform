import { GET_USER_JOBS_FAIL, GET_USER_JOBS_REQUEST, GET_USER_JOBS_SUCCESS } from "../constants/jobConstants"

//login user reducer
export const get_user_jobs_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_USER_JOBS_REQUEST:
            return { loading: true }
        case GET_USER_JOBS_SUCCESS:
            return { loading: false, jobs: action.payload }
        case GET_USER_JOBS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}