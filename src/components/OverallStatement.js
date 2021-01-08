import React, {useContext} from 'react';
import { StatusContext } from '../contexts/AppContexts';
import OverallGoodStatus from './OverallGoodStatus';
import OverallBadStatus from './OverallBadStatus';
import styled from 'styled-components';

export default function OverallStatement() {
    const {allSystemsStatus} = useContext(StatusContext);
    
    return (
        <OverallStatementStyled> 
            {allSystemsStatus.isGood && <OverallGoodStatus />}
            {!allSystemsStatus.isGood && <OverallBadStatus />}
        </OverallStatementStyled>
    )
}

const OverallStatementStyled = styled.div`
    margin: 0 auto;
    margin-bottom: 0.5rem;
    width: 100%;
`