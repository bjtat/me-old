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
                Passionate 3rd year Computer Science Major with a love for
                problem solving, coding, and math!
              </h2>
              <p>
                Hello everyone, my name is Brandon and I'm a third year computer
                science major at Cal Poly San Luis Obispo. Some of my areas are
                interest are data science (in particular ML/AI), computer
                security, cryptography, low level programming, and algorithmic
                optimization (speed is good). I am also an avid reader, NBA fan
                (Lakers superfan), and a tennis lover (Nadal all the way). Feel
                free to reach out to me about potential opportunities or just to
                chat with my email listed on the left!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
