
import React from 'react';
import OverallStatement from '../components/OverallStatement';
import Header from '../components/Header';
import styled from 'styled-components';

export default function Welcome() {
    return (
        <div>
        <WelcomeWrapper>
            <Header />
            <p>PageFly serves over 80,000 Shopify and Shopify Plus merchants with 4.9 / 5 rating.</p>
        </WelcomeWrapper>
        <OverallStatement />
        </div>
    )
}

const WelcomeWrapper = styled.div `
    color: #5555FF;
    background-color: #ffffff;
    margin-top: 2rem;
    padding: 3rem 2rem;
    padding-top: 0.05rem;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    & p {
        font-weight: 400;
    }
    
`