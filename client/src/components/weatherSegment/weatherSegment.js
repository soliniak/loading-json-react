import React, { Component } from "react";
import DisplayTemp from "../displayTemp/displayTemp";
import Bg from "../displayBackground/displayBackground";
import "./weatherSegment.css";

const API_KEY = "957a9d2de58023bd971a530fa9d87387";
let CITY = "Warsaw";
const UNITS = "metric"; // metric, imperial or kelvin

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&APPID=${API_KEY}`
    )
      .then(res => res.json())
      .then(weather => this.setState({ weather }, () => console.log(weather)));
  }

  render() {
    return this.state.weather.main ? (
      <div className="App">
        <div className="weatherWindow">
          <Bg temp={this.state.weather.main.temp} />
          <DisplayTemp weatherData={this.state.weather} />
        </div>
      </div>
    ) : (
      <span>Loading...</span>
    );
  }
}

export default App;
