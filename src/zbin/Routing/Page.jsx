import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Career from "./Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Page = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
