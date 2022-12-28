import { useState, useRef, useEffect } from "react";

function Login({ switchToRegister, setSwitchToRegister }) {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted!");
    console.log(email, password);
    setEmail("");
    setPassword("");
    setSuccess(true);
  }

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <div className="email-box">
          <div className="email-box__label">Email</div>
          <input
            type="email"
            placeholder="your email adress"
            id="email"
            name="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
        </div>
        <div className="password-box">
          <div className="password-box__label">Password</div>
          <input
            type="password"
            placeholder="your password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          ></input>
        </div>
        <div className="login-button-box">
          <button type="submit">Log In</button>
        </div>
      </form>
      <button
        className="register-link"
        onClick={() => setSwitchToRegister(!switchToRegister)}
      >
        Don't have an account? Register here
      </button>
    </div>
  );
}

export default Login;
