import React, { useState } from "react";

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
    email: ""
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkUser = () => {
    const usercheck = users.find(
      (user) =>
        user.username === data.username && user.password === data.password && user.email === data.email
    );
  };
  return (
    <div className="app">
      <h1>Login Page</h1>
      <div className="input-text">
        Name:
        <input
          type="text"
          value={data.username}
          placeholder="username..."
          onChange={changeHandler}
        />
      </div>
      <div>
        Password:
        <input
          type="text"
          placeholder="password..."
          name="password"
          value={data.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        Email:
        <input
          type="text"
          placeholder="email..."
          name="email"
          value={data.email}
          onChange={changeHandler}
        />
      </div>
      <button onClick={checkUser}>Login</button>
    </div>
  );
}
export default Login;
