import React, { Component } from "react";
import DisplayTemp from "../displayTemp/displayTemp";
import Background from "../displayBackground/displayBackground";
import City from "../city/city";
import WeatherInfo from "../weatherInfo/weatherinfo";
import "./weatherSegment.css";

const API_KEY = "957a9d2de58023bd971a530fa9d87387";
const UNITS = "metric"; // metric, imperial or kelvin

class App extends Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);

    this.state = {
      weather: {},
      expand: false
    };
  }

  handleExpand() {
    this.setState({ expand: !this.state.expand });
  }

  componentDidMount(CITY) {
    CITY = this.props.city;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&APPID=${API_KEY}`
    )
      .then(res => res.json())
      .then(weather => this.setState({ weather }));
  }

  render() {
    let context;

    if (!this.state.weather.cod) {
      context = <div className="error-container">Loading...</div>;
    } else {
      context = (
        <div className="error-container">
          <div className="error error-code">{this.state.weather.cod}</div>
          <div className="error error-message">
            {this.state.weather.message}
          </div>
        </div>
      );
    }

    return this.state.weather.main ? (
      <div className="weatherWindow" onClick={this.handleExpand}>
        <City city={this.props.city} />
        <Background temp={this.state.weather.main.temp} />
        <DisplayTemp weatherData={this.state.weather} />
        <WeatherInfo
          weatherData={this.state.weather}
          expand={this.state.expand}
        />
      </div>
    ) : (
      <div className="weatherWindow">{context}</div>
    );
  }
}

export default App;
