/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import { Card } from 'antd';
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export default function Admin({system}) {
    
    return (
        <SystemWrapper>
            {system.isGood? 
                <Card 
                    type="inner" 
                    title={<a href={system.link} target="_blank" rel="noreferrer">{system.name}</a>}
                    extra={<CheckCircleOutlined style={{color:"#7ED321",}}/>}
                    hoverable
                    style={{cursor: 'default'}}
                >
                    <CardContent>
                        <div>
                            No known issues
                        </div>
                        <Operational style={{color: '#7ED321'}}>
                            <p>Operational</p>
                        </Operational>
                    </CardContent>
                </Card> 
                :
                <Card 
                    type="inner" 
                    title={system.name} 
                    extra={<WarningOutlined style={{color:"#B98900",}}/>}
                    hoverable
                    style={{cursor: 'default'}}
                >
                    <CardContent>
                        <div>
                            The system is being maintenanced
                        </div>
                        <Operational style={{color: '#B98900'}}>
                            <p>Maintenance</p>
                        </Operational>
                    </CardContent>
                </Card> 
            
            }
            
        </SystemWrapper>
    )
}

const Operational = styled.div`
    & p {
        float: right;
    }
`
const CardContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: 'space-between';
    padding-bottom: 0;
    color: #7C7381;
`
const SystemWrapper = styled.div`
    font-size: 20px;
`