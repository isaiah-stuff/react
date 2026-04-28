const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function FillTextBox({ text, setText }) {
  function handleChange(event) {
    setText(event.target.value);
  }

  function resetText() {
    setText("");
  }

  function exampleText() {
    setText("Alice");
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type a name here"
        />
        <button onClick={resetText}>Reset</button>
        <button onClick={exampleText}>Example</button>
      </div>

      <p>Hello, {text}</p>
    </>
  );
}

function App() {
  const [text, setText] = React.useState("");

  return (
    <>
      <FillTextBox text={text} setText={setText} />
    </>
  );
}

root.render(<App />);
