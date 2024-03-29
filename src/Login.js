import React from "react";
const Login = ({
  email,
  password,
  setEmail,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
  setPassword
}) => {
  return (
    <section className="login">
      <div className="loginContainer">
        <label>username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>sign in</button>
              <p>
                Dont have an account ?
                <span onclick={() => setHasAccount(!hasAccount)}>sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onclick={handleSignup}>sign up</button>
              <p>
                have an account ?
                <span onclick={() => setHasAccount(!hasAccount)}>sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
