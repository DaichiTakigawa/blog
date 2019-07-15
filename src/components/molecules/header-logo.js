import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Logo = ({ title }) => (
    <Link to="/">
        <LogoWrap>{title}</LogoWrap>
    </Link>
)

export default Logo

const LogoWrap = styled.h1`
`