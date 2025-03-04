import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBell, FaUser, FaSearch, FaBook, FaChartBar, FaPlus } from "react-icons/fa";
import "../styles/InstructorDashboard.css";

const InstructorDashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log("User Role from localStorage:", role);

    if (!role) {
      console.log("No role found, redirecting to login...");
      navigate("/login", { replace: true });
    } else if (role !== "instructor") {
      console.log("Access Denied! Redirecting to home...");
      alert("Access Denied! Only instructors can access this page.");
      navigate("/", { replace: true });
    } else {
      setUserRole(role);
    }
  }, [navigate]);

  if (userRole !== "instructor") return null; // Prevents rendering before role is verified

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="instructor-sidebar">
        <h2 className="sidebar-title">Instructor Panel</h2>
        <nav className="sidebar-nav">
          <Link to="/instructor/courses" className="sidebar-link">
            <FaBook className="sidebar-icon" /> <span>My Courses</span>
          </Link>
          <Link to="/instructor/analytics" className="sidebar-link">
            <FaChartBar className="sidebar-icon" /> <span>Analytics</span>
          </Link>
          <Link to="/instructor/create" className="sidebar-link">
            <FaPlus className="sidebar-icon" /> <span>Create Course</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="navbar">
          <h2 className="navbar-title">Instructor Dashboard</h2>
          <div className="navbar-icons">
            <FaSearch className="nav-icon" />
            <FaBell className="nav-icon" />
            <FaUser className="nav-icon" />
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3 className="card-title">Total Courses</h3>
            <p className="card-number">8</p>
          </div>
          <div className="card">
            <h3 className="card-title">Total Students</h3>
            <p className="card-number">120</p>
          </div>
          <div className="card">
            <h3 className="card-title">Pending Quizzes</h3>
            <p className="card-number">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
