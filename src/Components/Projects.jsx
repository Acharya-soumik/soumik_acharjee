import React from "react";
import GitHubCalander from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import { Spring } from "react-spring/renderprops";

function Projects() {
  return (
    <>
      <section
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-left"
        data-aos-mirror="true"
        data-aos-once="false"
        className="text-center"
        className="text-center project-background"
        id="margin"
      >
        <h2>
          <strong>My Projects</strong>
        </h2>
        <div className="container">
          <div className="row justify-content-center">
            <div class="card my_card col-md-4 p-0" id="my_card">
              <img className="card-img-top" src="./images/gamers.png" />
              <div class="card-body">
                <h5 class="card-title">Gamers Paradise</h5>
                <p class="card-text">Information on most popular games.</p>
                <p>Tech Stack Used:</p>
                <img
                  src="https://cdn.svgporn.com/logos/html-5.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/css-3.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/bootstrap.svg"
                  className="stack_img p-2"
                />
              </div>
              <div className="overlay d-flex">
                <button className="btn btn-outline-light m-auto">
                  View Source
                </button>
                <button className="btn btn-outline-light m-auto">
                  View Demo
                </button>
              </div>
            </div>
            <div class="card my_card col-md-4 p-0" id="my_card">
              <img className="card-img-top" src="./images/comics.png" />
              <div class="card-body">
                <h5 class="card-title">Comics</h5>
                <p class="card-text">A simple comics webpage</p>
                <p>Tech Stack Used:</p>
                <img
                  src="https://cdn.svgporn.com/logos/react.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/redux.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/bootstrap.svg"
                  className="stack_img p-2"
                />
              </div>
              <div className="overlay d-flex">
                <button className="btn btn-outline-light m-auto">
                  View Source
                </button>
                <button className="btn btn-outline-light m-auto">
                  View Demo
                </button>
              </div>
            </div>
            <div className="card my_card col-md-4 p-0" id="my_card">
              <img className="card-img-top" src="./images/meeting.png" />
              <div class="card-body">
                <h5 class="card-title">Book Meeting Rooms</h5>
                <p class="card-text">
                  Create, Manage and search for meeting rooms based on
                  availability.
                </p>
                <p>Tech Stack Used:</p>
                <img
                  src="https://cdn.svgporn.com/logos/react.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/redux.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/bootstrap.svg"
                  className="stack_img p-2"
                />
                <div className="overlay d-flex">
                  <button className="btn btn-outline-light m-auto">
                    View Source
                  </button>
                  <button className="btn btn-outline-light m-auto">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
            <div class="card my_card border col-md-4 p-0" id="my_card">
              <img className="card-img-top" src="./images/movie.png" />
              <div class="card-body">
                <h5 class="card-title">THe Movie Hub</h5>
                <p class="card-text">
                  Finf all the most trending movies and also search for movies.
                </p>
                <p>Tech stack Used:</p>
                <img
                  src="https://cdn.svgporn.com/logos/html-5.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/css-3.svg"
                  className="stack_img p-2"
                />
                <img
                  src="https://cdn.svgporn.com/logos/bootstrap.svg"
                  className="stack_img p-2"
                />
              </div>
              <div className="overlay d-flex">
                <button className="btn btn-outline-light m-auto">
                  View Source
                </button>
                <button className="btn btn-outline-light m-auto">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* section of codeing */}
      </section>
      <div
        data-aos="fade-rigth"
        data-aos-offset="400"
        data-aos-delay="200"
        data-aos-duration="800"
        id="margin"
      >
        <h2 className="text-center">
          <strong>I Have Compelted</strong>
        </h2>
        <div className="d-md-flex col-md-10 col-12 justify-content-between container my-4">
          <div className="text-center">
            <div className="circle  raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">1000+</h2>
            </div>
            <p className="lead">Hours Of Coding</p>
          </div>
          <div className="text-center">
            <div className="circle raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">200+</h2>
            </div>
            <p className="lead">Hackerrank Problems</p>
          </div>
          <div className="text-center">
            <div className="circle raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">300+</h2>
            </div>
            <p className="lead">Git Commits</p>
          </div>
          <div className="text-center">
            <div className="circle raise d-flex align-items-center justify-content-center">
              <h2 className="display-4">12+</h2>
            </div>
            <p className="lead">Projects</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className=" col-12 col-md-12"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <h2 id="margin" className="text-center m-4">
            <strong>Github</strong>
          </h2>
          <div className="calendar">
            <GitHubCalander
              username="Acharya-soumik"
              color="hsl(203, 82%, 33%)"
            >
              >
              <ReactTooltip delayShow={50} html />
            </GitHubCalander>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
