import React, { useState } from 'react';
import './assets/css/LoginForm.css';
import logo from './assets/Bp-image.png'; // Adjust the path if needed

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out all fields');
      return;
    }
    // Add your login logic here
    setError('');
  };

  return (
    <div className="loginform-container">
      {/* Image Section */}
      <div className="loginform-image">
        <img src={logo} alt="Book My Partys" />
      </div>

    {/* Login Form Section */}
<div className="login-form-events">
  <h2 className="login-form-header">Signin</h2>
  {error && <p className="error">{error}</p>}
  <form onSubmit={handleSubmit}>
    <div className="form-group-event input-container">
      
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <span className="icon email-icon">&#x2709;</span> {/* Unicode envelope icon */}
    </div>
    <div className="form-group-event input-container">
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <span className="icon password-icon">&#x1f512;</span> {/* Unicode lock icon */}
    </div>
          <div className="form-options">
  <div className="remember-me">
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={() => setRememberMe(!rememberMe)}
    />
    <label>Remember me</label>
  </div>
  <a href="/forgot-password" className="forgot-password">
    Forgot Password?
  </a>
</div>

          <button type="submit" className="loginform-button">Signin Me</button>

          <div className="social-login">
            <button type="button" className="google-button">Login with Google</button>
            <button type="button" className="facebook-button">Login with Facebook</button>
          </div>

          <div className="signup-link">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
