import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"

const Menue = ({ items }) => (
    <MenueWrap>
        {items.map((item, index) => (
            <span key={index}>
                <Link to={item.to}>
                    <MenueItem>{item.text}</MenueItem>
                </Link>
            </span>
        ))}
    </MenueWrap>
)

export default Menue

const MenueWrap = styled.div`
`
const MenueItem = styled.p`
`