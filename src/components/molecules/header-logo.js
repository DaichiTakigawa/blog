import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Logo = ({ title }) => (
    <Link to="/" style={{ textDecoration: 'none' }}>
        <LogoWrap>{title}</LogoWrap>
    </Link>
)

export default Logo

const LogoWrap = styled.h2`
    color: #262626;
    cursor: pointer;
    text-decoration: none;
    border-style: none;

    :hover {
        color: gray;
        transition: all 0.4s;
    }
`