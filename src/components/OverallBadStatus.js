import React from 'react';
import styled from 'styled-components';

export default function OverallGoodStatus() {
    return (
        <StatusWrapper>
            <Status>
                The system is doing some maintenance
            </Status>
        </StatusWrapper>
    )
}

const StatusWrapper = styled.div`
    background-color: #B98900;
    border: 1px solid #aa7d00;
    color: white;
    border-radius: 3px;
`
const Status = styled.div`
    padding: 0.6rem 1.5rem;
    font-size: 2rem;
    font-weight: 600;
    display: grid;
    @media (max-width: 700px) {
        font-size: 1.4rem;
    }
`
