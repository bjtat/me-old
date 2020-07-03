import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import About from "./components/about";
import Experience from "./components/Experience";
import Projects from "./components/projects";
import Skills from "./components/skills";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
