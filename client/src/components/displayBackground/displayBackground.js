import React, { Component } from "react";
import "./displayBackground.css";

class Background extends Component {
  render() {
    let sw;
    if (this.props.temp > 20) {
      sw = "hot";
    } else {
      sw = "cold";
    }
    return <div className={`bgstyle ${sw}`} />;
  }
}

export default Background;
