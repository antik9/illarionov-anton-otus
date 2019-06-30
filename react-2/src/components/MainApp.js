import React from 'react';
import { NavLink } from 'react-router-dom';
import { CitySearch } from './CitySearch';

class MainApp extends React.Component {
  render() {
    return (
      <div>
        <h2 className="Weather-App">
          <NavLink to="/">Weather App</NavLink>
        </h2>
        <CitySearch />
      </div>
    )
  }
}

export { MainApp };
