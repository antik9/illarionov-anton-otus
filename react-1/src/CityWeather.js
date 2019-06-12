import React from 'react';

const citiesWeatherInfo = {
  "Moscow": {
    "temperature": "+20",
    "wind": "3 m/s",
    "humidity": "15%",
  },
  "New York City": {
    "temperature": "+22",
    "wind": "2 m/s",
    "humidity": "23%",
  },
  "Paris": {
    "temperature": "+10",
    "wind": "6 m/s",
    "humidity": "45%",
  },
  "London": {
    "temperature": "+15",
    "wind": "1 m/s",
    "humidity": "55%",
  },
}

class CityWeather extends React.Component {
  render() {
    const weatherInfo = citiesWeatherInfo[this.props.name];
    const tdStyle = {"font-weight": "bold"}
    return (
      <div {...this.props}>
        <hr align="left" width="50%" />
        <table>
          <tbody>
          <tr>
            <td><b>City</b></td>
            <td>{this.props.name}</td>
          </tr>
          {Object.keys(weatherInfo).map(key =>(
            <tr>
              <td style={ tdStyle }>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
              <td>{weatherInfo[key]}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
 }
}

export {CityWeather, citiesWeatherInfo};
