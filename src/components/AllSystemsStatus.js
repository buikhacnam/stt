import React, {useContext} from 'react';
import {StatusContext} from '../contexts/AppContexts';
import ServiceSystem from '../components/serviceAreas/ServiceSystem';
import styled from 'styled-components';

export default function AllSystemsStatus() {
    const { allSystems } = useContext(StatusContext)
    return (
        <SystemsWrapper>  
            {allSystems.map(system => {
                return <ServiceSystem system={system} key={system.name}/>
            })}    
        </SystemsWrapper>
    )
}

const SystemsWrapper = styled.div`
    display: grid;
    gap: 26px;
`