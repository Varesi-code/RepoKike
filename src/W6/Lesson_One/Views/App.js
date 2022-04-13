import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./W6/Lesson_One/Views/Home.jsx";
import About from "./W6/Lesson_One/Views/About.jsx";
import Contact from "./W6/Lesson_One/Views/Contact.jsx";
function App (){
  
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
       </BrowserRouter>
    )
};

export default App;