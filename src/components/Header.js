import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <HeaderStyled>
            <NavStyled>
                <Link  to="/"> 
                    <img src='/logostatus.svg' height="40" alt='logo'/>
                </Link>
            </NavStyled>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
`

const NavStyled = styled.div`
   
`