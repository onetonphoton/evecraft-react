var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'David',
  location: 'Calgary'
}

var objTwo = {
  age: 38,
  ...objOne
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilderplate app!</h1>,
  document.getElementById('app')
);
