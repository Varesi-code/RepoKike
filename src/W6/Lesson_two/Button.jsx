import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  if (pathname === "/") {
    return (
      <div>
        <button onClick={() => navigate("/about")}>Go to About</button>
      </div>
    );
  } else if (pathname === "/about") {
    return (
      <div>
        <button onClick={() => navigate(-1)}>{"<"}</button>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
        <button onClick={() => navigate(+1)}>{">"}</button>
      </div>
    );
  } else if (pathname === "/contact") {
    return (
      <div>
        <button onClick={() => navigate(-1)}>{"<"}</button>
        <button onClick={() => navigate("/blog")}>Go to Blog</button>
        <button onClick={() => navigate(+1)}>{">"}</button>
      </div>
    );
  } else if (pathname === "/blog") {
    return (
      <div>
        <button onClick={() => navigate(-1)}>{"<"}</button>
        <button onClick={() => navigate("/home")}>Go to Home</button>
      </div>
    );
  }
};

export default Button;
