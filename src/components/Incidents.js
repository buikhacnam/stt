import React, {useContext, useState} from 'react';
import {StatusContext} from '../contexts/AppContexts';
import { Card, Modal, Button } from 'antd';
import styled from 'styled-components';

export default function Incidents() {
    const {incident} = useContext(StatusContext);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <IncidentsWrapper>
            <Card 
                size="default" 
                title="Last Incident"   
                bordered={false} 
                extra={incident.date} 
                style={{ width: 250, }}
            >
                <h4 style={{color: '#282C70'}}>{incident.title}</h4>
                <p>{incident.summary}</p>
                <Button type="link" onClick={showModal} style={{padding: 0}}>
                     Incident Details
                </Button>
                <Modal title={incident.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                    <p>{incident.discription}</p>
                </Modal>
            </Card>
        </IncidentsWrapper>
    )
}

const IncidentsWrapper = styled.div`
    background-color: #ffffff;
`