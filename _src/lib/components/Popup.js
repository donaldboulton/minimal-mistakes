import React from 'react';
import ReactDOM from 'react-dom';
class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1 className="popup_header">{this.props.text}</h1>
        <button className="popup_close" onClick={this.props.closePopup}><span aria-hidden="true">×</span></button>
        <p>
            This modal is build with just React Code no extra npm module or external .js.
            This will be great for form notifications and site alerts.
          </p>
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
        <h1>React POPUP no npm</h1>
        <button className="btn btn--primary" onClick={this.togglePopup.bind(this)}>show react popup</button>        
        {this.state.showPopup ? 
          <Popup
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

