import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Signup.css"; 

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    country: "",
    role: "student", // Default role
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";
    if (!formData.country) newErrors.country = "Please select a country.";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect user based on role
        navigate(data.role === "student" ? "/student" : "/instructor");
      } else {
        setErrors({ server: data.msg || "Signup failed." });
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ server: "Error connecting to the server." });
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        <label>Full Name</label>
        <input type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label>Email</label>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        {errors.dob && <p className="error">{errors.dob}</p>}

        <label>Gender</label>
        <div className="gender-options">
          <label>
            <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
          </label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <label>Country</label>
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select your country</option>
          <option value="Uganda">Uganda</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Rwanda">Rwanda</option>
        </select>
        {errors.country && <p className="error">{errors.country}</p>}

        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>

        <div className="terms">
          <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <label>I accept the terms and conditions</label>
        </div>
        {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}

        {errors.server && <p className="error">{errors.server}</p>} {/* Show server error */}

        <button type="submit" className="signup-button">SUBMIT</button>
      </form>
    </div>
  );
};

export default Signup;
