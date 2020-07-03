import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          ></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{
                  backgroundImage:
                    "url(https://avatars0.githubusercontent.com/u/27231381?s=460&u=a13096a7b5bfb622c9d9ef6db76e8be8545293fd&v=4)",
                }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Brandon Tat</a>
              </h1>
              <span className="gmail">
                <i className="icon-mail5"></i> brandontat6@gmail.com
              </span>
              <br />
              <span className="calpolyEmail">
                <i className="icon-phone-outline"></i> Phone # available upon
                request
              </span>
              <br />
              <span className="phoneNumber">
                <i className="icon-location-outline"></i> Santa Barbara
              </span>
            </div>

            <br />

            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#experience" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://github.com/bjtat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                    {"   Github: bjtat"}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/brandontat/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                    {"   linkedin: brandontat"}
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.instagram.com/brandon.tat/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                    {"   IG: brandon_tat"}
                  </a>
                </li> */}
              </ul>
            </nav>

            <br />

            <div className="colorlib-footer">
              <p>
                <small>
                  Thank you to{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  for HTML template
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
