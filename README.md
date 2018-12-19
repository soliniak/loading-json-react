# Problem with loading JSON - Object nested in object. [SOLVED]
![alt text](https://github.com/soliniak/node-react/blob/master/json.jpg "JSON image")
<br>
JSON I'm passing from ```server.js``` -> ```client/src/components/customers/customers.js``` is on the image above. <br>
When calling -> ```{this.state.weather.name}``` I'm getting back **name: Warsaw** <br>
When calling -> ```{this.state.weather.main.temp}``` I'm getting **TypeError: Cannot read property 'temp' of undefined** <br>

When I paste JSON straight into state insted of passing from server.js, everything works just fine...
~~Help!~~

## **SOLUTION**
I couldn't reach ```main.temp``` object because state wasn't synced with JSON at moment of calling for it.
Solution is to check if all data from JSON are loaded into state. To do so check if object exists. If Object isn't loaded show "Loading..." else display what we need.

```javascript
return this.state.weather.main ? (
<p>{this.state.weather.main.temp}</p>
) : (
<span>Loading...</span>
);
```

Whole code looks like so:

```javascript
import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
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

export default Weather;

```
