import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#hero">
            {/* If you have a logo image, use <img> */}
            {/* <img src="/logo.png" alt="Mahitha Logo" /> */}

            {/* Text logo alternative */}
            <span className="logo-text">Mahitha.</span>
          </a>
        </div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#tech">Tech Stack</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;