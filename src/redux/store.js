import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { login_user_Reducer, register_user_Reducer } from "./reducers/authReducers";
import { toggle_chat_Reducer } from "./reducers/chatReducers";
import { create_a_job_Reducer, explore_jobs_Reducer, get_single_job_Reducer, get_user_jobs_Reducer } from "./reducers/jobsReducers";
import { create_proposal_Reducer } from "./reducers/proposalReducers";
import { create_a_service_Reducer, edit_a_service_Reducer, explore_services_Reducer } from "./reducers/serviceReducers";

const initialState = {
  user_login: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
    //this is where all the reducers go
    user_register: register_user_Reducer,
    user_login: login_user_Reducer,

    //for jobs
    user_jobs: get_user_jobs_Reducer,
    create_job: create_a_job_Reducer,
    all_jobs: explore_jobs_Reducer,
    single_job: get_single_job_Reducer,

    //for services
    create_service: create_a_service_Reducer,
    edit_service: edit_a_service_Reducer,
    explore_services: explore_services_Reducer,

    //for proposals
    create_proposal : create_proposal_Reducer,

    // for chat
    toggle_chat : toggle_chat_Reducer
});

const composeForBrowser =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeForBrowser(applyMiddleware(thunk))
);

export default store;
