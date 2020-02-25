import React from "react";

function Home() {
  return (
    <section>
      <div className="row container p-4 justify-content-end">
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
          <div className="row container">
            <i className="fab mr-2 fa-linkedin fa-2x"></i>
            <i className="fab mx-2 fa-github fa-2x"></i>
            <i class="fab fa-hackerrank mx-2 fa-2x"></i>
            <button className="btn btn-outline-dark mx-2">Download CV</button>
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
      <hr />
      <h2 className="text-center">Tech Stack</h2>
      <div className="p-4 d-flex flex-wrap container ">
        <img
          src="https://cdn.svgporn.com/logos/html-5.svg"
          className="stack_icon m-auto"
        />

        <img
          src="https://cdn.svgporn.com/logos/github.svg"
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/css-3.svg  "
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/bootstrap.svg"
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/javascript.svg"
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/redux.svg"
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/flask.svg"
          className="stack_icon m-auto"
        />
        <img
          src="https://cdn.svgporn.com/logos/mysql.svg"
          className="stack_icon m-auto"
        />
      </div>
      <hr />
      <div className="text-center ">
        <h2 className="mb-4">
          <strong>My Proficiency</strong>
        </h2>
        <div className="row container m-auto ">
          <div className="col-md-4 ">
            <img src="https://santhisrikh.github.io/images/react.png" />
            <h2>Front End</h2>
            <p className="lead">JavaScript,React-Redux</p>
          </div>
          <div className="col-md-4">
            <img src="https://santhisrikh.github.io/images/back.png" />
            <h2>Back End</h2>
            <p className="lead">Python,Flask, Mysql</p>
          </div>
          <div className="col-md-4">
            <img src="https://santhisrikh.github.io/images/data.png" />
            <h2>Data Structures</h2>
            <p className="lead">Arrays,Stacks and Queues,Algorithms</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
