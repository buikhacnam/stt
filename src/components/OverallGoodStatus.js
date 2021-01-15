import React from 'react';
import styled from 'styled-components';

export default function OverallGoodStatus() {
    return (
        <StatusWrapper>
            <Status>
                <div style={{margin: 'auto 0'}}>All systems are operational</div>
                
            </Status>
        </StatusWrapper>
    )
}

const StatusWrapper = styled.div`
    background-color: #00B700;
    border: 1px solid #00a800;
    color: white;
    border-radius: 3px;
`
const Status = styled.div`
    padding: 0.6rem 1.5rem;
    font-size: 2rem;
    font-weight: 600;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: 'space-between';
    @media (max-width: 700px) {
        font-size: 1.4rem;
    }
`
