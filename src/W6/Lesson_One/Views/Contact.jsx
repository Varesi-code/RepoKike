import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>Address: Palm Street Number 7</p>
      <p>Phone Number: 234664444</p>
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
        <button onClick={() => navigate("/about")}>Go to About</button>
        <button onClick={() => navigate(+1)}>Next</button>
      </div>
    </div>
  );
};

export default Contact;
