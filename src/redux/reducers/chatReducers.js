import { CLOSE_CHAT, OPEN_CHAT } from "../constants/chatConstants";

export const toggle_chat_Reducer = (state={chat_state: 'close'}, action) =>{
    switch(action.type){
        case OPEN_CHAT:
            return {chat_state: 'open'}
        case CLOSE_CHAT:
            return {chat_state: 'close'}
        default:
            return state
    }
}