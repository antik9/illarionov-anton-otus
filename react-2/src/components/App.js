import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
import { DetailApp } from './DetailApp';
import { MainApp } from './MainApp';

function App() {
  const style = {marginLeft: '2%'};
  return (
    <div style={style} className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={MainApp}/>
          <Route exact path='/:name' render={(props) => <DetailApp{...props.match.params} />} />
        </Switch>
      </HashRouter>
    </div>
  );
}


export default App;
