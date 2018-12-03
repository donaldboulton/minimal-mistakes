import React from 'react';
import { Panel, Label } from 'react-bootstrap';

const WeatherComponent = ({ name, icon, temperature, humidity, desc, country }) => {
  return (
    <Panel bsStyle="info">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Weather in {name}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <p>Description: <Label bsStyle="success">{desc}</Label> <img src={icon && `https://openweathermap.org/img/w/${icon}.png`} alt="weather" /></p>
        <p>Temperature: <Label bsStyle="success">{temperature}&#8451;</Label></p>
        <p>Humidity: <Label bsStyle="success">{humidity}%</Label></p>
        <p>Country: {country}</p>
      </Panel.Body>
    </Panel>
  );
}

export default WeatherComponent;