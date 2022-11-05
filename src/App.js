import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Links/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
const App = () => {


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
