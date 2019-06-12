import React from 'react';
import CitySearch from './CitySearch';

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

export default App;
