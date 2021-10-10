import { CLOSE_CHAT, OPEN_CHAT } from "../constants/chatConstants"

export const open_chat_Action = () =>(dispatch) =>{
    dispatch({
        type: OPEN_CHAT
    })
}

export const close_chat_Action = () => (dispatch) =>{
    dispatch({
        type: CLOSE_CHAT
    })
}