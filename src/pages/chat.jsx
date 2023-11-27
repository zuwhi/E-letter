import React from "react";
import Chatbot from "../layouts/chatbot";


function Chat() {
  return (
    <div className="Chat">
      <header className="Chat-header">
        <h1 className="text-3xl font-bold mb-4">OpenAI Chatbot</h1>
        <Chatbot />
      </header>
    </div>
  );
}

export default Chat;
