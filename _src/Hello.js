const React = require('react');
const ReactDOM = require('react-dom');
var createClass = require('create-react-class');

// Create component
var TodoComponent = createClass({
  render: function () {
    return(
      <h3>Jekyll React Hello!</h3>
    );
  }
});

// put component into html page

(<TodoComponent />, document.getElementById('todo-container'));
