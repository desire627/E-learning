import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ role }) => {
  const storedRole = localStorage.getItem("role");

  console.log(`ProtectedRoute: Required Role = ${role}, Stored Role = ${storedRole}`);

  if (storedRole !== role) {
    console.log(" Access Denied! Redirecting...");
    return <Navigate to="/login" replace />;
  }

  console.log("Access Granted!");
  return <Outlet />;
};

export default ProtectedRoute;
