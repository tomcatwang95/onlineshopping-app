import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Login.css";

const users = [
  {
    username: "Jason",
    password: "12345@",
    email: "pengy6@miamioh.edu"
  }
];

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    showPassword: false
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkUser = () => {
    const usercheck = users.find(
      (user) =>
        user.username === data.username &&
        user.password === data.password &&
        user.email === data.email
    );
    if (usercheck) {
      alert("Login success");
    } else {
      alert("Wrong password or username");
    }
  };

  const toggleButton = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <div className="name-input">
        Name:
        <input
          type="text"
          name="username"
          value={data.username}
          placeholder="username..."
          onChange={changeHandler}
        />
      </div>
      <div className="password-input">
        Password:
        <input
          type={data.showPassword ? "text" : "password"}
          placeholder="password..."
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
        <button className="btn" onClick={toggleButton}>
          {data.showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      </div>
      <div className="email-input">
        Email:
        <input
          type="text"
          placeholder="email..."
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
      </div>
      <button
        style={{ backgroundColor: "lightblue", borderRadius: 10 }}
        onClick={checkUser}
      >
        Login
      </button>
      <div>
        <span>
          Don't have account? <Link to="/Signup">Signup</Link>
        </span>{" "}
        <span>
          <Link to="/">Home</Link>
        </span>
      </div>
    </div>
  );
}
export default Login;
