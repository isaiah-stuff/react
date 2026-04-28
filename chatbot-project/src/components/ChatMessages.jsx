import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
      {chatMessages.length === 0 && (
        <p className="welcome">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
    </div>
  );
}

export default ChatMessages;
