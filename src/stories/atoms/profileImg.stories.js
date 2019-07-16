import {storiesOf} from '@storybook/react'
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs"
import React from 'react'

import ProfileImg from '../../components/atoms/profileImg'
import src from '/Users/takigawa/Projects/blog/contents/images/profile.jpg'

const stories = storiesOf("atoms", module)

stories.addDecorator(withKnobs)

stories.add("PforileImg", () => {
    let title = text("title", "title")
    let size = number("size", 60)
    return (
        <React.Fragment>
            <ProfileImg src={src} size={size} title={title} />
        </React.Fragment>
    )
})