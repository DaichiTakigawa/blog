import React from 'react'
import styled from "styled-components"

import Container from '../atoms/container'
import Flex from '../atoms/flex'
import HeaderLogo from '../molecules/header-logo'
import HeaderMenue from '../molecules/header-menue'


const Header = ({title}) => (
    <HeaderWrap>
        <Container>
            <Flex>
            <HeaderLogo title={title} />
            <HeaderMenue 
                items={
                    [{to: "/", text: "Home"},
                     {to: "/profile/", text: "Profile"}]
                } 
             />
             </Flex>
        </Container>
    </HeaderWrap>
)


export default Header

const HeaderWrap = styled.header`
    border-bottom: thin solid #cfcfcf;
    position: sticky;
    top: 0;
    opacity: 0.9;
    background-color: white;
    transition: 0.2s;
    z-index: 1;
    padding: 0 1rem;

    :hover {
        opacity: 1;
    }
`