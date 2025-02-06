import logo from "../../assets/web development.png"
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const links = (
    <>
      <li>
        <a onClick={() => scrollToSection("home")}>Home</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("about")}>About</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("skills")}>Skills</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-10 bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        </div>
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
          {links}
        </ul>
      </div>
      <img className="w-24 h-24 rounded-full object-cover" src={logo} alt="Logo" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{links}</ul>
    </div>
    <div className="navbar-end">
      <a className="btn btn-outline btn-success">Resume</a>
    </div>
  </div>
  );
};

export default Navbar;
