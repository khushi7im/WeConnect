import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="loginWrapper">
      <div className="insidewrapper">
        <div className="loginRight">
          <form action="" className="inputform">
            <h2 className="h2">Register</h2>
            <br />
            <label htmlFor="email">Enter Username</label>
            <input type="email" name="username" required />
            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" required />
            <label htmlFor="pwd">Enter Password</label>
            <input type="password" name="pwd" required />
            <label htmlFor="pwd">Again password</label>
            <input type="password" name="pwd" required />
            <button className="button">Register</button>
          </form>
        </div>
        <div className="loginLeft">
          <h1>HELLO WORLD!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
            quam eaque rem ut omnis qunde, corrupti fuga quidem at. Nostrum,
            iste!
          </p>
          <span>Already Logged in??</span>
          <br />
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
