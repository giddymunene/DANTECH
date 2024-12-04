import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Link to="/about">Go to About Us</Link>
    </div>
  );
};

export default Home;