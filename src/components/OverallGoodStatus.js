import React from 'react';
import styled from 'styled-components';

export default function OverallGoodStatus() {
    return (
        <StatusWrapper>
            <Status>
                All systems are operational
            </Status>
        </StatusWrapper>
    )
}

const StatusWrapper = styled.div`
    background-color: #7ED321;
    border: 2px solid #64a71a;
    color: white;
    border-radius: 3px;
`
const Status = styled.div`
    padding: 1rem 1.5rem;
    font-size: 1.4em;
    font-weight: 600;
`
