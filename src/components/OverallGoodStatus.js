import React from 'react';
import styled from 'styled-components';

export default function OverallGoodStatus() {
    return (
        <StatusWrapper>
            <Status>
                <div style={{margin: 'auto 0'}}>All systems are operational</div>
                <div><img src='../favicon.png' alt='logo' height='40px' style={{float: 'right'}}/></div>
            </Status>
        </StatusWrapper>
    )
}

const StatusWrapper = styled.div`
    background-color: #71BF60;
    border: 2px solid #64a71a;
    color: white;
    border-radius: 3px;
`
const Status = styled.div`
    padding: 0.8rem 1.5rem;
    font-size: 1.8rem;
    font-weight: 600;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: 'space-between';
    @media (max-width: 700px) {
        font-size: 1.4rem;
    }
`
