# React problem with getting object nested in array/object.
![alt text](https://github.com/soliniak/node-react/blob/master/json.jpg "JSON image")
<br>
JSON I'm passing from ```server.js``` -> ```client/src/components/customers/customers.js``` is on the image above. <br>
When calling -> ```{this.state.weather.name}``` I'm getting back **name: Warsaw** <br>
When calling -> ```{this.state.weather.main.temp}``` I'm getting **TypeError: Cannot read property 'temp' of undefined** <br>
**WHY??**

When I paste JSON straight into state insted of passing from server.js, everything works just fine...
Help!

