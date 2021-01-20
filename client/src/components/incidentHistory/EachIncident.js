import React from 'react';
import { Card, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
export default function EachIncident({eachIncident}) {
    return (
            <Card
                style={{ marginTop: 16, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
                type="inner"
                title={eachIncident.fields.title}
                extra={eachIncident.fields.date}
            >
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    ghost
                >
                    {eachIncident.fields.resolved && 
                    <Panel header={<h4>Resolved</h4>} key="1">
                        <p>{eachIncident.fields.resolved}</p>
                    </Panel>
                    }
                    {eachIncident.fields.monitoring &&
                    <Panel header={<h3>Monitoring</h3>} key="2">
                        <p>{eachIncident.fields.monitoring}</p>
                    </Panel>
                    }
                    {eachIncident.fields.identified &&
                    <Panel header={<h3>Identified</h3>} key="3">
                        <p>{eachIncident.fields.identified}</p>
                    </Panel>
                    }
                        
                </Collapse>
            </Card>
    )
}
