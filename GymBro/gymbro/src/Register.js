import { useState, useRef, useEffect } from "react";

function Register({ switchToRegister, setSwitchToRegister }) {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPassworld, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPassworld);
  }, [password, matchPassworld]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, matchPassworld]);

  return (
    <div className="register-box">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
        {errMsg}
      </p>
      <form>
        <div className="name-box">
          <div className="name-box__label">Your name</div>
          <input
            type="text"
            placeholder="type your name here"
            id="name"
            name="name"
            ref={nameRef}
            autoComplete="off"
            value={name}
            required
          ></input>
        </div>
        <div className="email-box">
          <div className="email-box__label">Email</div>
          <input
            type="email"
            placeholder="your email adress"
            id="email"
            name="email"
          ></input>
        </div>
        <div className="password-box">
          <div className="password-box__label">Password</div>
          <input
            type="password"
            placeholder="your password"
            id="password"
            name="password"
          ></input>
        </div>
        <div className="check-password-box">
          <div className="check-password-box__label">Confirm your password</div>
          <input
            type="password"
            placeholder="confirm your password"
            id="confirm-password"
            name="confirm-password"
          ></input>
        </div>
        <div className="register-button-box">
          <button type="submit">Register</button>
        </div>
      </form>
      <button
        className="login-link"
        onClick={() => setSwitchToRegister(!switchToRegister)}
      >
        Already have an account? Log in here
      </button>
    </div>
  );
}

export default Register;
