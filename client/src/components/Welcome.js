import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export default function Welcome() {
    const linkPageFly = 'https://apps.shopify.com/pagefly?surface_detail=pagefly&surface_inter_position=1&surface_intra_position=1&surface_type=search';
    return (
        <WelcomeWrapper>
            <p>PageFly serves over 80,000 Shopify and Shopify Plus merchants with 4.9 / 5 rating.</p>
            <div style={{display: 'grid', justifyContent: 'center'}}>
                <a href={linkPageFly}><Button size="small" style={{color: '#5555FF'}}>Install Pagefly</Button></a>
            </div>
        </WelcomeWrapper>
    )
}

const WelcomeWrapper = styled.div `
    background-color: #5555FF;
    color: #ffffff;
    margin-top: 2rem;
    padding: 0.5rem 0.5rem;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    & p {
        text-align: center;
    }
`