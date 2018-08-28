const express = require("express");
const request = require("request");
const env = require("./.env");

const API_KEY = process.env.API_KEY;
let CITY = "Warsaw";
const UNITS = "metric"; // metric, imperial or kelvin

const app = express();

app.get("/api/weather", (req, res) => {
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&APPID=${API_KEY}`;

  request(API_URL, function(error, callback, weather) {
    if (error) {
      next(error);
    } else {
      res.send(weather);
    }
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server starting on port ${port}`));
