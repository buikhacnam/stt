import React, {useContext} from 'react';
import AllOfIncidents from '../components/incidentHistory/AllOfIncidents';
import OverallStatement from '../components/OverallStatement';
import styled from 'styled-components';
import {StatusContext} from '../contexts/AppContexts'
import { Spin } from 'antd';

export default function IncidentHistory() {
    const {loading} = useContext(StatusContext)
    return (
        <>
        {loading? 
            <SpinWrapper>
                <SpinStyle>
                     <Spin tip="It may take a few moments to check"/>
                </SpinStyle>  
            </SpinWrapper>
            :
            <HistoryStyled>
                <OverallStatement />
                <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Incident History</h1>
                <AllOfIncidents />
            </HistoryStyled>
        }
        </>
    )
}

const HistoryStyled = styled.div`
    margin: 0 auto;
    width: 85vw;
    padding-top: 2rem;
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