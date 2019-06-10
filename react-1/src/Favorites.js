import React from 'react';
import {CityWeather} from './CityWeather';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cities: []};
  }

  render() {
    return (
     <div>
       {this.props.items.map(city => (
         <CityWeather name={city} />
       ))}
     </div>
    );
  }
}

export default Favorites;
