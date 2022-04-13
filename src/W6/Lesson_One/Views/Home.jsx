import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home view of our project</p>
      <Link to='/contact'>Ir a Contact</Link>
    </div>
  );
};

export default Home;
