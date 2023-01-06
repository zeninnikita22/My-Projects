import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

function Login() {
  const emailRef = useRef();
  const navigateLogin = useNavigate();
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

  useEffect(() => {
    if (success) {
      return navigateLogin("/data");
    }
  }, [success]);

  return (
    <div className="wrapper">
      <div className="login-box">
        <div className="login-box__title">Login</div>
        <form className="login-box__form" onSubmit={handleSubmit}>
          <div className="email-box">
            {/* <div className="email-box__label">Email</div> */}
            <input
              type="email"
              placeholder="Your e-mail"
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
            {/* <div className="password-box__label">Password</div> */}
            <input
              type="password"
              placeholder="Your password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            ></input>
          </div>
          <div className="button-box">
            <button className="button-box__button" type="submit">
              Log In
            </button>
          </div>
        </form>
        <div className="link-box">
          <Link to="/signup" className="link-box__register-link">
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
