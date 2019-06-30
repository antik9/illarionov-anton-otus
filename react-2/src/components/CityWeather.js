import React from 'react';
import { NavLink } from 'react-router-dom';

let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let dayAfterTomorrow = new Date()
dayAfterTomorrow.setDate(today.getDate() + 2);

const citiesWeatherInfo = {
  "Moscow": {
    [today.toDateString()]: {
      "temperature": "+20",
      "wind": "3 m/s",
      "humidity": "15%",
    },
    [tomorrow.toDateString()]: {
      "temperature": "+22",
      "wind": "1 m/s",
      "humidity": "12%",
    },
    [dayAfterTomorrow.toDateString()]: {
      "temperature": "+15",
      "wind": "9 m/s",
      "humidity": "25%",
    },
  },
  "New York City": {
    [today.toDateString()]: {
      "temperature": "+15",
      "wind": "6 m/s",
      "humidity": "3%",
    },
    [tomorrow.toDateString()]: {
      "temperature": "+26",
      "wind": "7 m/s",
      "humidity": "17%",
    },
    [dayAfterTomorrow.toDateString()]: {
      "temperature": "+24",
      "wind": "2 m/s",
      "humidity": "2%",
    },
  },
  "Paris": {
    [today.toDateString()]: {
      "temperature": "+5",
      "wind": "13 m/s",
      "humidity": "45%",
    },
    [tomorrow.toDateString()]: {
      "temperature": "+9",
      "wind": "19 m/s",
      "humidity": "22%",
    },
    [dayAfterTomorrow.toDateString()]: {
      "temperature": "+10",
      "wind": "5 m/s",
      "humidity": "15%",
    },
  },
  "London": {
    [today.toDateString()]: {
      "temperature": "+18",
      "wind": "6 m/s",
      "humidity": "35%",
    },
    [tomorrow.toDateString()]: {
      "temperature": "+17",
      "wind": "9 m/s",
      "humidity": "38%",
    },
    [dayAfterTomorrow.toDateString()]: {
      "temperature": "+15",
      "wind": "8 m/s",
      "humidity": "29%",
    },
  },
}

class CityWeather extends React.Component {
  render() {
    const { name } = this.props;
    const weatherInfo = citiesWeatherInfo[name][today.toDateString()];
    const tdStyle = {"fontWeight": "bold"}
    return (
      <div {...this.props}>
        <hr align="left" width="50%" />
        <table>
          <tbody>
          <tr>
            <td><b>City</b></td>
            <td><NavLink to={name}>{name}</NavLink></td>
          </tr>
          {Object.keys(weatherInfo).map(key =>(
            <tr key={`${name}-${key}`}>
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
