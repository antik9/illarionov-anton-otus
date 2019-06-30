import React from 'react';
import {CityWeather, citiesWeatherInfo} from './CityWeather';
import Favorites from './Favorites';
import store from '../store/store';
import {addToFavourites, removeFromFavourites, updateSearch} from '../actions/actions';

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  handleChange = (e) =>{
    const text = e.target.value;
    if ( text !== '') {
      const keys = Object.keys(citiesWeatherInfo);
      const cities = keys.filter(key => key.search(text) !== -1);
      if ( cities.length > 0 && this.state.city !== cities[0] ) {
        store.dispatch(updateSearch(cities[0]));
        this.setState(store.getState());
      }
    }
  }

  handleAdd = (e) => {
    const {city, favorites} = this.state;
    if ( favorites.indexOf(city) === -1 ) {
      store.dispatch(addToFavourites(city));
      this.setState(store.getState());
    }
  }

  handleRemove = (e) => {
    const {city, favorites} = this.state;
    if ( favorites.indexOf(city) !== -1 ) {
      store.dispatch(removeFromFavourites(city));
      this.setState(store.getState());
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


export { CitySearch };
