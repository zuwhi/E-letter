// src/Chatbot.js
import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, user: "user" }]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          prompt: input,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const botMessage = response.data.choices[0].text.trim();
      setMessages([...messages, { text: botMessage, user: "bot" }]);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border rounded">
      <div className="h-64 overflow-y-scroll border mb-4 p-2">
        {messages.map((message, index) => (
          <div key={index} className={`text-${message.user === "user" ? "right" : "left"}`}>
            <strong>{message.user === "user" ? "You" : "Bot"}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input type="text" className="flex-1 border p-2 mr-2" placeholder="Type your message..." value={input} onChange={handleInputChange} />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
