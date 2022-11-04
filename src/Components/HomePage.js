import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "./Carousel";
import ImageList from "../Data/ImageData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomePage.css";

function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  let navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setIsLoggedin(location.state.isLoggedIn);
      setCurrentUser(location.state.userName);
    }
  }, [location.state]);
  console.log("isLoggedin", isLoggedin);

  const logoutUser = () => {
    setCurrentUser("");
    setIsLoggedin(false);
    navigate("/");
  };
  return (
    <div className="homepage">
      <Box style={{ maxWidth: "100%" }} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "lightblue" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home Page
            </Typography>
            {/* Search input section */}
            <IconButton size="small" aria-label="search">
              <SearchIcon />
            </IconButton>

            {isLoggedin ? (
              <div className="isLoggedin">
                <div className="isLoggedinDetail">Welcome {currentUser}!</div>
                <div className="isLoggedinDetail" onClick={logoutUser} color="inherit">
                  Logout
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Carousel Section*/}
      {/* <img src={MyImage} alt="car" /> */}
      <Carousel slides={ImageList} />
    </div>
  );
}
export default Home;
