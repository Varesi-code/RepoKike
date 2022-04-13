import React from "react";
import Nav from "../W6/Lesson_two/NavigationBar/Nav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default MainLayout;
