import React, { useState } from 'react';
import './style.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="App">
      <div className="login-form">
        <div className="avatar"></div>
        <h2>Log in</h2>
        <div className="social-buttons">
        <button className="google-button">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            Google
          </button>
          <button className="facebook-button">
            <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" />
            Facebook
          </button>
        </div>
        <div className="divider">Or</div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="options">
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </div>
            <a href="/reset-password" className="reset-password">Reset Password?</a>
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="signup-link">
          Don't have an account yet? <a href="/signup">New Account</a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;