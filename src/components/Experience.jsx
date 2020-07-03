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
                <h2 className="colorlib-heading animate-box">Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
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
                        <p>
                          I had the opportunity to work under some very talented
                          engineers who taught me the ropes of full stack
                          development. Some things that I was exposed to were
                          Ruby on Rails, MongoDB, React.js, Docker, Jira and
                          Github.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
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
                        <p>
                          I assisted students during class where I helped debug
                          code or clarified concepts. I also graded assignments
                          and test weekly along with holding office hours for
                          students to come in for extra help.{" "}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
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
                    data-animate-effect="fadeInLeft"
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
