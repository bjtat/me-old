import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="about">
        <br />
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Who am I?</span>{" "}
              <h2>
                Passionate 3rd year Computer Science Major with Data Science
                Minor.
              </h2>
              <p>
                Nice to meet you! I'm currently completing my undergraduate
                studies at Cal Poly with the intent to continue further my
                education through a master's or PhD. My current computer science
                interests are full stack development, data science (like ML and
                AI), cybersecurity, and high performance computing.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
