import React from 'react'
import {Link} from 'gatsby'
import styled from "styled-components"

const Menue = ({ items }) => (
    <MenueWrap>
        {items.map((item, index) => (
            <span key={index}>
                <Link to={item.to}  style={{ textDecoration: 'none' }}>
                    <MenueItem>{item.text}</MenueItem>
                </Link>
            </span>
        ))}
    </MenueWrap>
)

export default Menue

const MenueWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto 0 0 auto;
`
const MenueItem = styled.h4`
    color: #262626;
    cursor: pointer;
    padding: 0 0.5rem;

    :hover {
        color: gray;
        transition: all 0.4s;
    }
`