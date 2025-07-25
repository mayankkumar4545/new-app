import { Link } from "react-router-dom";
import "./navBar.css";

function NavBar() {
  const handleNavLinkClick = () => {
    const collapseElement = document.getElementById("navbarNav");
    if (collapseElement.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand custom-brand" to="/">
          My App
        </Link>
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
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-center">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/home"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/courses"
                onClick={handleNavLinkClick}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contactUs"
                onClick={handleNavLinkClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/aboutUs"
                onClick={handleNavLinkClick}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
