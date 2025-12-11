import {io} from "socket.io-client";

const token = localStorage.getItem("token");

const socket = io("http://localhost:3001",{
    auth : {token},
    transports :  ["websocket"],
    withCredentials : true
});

export default socket