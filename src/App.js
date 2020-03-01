import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Routes from "../src/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../src/Components/Home";
import Projects from "./Components/Projects";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <Router>
      <Home />
      <Projects />
    </Router>
  );
}

export default App;
