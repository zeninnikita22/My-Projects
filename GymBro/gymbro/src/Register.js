import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Register() {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const nameRef = useRef();

  const navigateRegister = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

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
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, confirmPassword]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    setSuccess(true);
  }

  useEffect(() => {
    if (success) {
      return navigateRegister("/data");
    }
  }, [success]);

  return (
    <div className="wrapper">
      <div className="register-box">
        <div className="register-box__title">Register</div>
        <p style={{ display: errMsg ? "block" : "none" }}>{errMsg}</p>
        <form className="register-box__form" onSubmit={handleSubmit}>
          <div className="name-box">
            <div className="name-box__label">Your name</div>
            <input
              type="text"
              // placeholder="type your name here"
              id="name"
              name="name"
              ref={nameRef}
              autoComplete="off"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="email-box">
            <div className="email-box__label">
              <div className="email-box__label-text">Email</div>
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "showvalid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faXmark}
                className={validEmail || !email ? "hide" : "showinvalid"}
              />
            </div>
            <input
              type="email"
              // placeholder="your email adress"
              id="email"
              name="email"
              autoComplete="off"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => setEmailFocus(true)}
              onBlur={(e) => setEmailFocus(false)}
            ></input>
            <p
              id="email-message"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              4 to 24 characters. Must begin with a letter. Letters, numbers,
              underscores, hyphens allowed.
            </p>
          </div>
          <div className="password-box">
            <div className="password-box__label">
              <div className="password-box__label-text">Password</div>
              <FontAwesomeIcon
                icon={faCheck}
                className={validPassword ? "showvalid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faXmark}
                className={
                  validPassword === false && password ? "showinvalid" : "hide"
                }
              />
            </div>
            <input
              type="password"
              // placeholder="your password"
              id="password"
              name="password"
              autoComplete="off"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => setPasswordFocus(true)}
              onBlur={(e) => setPasswordFocus(false)}
            ></input>
            <p
              id="password-message"
              className={
                passwordFocus && !validPassword ? "instructions" : "offscreen"
              }
            >
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters: <span>!</span> <span>@</span>{" "}
              <span>#</span> <span>$</span> <span>%</span>
            </p>
          </div>
          <div className="check-password-box">
            <div className="check-password-box__label">
              <div className="check-password-box__label-text">
                Confirm your password
              </div>
              <FontAwesomeIcon
                icon={faCheck}
                className={
                  validConfirmPassword && confirmPassword ? "showvalid" : "hide"
                }
              />
              <FontAwesomeIcon
                icon={faXmark}
                className={
                  validConfirmPassword === false && confirmPassword
                    ? "showinvalid"
                    : "hide"
                }
              />
            </div>
            <input
              type="password"
              // placeholder="confirm your password"
              id="confirm-password"
              name="confirm-password"
              autoComplete="off"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={(e) => setConfirmPasswordFocus(true)}
              onBlur={(e) => setConfirmPasswordFocus(false)}
            ></input>
            <p
              id="confirmpassword-message"
              className={
                confirmPasswordFocus && !validConfirmPassword
                  ? "instructions"
                  : "offscreen"
              }
            >
              Must match the first password input field.
            </p>
          </div>
          <div className="register-button-box">
            <button
              className="register-button-box__button"
              type="submit"
              disabled={
                !validEmail || !validPassword || !validConfirmPassword
                  ? true
                  : false
              }
            >
              Register
            </button>
          </div>
        </form>
        <div className="link-box">
          <Link to="/login" className="link-box__login-link">
            Already have an account? Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
