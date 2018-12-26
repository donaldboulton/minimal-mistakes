import React from "react";

class WeatherApp extends React.Component {
  handleCityChange(e) {
    this.setState({cityInput: e.target.value});
  }
  handleStateChange(e) {
    this.setState({stateInput: e.target.value});
  }
  updateWeather(event) {
  event.preventDefault();
  let state =  this.state.stateInput;
  let city =  this.state.cityInput;
  if( state == '' || city == '') return alert('Please enter value into inputs');   
  let that = this;
  let url = 'https://api.wunderground.com/api/e84a89c8be50b75a/conditions/q/'+ state +'/'+ city +'.json';

  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    that.setState({ 
      city: data.current_observation.display_location.city,
      img: data.current_observation.icon_url,
      feelslike: data.current_observation.feelslike_string,
      humidity: data.current_observation.relative_humidity,
      wind: data.current_observation.wind_string,
      dewpoint: data.current_observation.dewpoint_string
    });
  }); 
  }
  componentDidMount() {    
  let that = this;
  let url = 'https://api.wunderground.com/api/e84a89c8be50b75a/conditions/q/CA/San_Francisco.json';

  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    that.setState({ 
      city: data.current_observation.display_location.city,
      img: data.current_observation.icon_url,
      feelslike: data.current_observation.feelslike_string,
      humidity: data.current_observation.relative_humidity,
      wind: data.current_observation.wind_string,
      dewpoint: data.current_observation.dewpoint_string
    });
  });
}
   constructor(props) {
    super(props);
    this.state = {
      city: '',
      img: '',
      feelslike: '',
      humidity: '',
      wind: '',
      dewpoint: '',
      cityInput: '',
      stateInput: ''
    };
  }
  render() {
    return <div className="weatherapp">
      <h2>Weather Checker Widget</h2>
      <h3>{this.state.city}</h3>
      <img src={this.state.img} />
      <h1>{this.state.feelslike}</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Relative Humidity: </strong>
          <span>{this.state.humidity}</span>
        </li>
        <li className="list-group-item">
          <strong>Wind: </strong>
          <span>{this.state.wind}</span>
        </li>
        <li className="list-group-item">
          <strong>Dewpoint: </strong>
          <span>{this.state.dewpoint}</span>
        </li>
      </ul>
      <div>
       <h3 className="header">Change Location</h3>
      <form onSubmit={this.updateWeather.bind(this)}>
        <input type="text" placeholder="Enter City ex (Memphis)" className="form-control input" value={this.state.cityInput} onChange={this.handleCityChange.bind(this)} />
        <br />
        <input type="text" placeholder="Enter State ex (TN)" className="form-control input" value={this.state.stateInput} onChange={this.handleStateChange.bind(this)} />
        <br />
        <input type="submit" value="Submit" className="btn btn--primary" />
      </form>
      </div>  
    </div>;
  }
}

ReactDOM.render(<WeatherApp />, document.getElementById('weather'));
