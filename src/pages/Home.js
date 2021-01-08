import React , {useContext} from 'react'
import OverallStatement from '../components/OverallStatement'
import AllSystemsStatus from '../components/AllSystemsStatus'
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
            <MainContainer>
                <OverallStatement />
                <AllSystemsStatus />
            </MainContainer>
        }
        </>
    )
}

const MainContainer = styled.div`
  margin: 0 auto;
  width: 60vw;
  padding-top: 3rem;
  padding-bottom: 2rem;
  @media (max-width: 600px) {
    width: 90vw;
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