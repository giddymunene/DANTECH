import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>Learn more about our services and mission.</p>
      <Link to="/tools">Go to Tools</Link>
    </div>
  );
};

export default About;