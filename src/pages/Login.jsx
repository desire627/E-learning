import React from "react";
import "../styles/Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
          
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit">LOGIN</button>

          <p className="signup-link">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
