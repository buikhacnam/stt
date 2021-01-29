import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import "react-mailchimp-email-signup-form/dist/react-mailchimp-email-signup-form.css";
import { Modal, Button } from 'antd';
const linkPageFly = 'https://apps.shopify.com/pagefly?utm_campaign=app-listing&utm_source=website&utm_medium=mainsite&utm_content=status-page';

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
                        <img src='/logostatus.svg' height="40" alt='logo' style={{ marginBottom: '0.5rem'}}/>
                    </Link>
                </div>
               
                <div>
                    <Button type="primary" onClick={showModal} style={{'float': 'right', backgroundColor: '#5555FF', outline : 'none', border: 'none',marginLeft: '1rem', marginBottom: '0.5rem'}}>
                            Subscribe for updates
                    </Button>
                    <Button type="primary" style={{'float': 'right', backgroundColor: '#5555FF', outline : 'none', border: 'none', }}><a href={linkPageFly}>Install Pagefly</a></Button>
                </div>
                
            </NavStyled>
            <Modal  
                    visible={isModalVisible}  
                    onCancel={handleCancel} 
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Close
                        </Button>]}>
                        
                       
                            <h2 style={{textAlign: 'center'}}>Subscribe for updates</h2>
                            <p style={{textAlign: 'center', fontSize: '1rem'}}>Get email notifications whenever Pagefly creates, updates or resolves an incident.</p>
                            <form action="https://email.pagefly.io/subscribe" method="POST" accept-charset="utf-8">
                            
                                	<input type="email" name="email" id="email"/><br/><div style={{display:"none"}}>
	<label for="hp">HP</label><br/>
	<input type="text" name="hp" id="hp"/>
	</div>
	<input type="hidden" name="list" value="IHlLSYELo7etbeMK892kPv4w"/>
	<input type="hidden" name="subform" value="yes"/>
	<input type="submit" name="submit" id="submit"/>
	
                            
                        </form> 
                        

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
   @media (max-width: 600px) {
        grid-template: none;
    }
`