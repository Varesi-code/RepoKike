import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <p>
        This group is the apple of the eye of Digital House They are very
        talented people, and promising developers.
      </p>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate(+1)}>Next</button>
      </div>
    </div>
  );
};

export default About;
