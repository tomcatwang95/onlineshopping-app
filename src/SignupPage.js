import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const userData = [
  {
    username: "Jason",
    password: "12345@",
    email: "pengy6@miamioh.edu"
  }
];

function Signup() {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    showPassword: false
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkSignup = () => {
    const usercheck = userData.find(
      (user) =>
        user.username === data.username &&
        user.password === data.password &&
        user.email === data.email
    );
    if (usercheck) {
      alert("Signup successful!");
    }
  };

  const toggleButton = () => {
    setData({ ...data, showPassword: !data.showPassword });
  };

  return (
    <div className="signup">
      <h1>Signup Page</h1>
      <div className="username">
        Name:
        <input
          type="text"
          name="username"
          value={data.username}
          placeholder="username..."
          onChange={changeHandler}
        />
      </div>
      <div>
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
      <div className="email">
        Email:
        <input
          type="text"
          name="email"
          value={data.email}
          placeholder="email..."
          onChange={changeHandler}
        />
      </div>
      <button onClick={checkSignup}>Signup</button>
      <div>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </div>
    </div>
  );
}
export default Signup;
