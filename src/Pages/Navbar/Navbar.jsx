import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../assets/web development1.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  // Scroll to section after navigation (when coming from another page)
  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        scrollToSection(scrollTo);
      }, 300);
    }
  }, [location]);

  const links = (
    <>
      <li>
        <button onClick={() => handleNavigation("home")}>Home</button>
      </li>
      <li>
        <button onClick={() => handleNavigation("about")}>About</button>
      </li>
      <li>
        <button onClick={() => handleNavigation("skills")}>Skills</button>
      </li>
      <li>
        <button onClick={() => handleNavigation("projects")}>Projects</button>
      </li>
      <li>
        <button onClick={() => handleNavigation("contact")}>Contact</button>
      </li>
    </>
  );

  return (
    <nav className="navbar sticky top-0 z-20 bg-base-100 shadow-md">
      <div className="navbar-start">
        {/* Mobile Dropdown Menu */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-20 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <img className="w-20 h-20 rounded-full object-cover" src={logo} alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4">{links}</ul>
      </div>

      {/* Resume Button */}
      <div className="navbar-end">
        <a
          href="/resume.pdf" // Replace with your actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline text-primary"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
