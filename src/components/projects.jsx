import React, { Component } from "react";

const projectBoxName = "col-md-5 text-center animate-box";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-projects" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-10 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What have I made?</span>
                <h2>Projects I've worked on</h2>
              </div>
            </div>
            <div className={projectBoxName} data-animate-effect="fadeInBottom">
              <div className="services color-2 ">
                <span className="icon2">
                  <i className="icon-file" />
                </span>
                <div className="desc">
                  <h3>Collaboration Network — Research Project</h3>
                  <p>
                    Researching equity within the academic field under Dr.
                    Migler and Dr. Wood. Creating a network to model
                    collaboration between STEM academic researchers. Querying
                    mySQL database then creating graph analysis with pandas and
                    NetworkX.
                  </p>
                </div>
              </div>
            </div>

            <div className={projectBoxName} data-animate-effect="fadeInBottom">
              <div className="services color-2">
                <span className="icon2">
                  <i className="icon-file" />
                </span>
                <div className="desc">
                  <h3>All-NBA Classifier — Machine Learning Project</h3>
                  <p>
                    Collaborated with classmates in DATA 301 for the quarter
                    long project. Scraped and cleaned data from online sources
                    with Pandas and Lxml. Trained K Nearest Neighbors and neural
                    network models with Sklearn and Numpy. Achieved a ~95%
                    accuracy using both models on determining if a player is
                    All-NBA.
                  </p>
                </div>
              </div>
            </div>

            <div className={projectBoxName} data-animate-effect="fadeInBottom">
              <div className="services color-2">
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

            <div className={projectBoxName} data-animate-effect="fadeInBottom">
              <div className="services color-2">
                <span className="icon2">
                  <i className="icon-file" />
                </span>
                <div className="desc">
                  <h3>Pythia — ML Sentiment Analysis Project</h3>
                  <p>
                    Collaborated with team to develop Pythia using Python during
                    SLO Hacks '19. Scraped, cleaned, and stored data from RSS
                    feed + news APIs in JSON. Analyzed the sentiment of
                    companies with Google Natural Language API. Allows users to
                    predict how well a company's stocks will perform from the
                    news.
                  </p>
                </div>
              </div>
            </div>

            <div className={projectBoxName} data-animate-effect="fadeInBottom">
              <div className="services color-2">
                <span className="icon2">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>One Calorie Workout — DPEA x SF Exploratorium Project</h3>
                  <p>
                    {" "}
                    Create a museum exhibit that would hoist weight up by
                    turning a pulley Total movement required used to move weight
                    up used one Calorie Worked on the motors and sensors
                    programming and electrical board
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
