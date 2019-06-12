import React from 'react';
import {CityWeather, citiesWeatherInfo} from './CityWeather';
import Favorites from './Favorites';

const initialState = {city: "Moscow", favorites: []};

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = (e) =>{
    const text = e.target.value;
    if ( text !== '') {
      const keys = Object.keys(citiesWeatherInfo);
      const cities = keys.filter(key => key.search(text) !== -1);
      if ( cities.length > 0 ) {
        this.setState({city: cities[0], favorites: this.state.favorites});
      }
    }
  }

  handleAdd = (e) => {
    const {city, favorites} = this.state;
    if ( favorites.indexOf(city) === -1 ) {
      favorites.push(city);
      this.setState({city: city, favorites: favorites});
    }
  }

  handleRemove = (e) => {
    const {city, favorites} = this.state;
    if ( favorites.indexOf(city) !== -1 ) {
      favorites.pop(city);
      this.setState({city: city, favorites: favorites});
    }
  }

  render() {
    const {city, favorites} = this.state;
    const style = {margin: "5px"};
    return (
      <div>
        <div>
          <input onChange={this.handleChange} style={style}/>
          <button type="submit" style={style} onClick={this.handleAdd}>
            Add to favorites
          </button>
          <button type="submit" style={style} onClick={this.handleRemove}>
            Remove from favorites
          </button>
        </div>
        <CityWeather name={city} />
        <h3>Favorites</h3>
        <Favorites items={favorites}/>
      </div>
    )
  }
}

export default CitySearch;
