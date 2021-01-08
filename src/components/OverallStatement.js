import React, {useContext} from 'react';
import { StatusContext } from '../contexts/AppContexts';
import OverallGoodStatus from './OverallGoodStatus';
import OverallBadStatus from './OverallBadStatus';

export default function OverallStatement() {
    const {allSystemsStatus, loading} = useContext(StatusContext);
    
    return (
        <div> 
            {(allSystemsStatus.isGood && !loading)? <OverallGoodStatus />: null}
            {(!allSystemsStatus.isGood && !loading)? <OverallBadStatus />: null}
        </div>
    )
}
