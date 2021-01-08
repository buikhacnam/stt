import React, {useContext} from 'react';
import {StatusContext} from '../contexts/AppContexts';
import { List } from 'antd';
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export default function AllSystemsStatus() {
    const { allRegions } = useContext(StatusContext)
    return (
        <RegionsWrapper>  
            <List
                itemLayout="vertical"
                size="small"
                dataSource={allRegions}
                header={
                    <div>
                      <p style={{paddingLeft: '1rem'}}>Regions</p>
                    </div>
                }
                renderItem={item => (
                        <List.Item
                            key={item.name}
                            extra={item.isGood? <CheckCircleOutlined style={{color: '#7ED321'}}/> : <WarningOutlined style={{color: '#B98900'}}/>}
                            style={{paddingBottom: 0}}
                        >
                            <List.Item.Meta        
                                          
                            description={item.isGood? <p style={{fontSize: '0.8rem',}}>{item.name}</p> : <p style={{fontSize: '0.8rem', textDecoration: 'line-through'}}>{item.name}</p>}
                            />
        
                        </List.Item>
                )}
            /> 
        </RegionsWrapper>
    )
}

const RegionsWrapper = styled.div`
   background-color: #ffffff;
`