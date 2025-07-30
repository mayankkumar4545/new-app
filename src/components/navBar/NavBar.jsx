import { NavLink, Link } from "react-router-dom";
import "./navBar.css";

// A simple SVG logo for consistency
const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 0L32 9.2376L24 13.8564V23.094L16 27.7128L0 18.4752V9.2376L16 0Z"
      fill="url(#logoGradient)"
    />
    <path
      d="M16 14.8205L32 24.0581L24 28.6769L8 19.4393L16 14.8205Z"
      fill="url(#logoGradient)"
    />
    <defs>
      <linearGradient
        id="logoGradient"
        x1="0"
        y1="0"
        x2="32"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#007BFF" />
        <stop offset="1" stopColor="#0056b3" />
      </linearGradient>
    </defs>
  </svg>
);

function NavBar() {
  // This function closes the mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand custom-brand" to="/">
          <Logo />
          <span>EduTech Hub</span>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Nav Links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/courses"
                onClick={handleNavLinkClick}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contactUs"
                onClick={handleNavLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/aboutUs"
                onClick={handleNavLinkClick}
              >
                About Us
              </NavLink>
            </li>
          </ul>

          {/* Right-aligned Action Buttons (visible on mobile menu) */}
          {/*<div className="navbar-nav d-lg-none mt-3">
            <Link
              to="/login"
              className="btn login-btn mb-2"
              onClick={handleNavLinkClick}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="btn signup-btn"
              onClick={handleNavLinkClick}
            >
              Sign Up
            </Link>
          </div>*/}
        </div>

        {/* Right-aligned Action Buttons (visible on desktop) */}
        {/*} <div className="navbar-nav d-none d-lg-flex ms-auto">
          <Link to="/login" className="btn login-btn">
            Log In
          </Link>
          <Link to="/signup" className="btn signup-btn">
            Sign Up
          </Link>
        </div>*/}
      </div>
    </nav>
  );
}

export default NavBar;
