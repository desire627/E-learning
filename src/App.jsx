import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import InstructorDashboard from "./pages/InstructorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route element={<ProtectedRoute role="student" />}>
          <Route path="/student" element={<StudentDashboard />} />
        </Route>
        <Route element={<ProtectedRoute role="instructor" />}>
          <Route path="/instructor" element={<InstructorDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
