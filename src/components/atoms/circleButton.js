import React from 'react'
import styled from 'styled-components'

const CircleButton = ({text, onClick}) => (
    <ButtonWrap type="button" onClick={onClick}>{text}</ButtonWrap>
)

export default CircleButton

const ButtonWrap = styled.button`
    border-radius: 50%;
    background-color: white;
    color: #525252;
    border: none;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    cursor: pointer;

    :hover {
        background-color: #525252;
        color: white;
        transition: all 0.4s;
    }
`