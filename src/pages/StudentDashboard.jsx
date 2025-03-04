import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBell, FaUser, FaSearch, FaBook, FaChartBar, FaCheckCircle } from "react-icons/fa";
import "../styles/StudentDashboard.css";

const StudentDashboard = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    console.log("User Role from localStorage:", role);

    if (!role) {
      console.log("No role found, redirecting to login...");
      navigate("/login", { replace: true });
    } else if (role !== "student") {
      console.log("Access Denied! Redirecting to home...");
      alert("Access Denied! Only students can access this page.");
      navigate("/", { replace: true });
    } else {
      setUserRole(role);
    }
  }, [navigate]);

  if (userRole !== "student") return null; // Prevents rendering before role is verified

  return (
    <div className="student-dashboard-container">
      {/* Sidebar */}
      <aside className="student-sidebar">
        <h2 className="sidebar-title">Student Panel</h2>
        <nav className="sidebar-nav">
          <Link to="/courses" className="sidebar-link">
            <FaBook className="sidebar-icon" /> <span>My Courses</span>
          </Link>
          <Link to="/progress" className="sidebar-link">
            <FaChartBar className="sidebar-icon" /> <span>Progress</span>
          </Link>
          <Link to="/completed" className="sidebar-link">
            <FaCheckCircle className="sidebar-icon" /> <span>Completed</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="student-main-content">
        <header className="student-navbar">
          <h2 className="navbar-title">Student Dashboard</h2>
          <div className="navbar-icons">
            <FaSearch className="nav-icon" />
            <FaBell className="nav-icon" />
            <FaUser className="nav-icon" />
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="student-dashboard-cards">
          <div className="student-card">
            <h3 className="card-title">Enrolled Courses</h3>
            <p className="card-number">5</p>
          </div>
          <div className="student-card">
            <h3 className="card-title">Completed Lessons</h3>
            <p className="card-number">20</p>
          </div>
          <div className="student-card">
            <h3 className="card-title">Pending Quizzes</h3>
            <p className="card-number">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
