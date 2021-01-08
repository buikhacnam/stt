import React, {useContext} from 'react';
import {StatusContext} from '../contexts/AppContexts';
import { Card } from 'antd';
import styled from 'styled-components';

export default function Incidents() {
    const {incident} = useContext(StatusContext);
    return (
        <IncidentsWrapper>
            <Card 
                size="default" 
                title="Last Incident"   
                bordered={false} 
                extra={incident.date} 
                style={{ width: 250, }}
            >
                <h4 style={{color: '#282C70'}}>{incident.title}</h4>
                <p>{incident.description}</p>
            </Card>
        </IncidentsWrapper>
    )
}

const IncidentsWrapper = styled.div`
    background-color: #ffffff;
`