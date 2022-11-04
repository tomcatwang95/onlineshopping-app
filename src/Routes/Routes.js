import React from "react";
import Home from "../Components/HomePage";
import Login from "../Components/LoginSignup/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login isSignup={false} />}></Route>
        <Route path="/signup" element={<Login isSignup={true} />}></Route>
      </Routes>
    </Router>
  );
}
export default ReactRouter;
