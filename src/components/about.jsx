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
                      </span>
                      <h1>About Me</h1>
                      <h2>
                        Passionate Third year Computer Science Major with a Data
                        Science Minor.
                      </h2>
                      <h3>
                        I'm looking to make an impact and expand my skills.{" "}
                        <br />
                        Every opportunity is an opportunity to learn. <br />
                        Perseverance trumps talent.{" "}
                      </h3>
                      <p>
                        Hello, welcome to my website. I am currently a third
                        year computer science major at Cal Poly San Luis Obispo.
                        I'm looking to learn frontend development through
                        React.js along with data analysis through the use of
                        Python and R.
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
