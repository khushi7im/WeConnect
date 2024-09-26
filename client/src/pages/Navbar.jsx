import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>
        <i class="fa-brands fa-nfc-symbol"></i>WeConnect
      </h2>
      <ul className="navitem">
        <li>
          <i class="fa-solid fa-house"></i>
        </li>
        <li>
          <i class="fa-solid fa-moon"></i>
        </li>
        <li>
          <i class="fa-brands fa-github"></i>
        </li>
      </ul>
      <div className="profilenav">
        <img src="/profile.jpg" alt="profile" className="profileImg" />
        <div>Khushi Dhiman</div>
      </div>
    </div>
  );
}

export default Navbar;
