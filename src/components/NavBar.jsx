import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "purple" }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white d-flex align-items-center" to="/dashboard">
          <img
            src={Logo}
            alt="OlaPharme Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          روح
        </Link>

        {/* Links */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/drugs">Drugs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sales">Sales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/reports">Reports</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;