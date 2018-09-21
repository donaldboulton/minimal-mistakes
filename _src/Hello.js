const React = require('react');
const ReactDOM = require('react-dom');

const hello = React.createClass({
  render: function() {
    return <div>Hello World</div>;
  }
});

ReactDOM.render(hello, document.getElementById('root'));
