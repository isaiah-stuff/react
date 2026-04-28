const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function Clicker() {
  const [count, setCount] = React.useState(0);

  function handleChange(event) {
    setCount(event.target.value);
  }

  function resetCount() {
    setCount(0);
  }

  function autoClick() {
    setInterval(() => {});
  }

  return (
    <>
      <div>
        <button>clicked {count} times</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={autoClick}>Auto Click</button>
      </div>
    </>
  );
}

function App() {
  <div>
    <Clicker />
  </div>;
}

root.render(<App />);
