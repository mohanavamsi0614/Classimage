import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import Classcar from "./components/classCarousel";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Carousel /> */}
        <Classcar/>
      </div>
    );
  }
}