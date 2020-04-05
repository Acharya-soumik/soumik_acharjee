import React from "react";
import { Redirect, Link } from "react-router-dom";

function Home() {
  return (
    <section id="margin">
      <div className="row container justify-content-end">
        <div className="col-md-5 ml-4">
          <h2>Hello, I'M SOUMIK ACHARJEE</h2>
          <h1>Full Stack Developer</h1>
          <p>
            A passionate aspiring Full Stack Developer skilled in MERN stack,
            moulded and shaped by Masai School's numerous training. Actively
            ready to join in a great lively team of a good start-up to adapt me
            in any situation and environment with ease and perform the best.
          </p>
          <hr />
          <div className="row">
            <a
              target="_none"
              href="https://www.linkedin.com/in/soumik-a-4942b9a3/"
            >
              <i className="fab mr-2 fa-linkedin fa-2x"></i>
            </a>
            <a target="_none" href="https://github.com/Acharya-soumik">
              <i className="fab mx-2 fa-github fa-2x"></i>
            </a>
            <a
              target="_none"
              href="https://www.hackerrank.com/acharjee266?hr_r=1"
            >
              <i class="fab fa-hackerrank mx-2 fa-2x"></i>
            </a>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/open?id=10ZAXDnk-Ca6ssz8R6k71sZQDKihvAt9c"
                )
              }
              className="btn btn-outline-dark mx-2"
            >
              Resume
            </button>
          </div>
          <p className="mt-4">
            Banglore, India <b> +91 8910373618 </b>
            ||<b> acharjee266@gmail.com </b>
          </p>
        </div>
        <div className="col-md-5">
          <div className="display_div ml-auto">
            <img src="/port.jpg" className="display_img" />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-left"
        data-aos-mirror="true"
        data-aos-once="false"
        className="container"
      >
        <h2 className="text-center">
          <strong>Tech Stack</strong>
        </h2>
        <div className="p-4 d-flex flex-wrap container ">
          <img
            src="https://cdn.svgporn.com/logos/html-5.svg"
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/github.svg"
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/css-3.svg  "
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/bootstrap.svg"
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/javascript.svg"
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/react.svg"
            className="stack_icon m-auto"
          />
          <img
            src="https://cdn.svgporn.com/logos/redux.svg"
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/flask.svg"
            className="stack_icon m-auto raise"
          />
          <img
            src="https://cdn.svgporn.com/logos/mysql.svg"
            className="stack_icon m-auto raise"
          />
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-left"
        data-aos-mirror="true"
        data-aos-once="false"
        className="text-center"
      >
        <h2 id="margin" className="mb-4">
          <strong>My Proficiency</strong>
        </h2>
        <div className="row container m-auto ">
          <div className="col-md-4 ">
            <img
              className="raise"
              src="https://santhisrikh.github.io/images/react.png"
            />
            <h2>Front End</h2>
            <p className="lead">JavaScript,React-Redux</p>
          </div>
          <div className="col-md-4">
            <img
              className="raise"
              src="https://santhisrikh.github.io/images/back.png"
            />
            <h2>Back End</h2>
            <p className="lead">Python,Flask, Mysql</p>
          </div>
          <div className="col-md-4">
            <img
              className="raise"
              src="https://santhisrikh.github.io/images/data.png"
            />
            <h2>Data Structures</h2>
            <p className="lead">Arrays,Stacks and Queues,Algorithms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
