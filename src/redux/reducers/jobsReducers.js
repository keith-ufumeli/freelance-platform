import { CREATE_JOB_FAIL, CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS, GET_USER_JOBS_FAIL, GET_USER_JOBS_REQUEST, GET_USER_JOBS_SUCCESS } from "../constants/jobConstants"

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

//create a job reducer
export const create_a_job_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return { loading: true }
        case CREATE_JOB_SUCCESS:
            return { loading: false, job: action.payload, message: 'Job created!' }
        case CREATE_JOB_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}