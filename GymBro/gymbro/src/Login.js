function Login({ switchToRegister, setSwitchToRegister }) {
  return (
    <div className="login-box">
      <form>
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
