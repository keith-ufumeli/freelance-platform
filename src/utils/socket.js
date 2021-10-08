import io from "socket.io-client";
import { socketUrl } from "../helpers/apiUrl";

export const socket = io(socketUrl, {
    transports: ['websocket'],
    forceNew: true,
});