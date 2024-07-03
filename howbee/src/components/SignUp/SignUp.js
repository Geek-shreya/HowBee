import React, { useState } from 'react';
import './style.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ fullName, email, password, termsAccepted });
  };

  return (
    <div className="App">
      <div className="signup-form">
      <div className="avatar"></div>
        <h2>Sign Up</h2>
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
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <div className="terms">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <span>
              By creating an account you agree to the{' '}
              <a href="/terms">terms of use</a> and our{' '}
              <a href="/privacy">privacy policy</a>.
            </span>
          </div>
          <button type="submit" className="create-account-button">
            Create account
          </button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;