import React from 'react'
import styled from 'styled-components'

import src from '../../../contents/images/profile.jpg'

const ProfileImg = ({title, size}) => (
    <Img src={src} size={size} alt={title}/>
)

export default ProfileImg

const Img = styled.img`
  border-radius:  50%;
  width: ${props => props.size || 60}px;
`