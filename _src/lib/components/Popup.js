import React from 'react';
import ReactDOM from 'react-dom';
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <h1>hihi</h1>
        <button className="btn btn--primary" onClick={this.togglePopup.bind(this)}>show react popup</button>        
        {this.state.showPopup ? 
          <Popup
            className="btn btn--primary"
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('popup')
);

