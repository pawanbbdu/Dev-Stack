import React from 'react'
import { NavLink } from 'react-router-dom'
import app_config from '../../config'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: app_config.themeColor }}>
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      <NavLink className="navbar-brand me-2" to="/main/home">
        <Logo  title={'Dev Stack'} />
      </NavLink>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/contact">
              Contact
            </NavLink>
          </li>
          
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
          <NavLink to="/main/Login" className="btn btn-link px-3 me-2">
            Login
          </NavLink>
          <NavLink to="/main/signup" className="btn btn-primary me-3">
            Sign up for free
          </NavLink>
          <a
            className="btn btn-dark px-3"
            href="#"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Navbar