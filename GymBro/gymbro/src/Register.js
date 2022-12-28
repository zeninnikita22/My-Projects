import { useState, useRef, useEffect } from "react";

function Register({ switchToRegister, setSwitchToRegister }) {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const nameRef = useRef();

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

  return (
    <div className="register-box">
      <p style={{ display: errMsg ? "block" : "none" }}>{errMsg}</p>
      <form onSubmit={handleSubmit}>
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
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="email-box">
          <div className="email-box__label">Email</div>
          <p className={validEmail ? "showvalid" : "hide"}>Email is valid!</p>
          <p className={validEmail === false && email ? "showinvalid" : "hide"}>
            Email is invalid!
          </p>

          {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
          <input
            type="email"
            placeholder="your email adress"
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
              emailFocus && email && !validEmail ? "instructions" : "offscreen"
            }
          >
            4 to 24 characters.
            <br />
            Must begin with a letter.
            <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <div className="password-box">
          <div className="password-box__label">Password</div>
          <p className={validPassword ? "showvalid" : "hide"}>
            Password is valid!
          </p>
          <p
            className={
              validPassword === false && password ? "showinvalid" : "hide"
            }
          >
            Password is invalid!
          </p>
          {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
          <input
            type="password"
            placeholder="your password"
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
            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters: <span>!</span> <span>@</span>{" "}
            <span>#</span> <span>$</span> <span>%</span>
          </p>
        </div>
        <div className="check-password-box">
          <div className="check-password-box__label">Confirm your password</div>
          <p
            className={
              validConfirmPassword && confirmPassword ? "showvalid" : "hide"
            }
          >
            Confirm password mathces!
          </p>
          <p
            className={
              validConfirmPassword === false && confirmPassword
                ? "showinvalid"
                : "hide"
            }
          >
            Confirm password doesnt match!
          </p>
          <input
            type="password"
            placeholder="confirm your password"
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
            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
            Must match the first password input field.
          </p>
        </div>
        <div className="register-button-box">
          <button
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
