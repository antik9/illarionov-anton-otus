import React from 'react';
import { NavLink } from 'react-router-dom'
import { CityDetail } from './CityDetail';

class DetailApp extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <h2 className="Weather-App">
          <NavLink to="/">Weather App</NavLink>
          <br /><br />
          ⛅ { name } ⛅
        </h2>
        <CityDetail{...this.props} />
      </div>
    )
  }
}

export { DetailApp };
