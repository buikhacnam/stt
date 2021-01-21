import React from 'react'
import AllSystemsStatus from '../components/AllSystemsStatus'
import AllRegionsStatus from '../components/AllRegionsStatus'
import Incidents from '../components/Incidents'
import styled from 'styled-components'



export default function Home() {
    
    return (
       
            <Container>
                <MainContainer>
                    <ContentWrapper>
                        <Incidents />
                        <AllSystemsStatus />
                        <AllRegionsStatus />
                    </ContentWrapper>
                </MainContainer>
            </Container>
        
    )
}

const Container = styled.div `
    padding-top: 2rem;
    display: grid;
`

const MainContainer = styled.div`
  display: grid;
  padding-top: 3rem;
  padding-bottom: 2rem;
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 2rem;
    @media (max-width: 900px) {
        grid-template: none;
    }
`
