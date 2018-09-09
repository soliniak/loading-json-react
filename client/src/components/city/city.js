import React, { Component } from "react";
import "./city.css";

class City extends Component {
  render() {
    return <div className="city">{this.props.city}</div>;
  }
}

export default City;
