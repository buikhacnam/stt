import React, {useContext, useState} from 'react';
import {StatusContext} from '../contexts/AppContexts';
import { Card, Modal, Button, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Panel } = Collapse;
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
                <p><strong>Resolved - </strong>{incident.discription.resolved}</p>
                <Button type="link" onClick={showModal} style={{padding: 0}}>
                     Incident Details
                </Button>
                <Modal title={incident.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000}>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        ghost
                    >
                        <Panel header={<h3>Resolved</h3>} key="1">
                        <p>{incident.discription.resolved}</p>
                        </Panel>
                        <Panel header={<h3>Monitoring</h3>} key="2">
                        <p>{incident.discription.monitoring}</p>
                        </Panel>
                        <Panel header={<h3>Identified</h3>} key="3">
                        <p>{incident.discription.identified}</p>
                        </Panel>
                        
                    </Collapse>
                </Modal>
            </Card>
        </IncidentsWrapper>
    )
}

const IncidentsWrapper = styled.div`
    background-color: #ffffff;
`