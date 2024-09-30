import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>
        <i class="fa-brands fa-nfc-symbol"></i>WeConnect
      </h2>
      <ul className="navitem">
        <Link to="/">
          <li>
            <i class="fa-solid fa-house"></i>
          </li>
        </Link>

        <li>
          <i class="fa-solid fa-moon"></i>
        </li>
        <Link to="https://github.com/khushi7im/WeConnect">
          <li>
            <i class="fa-brands fa-github"></i>
          </li>
        </Link>
      </ul>
      <div className="profilenav">
        <Link to="/profile/:username">
          <img src="/profile.jpg" alt="profile" className="profileImg" />
        </Link>{" "}
        <div>Khushi Dhiman</div>
      </div>
    </div>
  );
}

export default Navbar;
