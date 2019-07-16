import React from 'react'
import styled from 'styled-components'

const Heading = ({children}) => (
    <H1Wrap>{children}</H1Wrap>
)

export default Heading

const H1Wrap = styled.h1`
    font-size: 4rem;
    color: #212121;
    border: none;
    padding: 0rem 1rem;
    margin-bottom: 1rem;
`