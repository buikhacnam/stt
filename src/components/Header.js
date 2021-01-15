import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactMailchimpEmailSignupForm } from "react-mailchimp-email-signup-form";
import "react-mailchimp-email-signup-form/dist/react-mailchimp-email-signup-form.css";
import { Modal, Button } from 'antd';

export default function Header() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return (
        <HeaderStyled>
            <NavStyled>
                <div>
                    <Link  to="/"> 
                        <img src='/logostatus.svg' height="40" alt='logo'/>
                    </Link>
                </div>
                <div>
                    <Button size='large' type="primary" onClick={showModal} style={{'float': 'right', backgroundColor: '#5555FF', outline : 'none', border: 'none'}}>
                            Subscribe for update
                    </Button>
                </div>
            </NavStyled>
            <Modal  
                    visible={isModalVisible}  
                    onCancel={handleCancel} 
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Close
                        </Button>]}>
                        <div style={{paddingTop: '1rem'}}>
                            <ReactMailchimpEmailSignupForm
                                elementId="first-email-signup-form"
                                url="https://bravebits.us7.list-manage.com/subscribe/post?u=c5d41bb6ccd71998db0663cca&id=2530aae49c"
                                title="Subscribe to update"
                                subtitle="Get email notifications whenever PageFly creates, updates or resolves an incident."
                            />
                        </div>
                </Modal>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

const NavStyled = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-content: space-between;
`