import React from "react";
import { Link, Router, Switch, Route } from "react-router-dom";
import Home from "../Components/Home";
import Skills from "../Components/Skills";
import Github from "../Components/Github";
import Projects from "../Components/Projects";

function Routes() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link class="navbar-brand" to="/">
          <img
            src="https://image.flaticon.com/icons/svg/2615/2615059.svg"
            className="nav-icon"
          />
          <span>Soumik</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <Link to="/skills" class="nav-item nav-link text-dark" href="#">
              Profeciencies
            </Link>
            <Link class="nav-item nav-link text-dark" to="/projects" href="#">
              Projects
            </Link>
            <Link to="/github" class="nav-item nav-link text-dark">
              Github
            </Link>
          </div>
        </div>
      </nav>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/Girhub" component={Github} />
    </div>
  );
}

export default Routes;
