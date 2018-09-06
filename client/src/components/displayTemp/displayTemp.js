import React, { Component } from "react";
import "./displayTemp.css";

class Customers extends Component {
  render() {
    return (
      <div className="weatherTemp">{this.props.weatherData.main.temp}</div>
    );
  }
}

export default Customers;
