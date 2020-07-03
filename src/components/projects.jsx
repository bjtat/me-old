import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-projects" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Maybe something here?</span>
                <h1>Current and former projects I've worked on</h1>
              </div>
            </div>
            <div className="row row-pt-md">
              <div
                className="col-md-auto text-center animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-1">
                  <span className="icon2">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Thing 1</h3>
                    <p>Paragraph 1</p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-auto text-center animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-2">
                  <span className="icon2">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Thing 1</h3>
                    <p>Paragraph 1</p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-auto text-center animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-3">
                  <span className="icon2">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Thing 1</h3>
                    <p>Paragraph 1</p>
                  </div>
                </div>
              </div>

              <div
                className="col-md-auto text-center animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-2">
                  <span className="icon2">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Thing 1</h3>
                    <p>Paragraph 1</p>
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
