import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import IncidentHistory from './pages/IncidentHistory';
import Header from './components/Header';
import styled from 'styled-components';

function App() {
  return (
    <Body> 
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/incidents' component={IncidentHistory} />
      </Switch>   
    </Body>
  );
}

export default App;

const Body = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding-bottom: 2rem;
`
