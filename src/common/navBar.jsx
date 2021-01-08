import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/customers"> Customer </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/movies"> Movies </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/login"> Login </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/register"> Register </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/post"> Posts </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/employees"> Employee </NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink className="nav-link" to="/snap"> Snapshot </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
