import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const users = [
  {
    username: "Jason",
    password: "12345@",
    email: "pengy6@miamioh.edu",
  },
]; //Mock data

function Login(props) {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    showPassword: false,
  });
  const { isSignup } = props;

  let navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkUser = () => {
    if (!isSignup) {
      const usercheck = users.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );
      if (usercheck) {
        alert("Login success");
        navigate("/", { state: { isLoggedIn: true, userName: data.username } });
      } else {
        alert("Wrong password or username");
      }
    } else {
      const newUser = {
        username: data.username,
        password: data.password,
        email: data.email,
      };
      users.push(newUser);
      navigate("/");
    }
  };

  const toggleButton = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  const checkType = () => {
    if (!isSignup) {
      return (
        <>
          <div>
            Don't have account? <Link to="/Signup">Signup Here</Link>
          </div>
          <span className="psw">
            {"Or go to "}
            <Link to="/">HomePage</Link>
          </span>
        </>
      );
    }
    if (isSignup) {
      return (
        <div>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </div>
      );
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        {isSignup ? <h1>Please Signup Here</h1> : <h1>Please Login Here</h1>}
        <div>
          <label>
            <b>Name: </b>
          </label>
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Enter Username here..."
            onChange={changeHandler}
          />
        </div>
        {isSignup ? (
          <div>
            <label>
              <b>Email:</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email here..."
              name="email"
              value={data.email}
              onChange={changeHandler}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <label>
            <b>Password:</b>
          </label>
          <input
            type={data.showPassword ? "text" : "password"}
            placeholder="Enter Password here..."
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
          <input type="checkbox" onClick={toggleButton} />
          Show Password
        </div>
        <button className="login-btn" onClick={checkUser}>
          {isSignup ? "Signup" : "Login"}
        </button>
      </div>
      <div class="loginContainer" style={{ backgroundColor: "lightgrey" }}>
        {checkType(isSignup)}
      </div>
    </div>
  );
}
export default Login;
