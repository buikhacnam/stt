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
                     <Spin />
                </SpinStyle>  
            </SpinWrapper>
            :
            <Container>
                <OverallStatement />
                <MainContainer>
                    <ContentWrapper>
                        <Incidents />
                        <div>
                            <AllSystemsStatus />
                        </div>
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
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
`

const MainContainer = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 2rem;

`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 2rem;
    @media (max-width: 700px) {
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