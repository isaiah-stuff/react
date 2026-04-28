const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="fields"
      />

      <br />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="fields"
      />
      <button type="button" onClick={handleClick}>
        {showPassword ? "hide" : "show"}
      </button>
      <br />

      <button className="login-button" type="submit">
        Login
      </button>
      <button className="sign-up-button">Sign Up</button>
    </form>
  );
}

function ManageTime() {
  const [time, setTime] = React.useState("");
  const timeRef = React.useRef("");

  React.useEffect(() => {
    const timer = setInterval(() => {
      const current = dayjs().format("HH:mm:ss");

      timeRef.current = current;
      setTime(current);

      console.log("run code");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{time}</div>;
}

function App() {
  return (
    <div className="Container">
      <LoginForm />
      <ManageTime />
    </div>
  );
}

root.render(<App />);
