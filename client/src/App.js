import React, { Component } from "react";
import Customers from "./components/displayTemp/displayTemp";
import Bg from "./components/displayBackground/displayBackground";

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
  }

  componentDidMount() {
    fetch("/api/weather")
      .then(res => res.json())
      .then(weather => this.setState({ weather }, () => console.log(weather)));
  }

  render() {
    return this.state.weather.main ? (
      <div className="App">
        <Bg temp={this.state.weather.main.temp} />
        <Customers weatherData={this.state.weather} />
      </div>
    ) : (
      <span>Loading...</span>
    );
  }
}

export default App;
