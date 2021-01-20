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
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`