import { useEffect, useState } from "react";
import socket from "../../socket";

import React from 'react'

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState(""); 
  
    useEffect(() => {
      socket.on("chat message", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });
  
      return () => socket.off("chat message");
    }, []);
  
    const handleSend = () => {
      if (text.trim() === "") return;
  
      const newMessage = {
        user: { role: "کاربر" }, 
        text: text.trim(),
      };
  
      socket.emit("chat message", newMessage); 
      setMessages((prev) => [...prev, newMessage]); 
      setText("");
    };
  
    return (
      <div className="p-4 space-y-4" style={{direction: "rtl"}}>
        <h2>👋 چت آنلاین</h2>
  
        <div className="space-y-2">
          {messages.map((m, i) => (
            <p key={i}>
              <strong>{m.user?.role}:</strong> {m.text}
            </p>
          ))}
        </div>
  
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="پیام بنویس..."
            className="flex-1 px-3 py-2 border rounded"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-dark-purple text-white rounded"
          >
            ارسال
          </button>
        </div>
      </div>
    );
  }