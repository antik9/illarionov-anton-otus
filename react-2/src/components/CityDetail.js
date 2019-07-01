import React from 'react';
import { citiesWeatherInfo } from './CityWeather';
import { DateWeather } from './DateWeather';

class CityDetail extends React.Component {
  render() {
    const { name } = this.props;
    const weatherInfo = citiesWeatherInfo[name] || {};
    const someday = (Object.keys(weatherInfo).length > 0) ? Object.keys(weatherInfo)[0] : undefined;
    const headers = someday ? Object.keys(weatherInfo[someday]) : [];
    const thStyle = { padding: "2px 10px" };
    return (
      <div {...this.props}>
        <hr align="left" width="50%" />
        <table>
          <thead>
            <tr>
              <th style={thStyle}>{someday ? "Date" : ""}</th>
              {headers.map(key =>(
                <th style={thStyle} key={key}>
                  <b>{key.charAt(0).toUpperCase() + key.slice(1)}</b>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(weatherInfo).map(key =>(
              <DateWeather key={key} date={key} weatherInfo={weatherInfo}/>
            ))}
          </tbody>
        </table>
      </div>
    );
 }
}

export {CityDetail};
