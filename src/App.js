import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom';

import IncidentHistory from './pages/IncidentHistory';
import styled from 'styled-components';
import Welcome from './components/Welcome';
import {StatusContext} from './contexts/AppContexts';
import { Spin } from 'antd';
import { Redirect } from "react-router-dom";

function App() {
  const {loading} = useContext(StatusContext);
  return (
    <>
    {loading? 
        <SpinWrapper>
            <SpinStyle>
                 <Spin tip="It may take a few moments to check"/>
            </SpinStyle>  
        </SpinWrapper>
        :
     <Body> 
      <Welcome />
      <Switch>
        <Route exact path='/'>
           <Redirect to="/incidents" />
        </Route>
        <Route exact path='/incidents' component={IncidentHistory} />
      </Switch>   
    </Body>
}
    </>
  );
}

export default App;

const Body = styled.div`
  margin: 0 auto;
  width: 80vw;
  padding-bottom: 2rem;
`
const SpinWrapper = styled.div`
 position: relative;
`

const SpinStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`