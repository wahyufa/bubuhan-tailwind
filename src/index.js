import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "flowbite";

import "./style.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Blog from "./components/blog";

const App = () => {
  return (
    <html className="dark">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </html>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
