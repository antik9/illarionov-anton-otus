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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  render() {
    return (
      <div>
        <h3>Weather App</h3>
        <CitySearch/>
      </div>
    );
  }
}

class CityWeather extends React.Component {
  render() {
    const weatherInfo = citiesWeatherInfo[this.props.name];
    return (
      <div {...this.props}>
        <hr align={"left"} width={"50%"} />
        <table>
          <tbody>
          <tr>
            <td><b>City</b></td>
            <td>{this.props.name}</td>
          </tr>
          {Object.keys(weatherInfo).map(key =>(
            <tr>
              <td><b>{key.charAt(0).toUpperCase() + key.slice(1)}</b></td>
              <td>{weatherInfo[key]}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
 }
}

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cities: []};
  }

  render() {
    return (
     <div>
       {JSON.parse(this.props.items).map(city => (
         <CityWeather name={city} />
       ))}
     </div>
    );
  }
}

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city: "Moscow", favorites: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  render() {
    const city = this.state.city;
    const style = {margin: "5px"};
    return (
      <div>
        <div>
          <input id="search-input" onChange={this.handleChange} style={style}/>
          <button type="submit" style={style} onClick={this.handleAdd}>
            Add to favorites
          </button>
          <button type="submit" style={style} onClick={this.handleRemove}>
            Remove from favorites
          </button>
        </div>
        <CityWeather name={city} id="choosen-city" />
        <h3>Favorites</h3>
        <Favorites items={JSON.stringify(this.state.favorites)}/>
      </div>
    )
  }

  handleChange(e) {
    const text = document.getElementById("search-input").value;
    if ( text !== '') {
      const keys = Object.keys(citiesWeatherInfo);
      const cities = keys.filter(key => key.search(text) !== -1);
      if ( cities.length > 0 ) {
        this.setState({city: cities[0], favorites: this.state.favorites});
      }
    }
  }

  handleAdd(e) {
    if ( this.state.favorites.indexOf(this.state.city) === -1 ) {
      this.state.favorites.push(this.state.city);
      this.setState({city: this.state.city, favorites: this.state.favorites});
    }
  }

  handleRemove(e) {
    if ( this.state.favorites.indexOf(this.state.city) !== -1 ) {
      this.state.favorites.pop(this.state.city);
      this.setState({city: this.state.city, favorites: this.state.favorites});
    }
  }
}

export default App;
