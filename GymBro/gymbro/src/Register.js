function Register({ switchToRegister, setSwitchToRegister }) {
  return (
    <div className="register-box">
      <form>
        <div className="name-box">
          <div className="name-box__label">Your name</div>
          <input
            type="text"
            placeholder="type your name here"
            id="name"
            name="name"
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
