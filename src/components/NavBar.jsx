import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "purple" }}>
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-white d-flex align-items-center" href="#">
          <img
            src="/logo.png"   // ضع صورة شعارك داخل public/logo.png
            alt="OlaPharme Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          OlaPharme
        </a>

        {/* Links */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/drugs">Drugs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/sales">Sales</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/reports">Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;