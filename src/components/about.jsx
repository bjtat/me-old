import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">
                        Why would you put stuff here
                      </span>{" "}
                      <h2>
                        Passionate 3rd year Computer Science Major with Data
                        Science Minor.
                      </h2>
                      <p>
                        Nice to meet you! I'm currently completing my
                        undergradute studies at Cal Poly with the intent to
                        continue further my education through a master's or PhD.
                        My current computer science interests are full stack
                        development, data science (like ML and AI),
                        cybersecurity, and high performance computing.
                      </p>
                      <h4>
                        Education: Calpoly San Luis Obispo, B.S Computer Science
                        2018-2022
                      </h4>
                      <p>
                        Overall GPA: 3.6 | Dean's list: Spring 2020, Winter
                        2020, Winter 2019, Fall 2018
                      </p>
                      <p>
                        Relevant coursework: Systems Programming, Project-Based
                        Object-Oriented Programming and Design, Data Structures,
                        Fundamentals of Computer Science.
                      </p>
                    </div>
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
