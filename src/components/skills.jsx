import React, { Component } from "react";

const skillBoxName = "col-md-5 text-center animate-box";
export default class Skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What can I provide?</span>
                <h2>Skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className={skillBoxName}>
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Programming Languages:</h3>
                    <p>Python, C, R, Ruby, Javascript, Java</p>
                  </div>
                </div>
              </div>

              <div className={skillBoxName}>
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Frameworks:</h3>
                    <p>Ruby on Rails, React.JS</p>
                  </div>
                </div>
              </div>

              <div className={skillBoxName}>
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Technologies:</h3>
                    <p>Git, Pivotal Tracker, Jira, Docker, RStudio, CRAN</p>
                  </div>
                </div>
              </div>

              <div className={skillBoxName}>
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>People skills:</h3>
                    <p>
                      Effective communcation, leadership, teaching, time
                      management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
