import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const HandleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log("INPUTS ==", input);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", input);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="insidewrapper">
        <div className="loginRight">
          <form action="" className="inputform">
            <h2 className="h2">Register</h2>
            <br />
            <label htmlFor="username">Enter Username</label>
            <input
              type="text"
              name="username"
              onChange={HandleInput}
              required
            />
            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" onChange={HandleInput} required />
            <label htmlFor="name">Enter Full Name</label>
            <input type="text" name="name" onChange={HandleInput} required />
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              name="password"
              onChange={HandleInput}
              required
            />

            <button className="button" onClick={HandleSubmit}>
              Register
            </button>
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
