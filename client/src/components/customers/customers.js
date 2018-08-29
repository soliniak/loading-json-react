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
      .then(weather => this.setState({ weather }, () => console.log(weather)));
  }

  render() {
    return this.state.weather.main ? (
      <p>{this.state.weather.coord.lon}</p>
    ) : (
      <span>Loading...</span>
    );
  }
}

export default Customers;
