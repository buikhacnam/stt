import React, {useContext, useState} from 'react';
import {StatusContext} from '../contexts/AppContexts';
import {Link} from 'react-router-dom';
import { Card, Modal, Button, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Panel } = Collapse;
export default function Incidents() {
    const incident = useContext(StatusContext).incident[0];

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <IncidentsWrapper>
            {(incident && incident.fields.resolved)
            ?
            <Card 
                size="default" 
                title="Last Incident"   
                bordered={false} 
                extra={incident.fields.date} 
            >
                <h4 style={{color: '#282C70'}}>{incident.fields.title}</h4>
                <p><strong>Resolved -&nbsp;</strong>{incident.fields.resolved}</p>
                <Button type="link" onClick={showModal} style={{paddingLeft: 0, marginBottom: '2rem'}}>
                        Incident Details
                </Button>
                <Button>
                    <Link  to="/incidents">Lastest Status History</Link>
                </Button>
            </Card>
            :(incident && !incident.fields.resolved)?
            <Card 
                size="default" 
                title="Last Incident"   
                bordered={false} 
                extra={incident.fields.date} 
            >
                <h4 style={{color: '#282C70'}}>{incident.fields.title}</h4>
                <p>{incident.fields.identified}</p>
               
                <Button>
                    <Link  to="/incidents">Lastest Status History</Link>
                </Button>
            </Card>
            :
            <Card 
                size="default" 
                title="Last Incident"   
                bordered={false} 
                extra={incident.fields.date} 
            >
             <h4 style={{color: '#282C70'}}>No incident</h4> 
            </Card>

            }
            <Modal  title={incident.fields.title} 
                    visible={isModalVisible}  
                    onCancel={handleCancel} 
                    width={1000} 
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Close
                        </Button>]}>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        ghost
                    >
                        {incident.fields.resolved && 
                        <Panel header={<h3>Resolved</h3>} key="1">
                         <p>{incident.fields.resolved}</p>
                        </Panel>
                        }
                        {incident.fields.monitoring &&
                        <Panel header={<h3>Monitoring</h3>} key="2">
                         <p>{incident.fields.monitoring}</p>
                        </Panel>
                        }
                        {incident.fields.identified &&
                        <Panel header={<h3>Identified</h3>} key="3">
                          <p>{incident.fields.identified}</p>
                        </Panel>
                        }
                        
                    </Collapse>
            </Modal>
        </IncidentsWrapper>
    )
}

const IncidentsWrapper = styled.div`
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`