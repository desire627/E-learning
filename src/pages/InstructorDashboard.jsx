import React from "react";
import { FaBell, FaUser, FaSearch, FaBook, FaChartBar, FaPlus } from "react-icons/fa";
import "../styles/InstructorDashboard.css"; 

const InstructorDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside>
        <h2>Instructor Panel</h2>
        <nav>
          <a href="#"><FaBook /> My Courses</a>
          <a href="#"><FaChartBar /> Analytics</a>
          <a href="#"><FaPlus /> Create Course</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <header>
          <h2>Instructor Dashboard</h2>
          <div className="icons">
            <FaSearch />
            <FaBell />
            <FaUser />
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Courses</h3>
            <p>8</p>
          </div>
          <div className="card">
            <h3>Total Students</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Pending Quizzes</h3>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
