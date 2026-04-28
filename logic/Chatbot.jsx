const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState(""); // useState hook to manage the state of the input text, returns an array with the current state and a function to update it
  const [isLoading, setIsLoading] = React.useState(false);

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
      },
    ];
    setChatMessages(newChatMessages);

    const loadingMessage = {
      message: "Chatbot is typing...",
      sender: "chatbot",
      id: tempBotId,
    };

    setChatMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await Chatbot.getResponseAsync(currentInputText);

      setChatMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempBotId ? { ...msg, message: response } : msg,
        ),
      );
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    } finally {
      setIsLoading(false); // Set loading state back to false after receiving the response
    }

    setInputText(""); // Clear the input text after sending the message
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
        className="Send-button"
        onClick={sendMessage}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  // destructuring props to extract message and sender
  // const message = props.message;
  // const {message, sender} = props;

  const imageSrc = `/images/${sender
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")}`;
  // && is a short-circuit operator that only renders the image if the condition is true
  // way to use if statements in JSX without using ternary operators
  return (
    <div
      className={
        sender === "user" ? "chat-message-user" : "chat-message-chatbot"
      }
    >
      {sender === "chatbot" && (
        <img
          src={`${imageSrc}.png`}
          className="chat-message-profile"
          alt="Chatbot"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          src={`${imageSrc}.png`}
          className="chat-message-profile"
          alt="User"
        />
      )}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
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
            key={`${chatMessage.id}`}
          />
        );
      })}
      {ChatMessages.length === 0 || (
        <p className="welcome">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = React.useState([]);
  //const [chatMessages, setChatMessages] = arr; // destructuring the array returned by useState to get the state variable and the function to update it
  // const chatMessages = arr[0];
  // const setChatMessages = arr[1]; // setChatMessages function to update the state of chatMessages

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

root.render(<App />);
