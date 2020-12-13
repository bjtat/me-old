import React, { Component } from "react";

// const skillBoxName = "col-md-5 text-center animate-box";
const skillBarName = "col-md-5 animate-box fadeInLeft animated";
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
              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>Python</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span> 90% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>R</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span> 90% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>C</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span> 90% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>Java</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span> 90% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>Javascript</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span> 90% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>C++</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    >
                      <span> 90% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>Ruby</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    >
                      <span> 80% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInBottom">
                <div className="progress-wrap">
                  <h3>Bash</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    >
                      <span> 80% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta"></span>
                <h2>Technologies</h2>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Numpy</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>Pandas</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Scikit-learn</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>Tidyverse</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Google Colab</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>Linux (Ubuntu 18.08/20.08 LTS)</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Git/Github</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>React.JS</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>MongoDB</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>Ruby on Rails</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>Docker</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInLeft">
                <div className="progress-wrap">
                  <h3>Kubernetes</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={skillBarName} data-animate-effect="fadeInRight">
                <div className="progress-wrap">
                  <h3>SQL Workbench</h3>
                  <div className="progress">
                    <div
                      class="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "60%" }}
                    >
                      <span> 60% </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* </div>
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
            </div> */}
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}
