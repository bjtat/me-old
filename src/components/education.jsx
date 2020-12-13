import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-education" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My academic background</span>
                <h2>Education</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <h4>Cal Poly San Luis Obispo</h4>
                      <span>
                        {" "}
                        Bachelors of Science in Computer Science
                        <br /> September 2018 - Present
                      </span>
                      <p>
                        Cumulative GPA: 3.6 | Dean's list: Spring 2020, Winter
                        2020, Winter 2019, Fall 2018
                      </p>
                      <p>
                        <b>Relevant Coursework:</b>
                      </p>
                      <ul>
                        <li>CSC 490 - Advanced Algorithms and Applications</li>
                        <li>CSC 445 - Theory of Computation I</li>
                        <li>CPE 357 - Systems Programming</li>
                        <li>CSC 349 - Design and Analysis of Algorithms</li>
                        <li>CSC 348 - Discete Structures</li>
                        <li>CSC 225 - Intro to Computer Organization</li>
                        <li>
                          CPE 203 - Project-Based Object-Oriented Programming
                          and Design
                        </li>
                        <li>CPE 202 - Data Structures</li>
                        <li>CPE 101 - Fundamentals of Computer Science</li>
                        <li>CPE 123 - Introduction to Computing: Security</li>
                        <li>DATA 301 - Introduction to Data Science</li>
                        <li>STAT 312 - Statistical Methods for Engineers</li>
                        <li>STAT 331 - Statistical Computing with R</li>
                        <li>
                          STAT 305 - Introduction to Proability and Simulation
                        </li>
                      </ul>

                      <br />
                      <h4>Dos Pueblos High School</h4>
                      <span>August 2014 - June 2018</span>
                      <p>Overall GPA: 4.7</p>
                      <b>Notable Achievements:</b>
                      <ul>
                        <li>DPEA Events Planning Team Senior Lead</li>
                        <li>DPEA Mechtronics Senior Lead (Hardware Team)</li>
                        <li>Lifetime CSF Member</li>
                        <li>Lifetime National Honors Society Member</li>
                        <li>
                          Santa Barbara Scholarship Foundation Scholarship
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}
