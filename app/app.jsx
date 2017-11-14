var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var EveCraft = require('EveCraft');

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <EveCraft/>,
  document.getElementById('app')
);
