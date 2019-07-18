import React from 'react'
import styled from 'styled-components'

const Date = ({time}) => {
    let date = time.split(' ')[0].replace(/-/g, '/');
    return (
        <DateWrap> 🗓 {date}</DateWrap>
    )
}

export default Date

const DateWrap = styled.span`
    color: grey;
    margin-bottom: 0.02rem;
`
