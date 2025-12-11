import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });
  
    socket.on("chat message", (msg) => {
      console.log("Received message:", msg);
      setMessages((prev) => [...prev, msg]);
    });
  
    return () => socket.off("chat message"); 
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const message = {
      user: { role: "کاربر" }, 
      text: input,
      time: new Date().toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" }),
    };

    socket.emit("chat message", message);
    setInput("");
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}>
      <h2> چت یوزر</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          height: "300px",
          overflowY: "auto",
          marginBottom: "1rem",
          background: "#f9f9f9",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "0.5rem" }}>
            <strong>{msg.user?.role || "ناشناس"}</strong> ({msg.time}): {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          style={{ width: "80%", padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Chat;