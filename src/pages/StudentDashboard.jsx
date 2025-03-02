import React from "react";
import { FaBell, FaUser, FaSearch, FaBook, FaChartBar, FaCheckCircle } from "react-icons/fa";
import "../styles/StudentDashboard.css"; // Import CSS file

const StudentDashboard = () => {
  return (
    <div className="student-dashboard-container">
      {/* Sidebar */}
      <aside className="student-sidebar">
        <h2 className="sidebar-title">Student Panel</h2>
        <nav className="sidebar-nav">
          <a href="#" className="sidebar-link">
            <FaBook className="sidebar-icon" /> <span>My Courses</span>
          </a>
          <a href="#" className="sidebar-link">
            <FaChartBar className="sidebar-icon" /> <span>Progress</span>
          </a>
          <a href="#" className="sidebar-link">
            <FaCheckCircle className="sidebar-icon" /> <span>Completed</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="student-main-content">
        {/* Navbar */}
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
