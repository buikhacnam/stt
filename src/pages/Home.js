import React , {useContext} from 'react'
import OverallStatement from '../components/OverallStatement'
import AllSystemsStatus from '../components/AllSystemsStatus'
import AllRegionsStatus from '../components/AllRegionsStatus'
import Incidents from '../components/Incidents'
import {StatusContext} from '../contexts/AppContexts'
import styled from 'styled-components'
import { Spin } from 'antd';

export default function Home() {
    const {loading} = useContext(StatusContext)
    return (
        <>
        {loading? 
            <SpinWrapper>
                <SpinStyle>
                     <Spin tip="It may take a few moments to check"/>
                </SpinStyle>  
            </SpinWrapper>
            :
            <Container>
                <OverallStatement />
                <MainContainer>
                    <ContentWrapper>
                        <Incidents />
                        <AllSystemsStatus />
                        <AllRegionsStatus />
                    </ContentWrapper>
                </MainContainer>
            </Container>
        }
        </>
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

const SpinWrapper = styled.div`
 position: relative;
`

const SpinStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`