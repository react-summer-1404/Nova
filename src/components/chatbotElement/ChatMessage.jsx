import React from "react";

const ChatMessage = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`p-2 rounded-md my-1 max-w-[70%]  
        ${isUser
          ? "bg-Electric-Blue self-end text-right"
          : "bg-gray-300 self-start text-left"
        }`}
    >
      {text}
    </div>
  );
};

export default ChatMessage;
