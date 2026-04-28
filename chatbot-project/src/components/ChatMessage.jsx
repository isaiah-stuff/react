import RobotProfileImage from "../assets/chatbot.png";
import UserProfileImage from "../assets/rabbit.jpeg";
import dayjs from "dayjs";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-chatbot"
      }
    >
      {sender === "chatbot" && (
        <img
          src={RobotProfileImage}
          className="chat-message-profile"
          alt="Chatbot"
        />
      )}
      <div className="chat-message-text">
        {message}
        {time && (
          <div className="chat-message-time">{dayjs(time).format("h:mma")}</div>
        )}
      </div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          className="chat-message-profile"
          alt="User"
        />
      )}
    </div>
  );
}
