const express = require("express");
const request = require("request");
const env = require("./.env");

const API_KEY = process.env.API_KEY;
let CITY = "Warsaw";
const UNITS = "metric"; // metric, imperial or kelvin

const app = express();

app.get("/api/weather", (req, res) => {
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&APPID=${API_KEY}`;

  request(API_URL, function(error, callback, body) {
    if (error) {
      next(error);
    } else {
      // body = body.replace(/[\[\]']+/g, "");
      // body = body.replace(/\{/g, "[").replace(/}/g, "]");
      // body = Object.values(body);
      // res.json(data.weather);
      body = JSON.parse(body);
      console.log(body);
      res.send(body);
    }
  });
});

// app.get("/api/weather", (req, res) => {
//   const customers = [
//     { id: 1, name: "Derp", surname: "Pook" },
//     { id: 2, name: "Bork", surname: "Dleo" },
//     { id: 3, name: "Swant", surname: "Buina" }
//   ];
//   res.json(customers);
// });

const port = 5000;

app.listen(port, () => console.log(`Server starting on port ${port}`));
