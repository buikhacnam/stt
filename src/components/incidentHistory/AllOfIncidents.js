import React, {useContext} from 'react';
import {StatusContext} from '../../contexts/AppContexts';
import {Link} from 'react-router-dom';
import EachIncident from './EachIncident';
import styled from 'styled-components';
import { Button } from 'antd';

export default function AllOfIncidents() {
    const {incident} = useContext(StatusContext);
    
    return (
        <AllIncidentWrapper>
            {incident? 
                incident.map(eachIncident => {
                    return <EachIncident key={eachIncident.date} eachIncident={eachIncident} />
                })
                :
                <Button><Link  to="/">Back</Link></Button>
            }
            
        </AllIncidentWrapper>
    )
}

const AllIncidentWrapper = styled.div`
    display: grid;
    gap: 2rem;
    padding-bottom: 3rem;
`