import React, { Component } from "react";
import WeatherSegment from "./components/weatherSegment/weatherSegment";

let countries = ["Warsaw", "Barcelona", "Moscow"];

class App extends Component {
  render() {
    return countries.forEach(country => {
      <WeatherSegment country={country} />;
    });
  }
}

export default App;
