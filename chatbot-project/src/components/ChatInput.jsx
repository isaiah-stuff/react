import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState(""); // useState hook to manage the state of the input text, returns an array with the current state and a function to update it
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage() {
    if (!inputText.trim()) return; // Prevent sending empty messages

    // Removes the text while waiting for a response
    const currentInputText = inputText;
    const tempBotId = crypto.randomUUID();
    setIsLoading(true); // Set loading state to true while waiting for the response
    setInputText("");

    const newChatMessages = [
      ...chatMessages,
      {
        message: currentInputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ];
    setChatMessages(newChatMessages);

    const loadingMessage = {
      message: "Chatbot is typing...",
      sender: "chatbot",
      id: tempBotId,
      time: dayjs().valueOf(),
    };

    setChatMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await Chatbot.getResponseAsync(currentInputText);

      setChatMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempBotId
            ? { ...msg, message: response, time: dayjs().valueOf() }
            : msg,
        ),
      );
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after receiving the response
    }

    setInputText(""); // Clear the input text after sending the message
  }

  function clearMessages() {
    setChatMessages([]);
  }

  return (
    //fragment to group the input and button without adding an extra div to the DOM
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          }
          if (event.key === "Escape") {
            setInputText("");
          }
        }}
        className="Chat-input"
      />
      <button
        className="Send-Button"
        onClick={sendMessage}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
      <button onClick={clearMessages} className="Clear-Button">
        Clear
      </button>
    </div>
  );
}
