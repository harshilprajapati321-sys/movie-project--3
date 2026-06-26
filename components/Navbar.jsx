
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem("login") === "true";

  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!isLogin) return null;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow"
      style={{
        background: "linear-gradient(90deg, #fff59a, #f2fac4)"
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Movie Library Management
        </Link>

        <div className="d-flex align-items-center gap-3">
          <Link className="btn btn-primary px-3" to="/">
            Popular Movies
          </Link>

          <Link className="btn btn-info px-3" to="/search">
            Search Movies
          </Link>

          <button className="btn btn-danger px-3" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}