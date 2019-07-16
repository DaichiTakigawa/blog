import React from 'react'
import styled from 'styled-components'


const Badge = ({primary, label}) => (
    <BadgeWrap primary={primary}>{label}</BadgeWrap>
)

export default Badge 

const BadgeWrap = styled.div`
  background-color: ${props => props.primary ? "#575757" : "white"};
  color: ${props => props.primary ? "white" : "grey"};
  border: grey;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 0.8rem;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  padding: 0 0.3rem;
  margin-right: ${props => props.primary ? "0.3rem" : "0"};
`