import { DB } from "../Database/DB_connect.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = (req, res) => {
  // Get input from user
  // hash the password
  // check if user already exists

  const q = "SELECT * FROM social WHERE username = ?";

  DB.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("USER ALREADY EXISTS !!!");

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(req.body.password, salt);

    const q1 =
      "INSERT INTO social (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashPassword,
      req.body.name,
    ];
    DB.query(q1, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("USER CREATED SUCCESSFULLY --");
    });
  });
};

export const Login = (req, res) => {
  const q = "SELECT * from social WHERE email = ?";

  DB.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("USER NOT FOUND");

    const checkPassword = bcryptjs.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("Wrong Password or username!");

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const Logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logged out !!!");
};
