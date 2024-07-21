import React from "react";
import { Link, useLocation } from "react-router-dom"; // Assuming you are using React Router for routing
import {Music} from "./Music";

export const Header = () => {
  const location = useLocation(); // Get the current route location

  return (
    <nav
      className="navbar navbar-expand-lg border"
      style={{ backgroundColor: "rgba(52, 51, 51, 0.5)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Jayesh.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Smooth-Selections🎷
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/havefun">
                    Have fun🎮
                  </a>
                </li>
                <li>
                  <a className="dropdown-item disabled" href="#">
                    Updating... 😵
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/currentlyplaying">
                    Currently Playing...
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Nav Goals 🌟
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Music />
    </nav>
  );
};
