import axios from "axios";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/messages")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching messages:", err));
  }, []);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      console.log("Received message:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message")
    };
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const message = {
      user: { role: "کاربر" },   
      text: input,
      time: new Date().toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    socket.emit("chat message", message);
    setInput("");
  };

  return (
    <div className="flex flex-col overflow-hidden h-screen bg-[url('../../../public/telegram.jpg')] bg-cover bg-center" style={{direction: "rtl"}}>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[70%] px-4 py-3 rounded-xl shadow ${
              msg.user?.role === "کاربر"
                ? "bg-green-100 self-end text-right"
                : "bg-white self-start text-left"
            }`}
          >
            <div className="text-sm text-gray-600 mb-1">
              <strong>{msg.user?.role || "ناشناس"}</strong> • {msg.time}
            </div>
            <div className="text-base">{msg.text}</div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="flex p-4 gap-2 bg-white shadow"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          className="flex-1 border border-dark-purple rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 " 
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-dark-purple text-white rounded-lg hover:bg-blue-600 transition"
        >
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Chat;