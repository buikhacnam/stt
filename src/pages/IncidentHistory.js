import React, {useEffect} from 'react';
import AllOfIncidents from '../components/incidentHistory/AllOfIncidents';
import styled from 'styled-components';


export default function IncidentHistory() {
    useEffect(()=> {
        window.scrollTo(0,0)
    }, [])
    return (
        
            <HistoryStyled>
                <h1 style={{textAlign: 'center', marginTop: '2rem'}}>Incident History</h1>
                <AllOfIncidents />
            </HistoryStyled>
       
    )
}

const HistoryStyled = styled.div`
    padding-top: 2rem;
    display: grid;
    justify-content: center;
`