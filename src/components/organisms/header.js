import React from 'react'
import styled from "styled-components"

import Container from '../atoms/container'
import HeaderLogo from '../molecules/header-logo'
import HeaderMenue from '../molecules/header-menue'


const Header = ({title}) => (
    <HeaderWrap>
        <Container>
            <HeaderLogo title={title} />
            <HeaderMenue 
                items={
                    [{to: "/", text: "Home"},
                     {to: "/profile/", text: "Profile"}]
                } 
             />
        </Container>
    </HeaderWrap>
)


export default Header

const HeaderWrap = styled.header`
`