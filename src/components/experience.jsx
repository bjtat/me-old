import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Where have I worked?</span>
                <h2>Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4 ">
                        <i className="icon-data" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          SecureDocs, Inc. <span>June 2020 - present</span>
                          <br />
                          <span>
                            {" "}
                            <b>Software Engineer Intern</b>{" "}
                          </span>
                        </h2>
                        <ul>
                          <li>
                            Worked on developing Virtual Data Room and Contract
                            Management software
                          </li>
                          <li>
                            Resolved bugs and implement new features using
                            Rails, React.JS, and MongoDB
                          </li>
                          <li>
                            Worked on the code-base using Git/Github under
                            guidance of a team of engineers
                          </li>
                          <li>
                            Worked in an environment setup using Kubernetes,
                            Docker, and AWS
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-bulb" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Cal Poly, San Luis Obispo{" "}
                          <span>April 2020 - June 2020</span>
                          <br />
                          <span>
                            {" "}
                            <b>Instructional Student Assistant</b>{" "}
                          </span>
                        </h2>
                        <ul>
                          <li>Assisted students in learning data structures</li>
                          <li>
                            Ensured that students understood the material and
                            complete assignments
                          </li>
                          <li>
                            Graded assignments and gave feedback so students
                            could improve
                          </li>
                          <li>
                            Held weekly drop-in office hours and by appointment
                            for 3-5 hours
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Hollister Elementary School{" "}
                          <span>April 2020 - June 2020</span>
                          <br />
                          <span>
                            {" "}
                            <b>Camp Counselor</b>{" "}
                          </span>
                        </h2>
                        <p>
                          I mentored students K-9 in STEM oriented classes. Some
                          noticeable classes were programming in Scratch and
                          creating Minecraft mods in Javascript.{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
