import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
  }

  componentDidMount() {
    fetch("/api/weather")
      .then(res => res.json())
      .then(weather =>
        this.setState({ weather }, () =>
          console.log("Weather fetched: ", weather)
        )
      );
  }

  render() {
    return (
      <div>
        <h2> Weather </h2>
        <p> {this.state.weather.name} </p> {/* działa */}
        <p> {this.state.weather.main.temp} </p> {/* nie działa */}
      </div>
    );
  }
}

export default Customers;
