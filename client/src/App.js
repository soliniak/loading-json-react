import React, { Component } from "react";
import WeatherSegment from "./components/weatherSegment/weatherSegment";
import "./App.css";

const countries = [
  "Warsaw",
  "Barcelona",
  "Moscow",
  "Rome",
  "Haiti",
  "New York"
];

class App extends Component {
  render() {
    return (
      <div className="App-container">
        {countries.map((country, index) => {
          return <WeatherSegment key={index} city={country} />;
        })}
      </div>
    );
  }
}

export default App;
