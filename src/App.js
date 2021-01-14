import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import IncidentHistory from './pages/IncidentHistory';

function App() {
  return (
    <> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/incidents' component={IncidentHistory} />
      </Switch>   
    </>
  );
}

export default App;
