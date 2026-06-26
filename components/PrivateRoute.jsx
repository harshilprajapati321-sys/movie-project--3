


import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("login") === "true";

  return isLogin ? children : <Navigate to="/login" replace />;
}