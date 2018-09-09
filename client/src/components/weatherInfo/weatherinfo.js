import React, { Component } from "react";
import "./weatherinfo.css";

let expand;

class WeatherInfo extends Component {
  constructor() {
    super();
    this.hadnleUnixTime = this.hadnleUnixTime.bind(this);
  }

  hadnleUnixTime(unixDate) {
    var date = new Date(unixDate * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  }

  render() {
    expand = this.props.expand;
    return (
      <div className={`weatherInfo expanded-${expand}`}>
        <span className="dataLine">
          Temperature:{" "}
          {this.props.weatherData.main.temp
            ? this.props.weatherData.main.temp
            : "N/D"}{" "}
          &#176;C
        </span>
        <span className="dataLine">
          Pressure:{" "}
          {this.props.weatherData.main.pressure
            ? `${this.props.weatherData.main.pressure} hPa`
            : "N/D"}
        </span>
        <span className="dataLine">
          Latitude:{" "}
          {this.props.weatherData.coord.lat
            ? this.props.weatherData.coord.lat
            : "N/D"}
        </span>
        <span className="dataLine">
          Longitude:{" "}
          {this.props.weatherData.coord.lon
            ? this.props.weatherData.coord.lon
            : "N/D"}
        </span>
        <span className="dataLine">
          Wind speed:{" "}
          {this.props.weatherData.wind.speed
            ? `${this.props.weatherData.wind.speed} m/s`
            : "N/D"}
        </span>
        <span className="dataLine">
          Wind direction:{" "}
          {this.props.weatherData.wind.deg ? (
            <span
              className="wind-arrow"
              style={{
                transform: `rotate(${this.props.weatherData.wind.deg}deg)`
              }}
            >
              ➜
            </span>
          ) : (
            "N/D"
          )}
        </span>
        <span className="dataLine">
          Humidity:{" "}
          {this.props.weatherData.main.humidity
            ? `${this.props.weatherData.main.humidity}%`
            : "N/D"}
        </span>
        <span className="dataLine">
          Clouds: {this.props.weatherData.clouds.all}%
        </span>
        <span className="dataLine">
          Visibility:{" "}
          {this.props.weatherData.visibility
            ? `${this.props.weatherData.visibility}m`
            : "N/D"}
        </span>
        <span className="dataLine">
          Weather:{" "}
          {this.props.weatherData.weather[0].description
            ? this.props.weatherData.weather[0].description
            : "N/D"}
        </span>
        <span className="dataLine">
          Sunrise:{" "}
          {this.props.weatherData.sys.sunrise
            ? this.hadnleUnixTime(this.props.weatherData.sys.sunrise)
            : "N/D"}
        </span>
        <span className="dataLine">
          Sunset:{" "}
          {this.props.weatherData.sys.sunset
            ? this.hadnleUnixTime(this.props.weatherData.sys.sunset)
            : "N/D"}
        </span>
      </div>
    );
  }
}

export default WeatherInfo;
