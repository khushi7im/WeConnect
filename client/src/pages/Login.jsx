import { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const HandleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log("INPUTS ==", input);

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(input);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="insidewrapper">
        <div className="loginLeft">
          <h1>HELLO WORLD!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
            quam eaque rem ut omnis qunde, corrupti fuga quidem at. Nostrum,
            iste!
          </p>
          <span>Don't have any Account?</span>
          <br />
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="loginRight">
          <form action="" className="inputform">
            <h2 className="h2">Login</h2>

            <label htmlFor="email">Enter Email</label>
            <input type="email" name="email" onChange={HandleInput} required />
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              name="password"
              onChange={HandleInput}
              required
            />

            <button className="button" onClick={HandleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
