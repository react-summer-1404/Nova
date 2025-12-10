import { useEffect, useState } from "react";
import socket from "../../socket";

import React from 'react'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    useEffect(() => {
        socket.on("chat message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });
        return () => {
            socket.off("chat message");
        };
    }, []);
    const sendMessage = () => {
        if(text.trim()){
            socket.emit("chat message", text);
            setText("");
        }
    };
    return(
        <div>
            <h2>چت</h2>
            <div>
                {messages.map((m, i) => (
                    <p key={i}><strong>{m.user?.role}:</strong>{m.text}</p>
                ))}
            </div>
            <input 
                value={text}
                onChange={(e) => (e.target.value)}
                placeholder="... پیام بنویس"
            />
            <button onClick={sendMessage}> ارسال</button>
        </div>
    );
};

export default Chat

