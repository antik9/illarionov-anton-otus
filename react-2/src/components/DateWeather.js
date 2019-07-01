import React from 'react';

class DateWeather extends React.Component {
  render() {
    const { date, weatherInfo } = this.props;
    const tdStyle = {textAlign: "center"};
    return (
      <tr>
        <td>{date}</td>
        {Object.keys(weatherInfo[date]).map(param =>(
          <td key={`${date}-${param}`} style={tdStyle}>{weatherInfo[date][param]}</td>
        ))}
      </tr>
    )
  }
}

export {DateWeather};
