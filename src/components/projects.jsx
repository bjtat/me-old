import React, { Component } from "react";

const projectBoxName = "col-md-12 text-center animate-box";

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
                <span className="heading-meta">What have I made?</span>
                <h2>Projects I've worked on</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div
                className={projectBoxName}
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-1">
                  <span className="icon2">
                    <i className="icon-file" />
                  </span>
                  <div className="desc">
                    <h3>Canvasser — Published R Package</h3>
                    <p>
                      Published R package on CRAN with the help of Dr. Bodwin
                      through independent studies. Scrapes data from "Canvas"
                      website for data wrangling on grade books. Allows users to
                      do basic grade calculations to assist with academics.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={projectBoxName}
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-1">
                  <span className="icon2">
                    <i className="icon-starburst-outline" />
                  </span>
                  <div className="desc">
                    <h3>
                      Pythia — Machine Learning Sentiment Analysis Project
                    </h3>
                    <p>
                      {" "}
                      Worked on a team that developed Pythia during SLO Hacks
                      2019 Analysed the sentiment of companies through RSS feed
                      + news APIs Used Google sentiment analysis to determine if
                      a company’s stock worth.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={projectBoxName}
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-1">
                  <span className="icon2">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>
                      One Calorie Workout — DPEA x SF Exploratorium Project
                    </h3>
                    <p>
                      {" "}
                      Create a museum exhibit that would hoist weight up by
                      turning a pulley Total movement required used to move
                      weight up used one Calorie Worked on the motors and
                      sensors programming and electrical board
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
