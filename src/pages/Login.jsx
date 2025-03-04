import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show "Logging in..." on the button

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful!");

        // Store token and role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect based on role
        if (data.role === "student") {
          navigate("/student", { replace: true });
        } else if (data.role === "instructor") {
          navigate("/instructor", { replace: true });
        } else {
          console.log("Invalid role detected!");
          navigate("/", { replace: true });
        }
      } else {
        console.error("Login failed:", data.msg);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false); // Reset button state
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <a href="#" className="forgot-password">Forgot Password?</a>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "LOGIN"}
          </button>

          <p className="signup-link">
            Don’t have an account? <a href="#/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
