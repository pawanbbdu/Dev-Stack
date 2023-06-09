import React, { useState } from "react";
import app_config from "../../config";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";
import Logo from "../Logo";

const Navbar = () => {
  const { title, themeColor } = app_config;
  const url = app_config.apiUrl;

  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );


  const showAvatar = () => {
    return (
      <li className="nav-item dropdown">
        <NavLink
          className="nav-link"
          to="/user/profile"
          role="button"
          aria-expanded="false"
        >
          <img src={currentUser.avatar?`${url}/${currentUser.avatar}` : 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000'} className="rounded-circle" height={30} />
        </NavLink>
        
      </li>
    );
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: themeColor }}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/main/home">
          <div className="d-flex align-items-center">
            <Logo title={"Dev Stack"} />
          </div>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/user/profile"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/user/search"
              >
                Search Developers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/user/compare"
              >
                Compare Developers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/user/history"
              >
                Saved Reports
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">{showAvatar()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
