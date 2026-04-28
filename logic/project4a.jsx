const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function ToggleButton() {
  const [isButtonOn, setIsButtonOn] = React.useState(false);

  function handleClick() {
    setIsButtonOn(!isButtonOn);
  }

  return isButtonOn ? (
    <button onClick={handleClick} className="button-on">
      ON
    </button>
  ) : (
    <button onClick={handleClick} className="button-off">
      OFF
    </button>
  );
}

function App() {
  return (
    <div className="Container">
      <ToggleButton />
    </div>
  );
}

root.render(<App />);
