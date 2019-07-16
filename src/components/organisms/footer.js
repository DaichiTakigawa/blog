import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {scale} from '../../utils/typography'

import ProfileImg from '../../components/atoms/profileImg'

const Footer = ({data}) => (
    <FooterWrap>
        <CenterItems>
        <div>
            <ProfileImg size="60" title="img" />
        </div>
        <Link to="/profile/" style={{ color: "white"}}>
            <span style={scale(-1/5)}>Profile</span>
        </Link>
        <p style={{color: "white", ...scale(-1/2)}}>© MEMO</p>
        </CenterItems>
    </FooterWrap>
)

export default Footer

const FooterWrap = styled.footer`
    background-color: #343a40;
    padding-top: 6rem;
    padding-bottom: 3rem;
`
const CenterItems = styled.div`
    text-align: center;
`