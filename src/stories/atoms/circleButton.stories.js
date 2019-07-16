import {storiesOf} from '@storybook/react'
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs"
import React from 'react'

import CircleButton from '../../components/atoms/circleButton'

const stories = storiesOf("atoms", module)

stories.addDecorator(withKnobs)

stories.add("CircleButton", () => {
    let text = text("text", "1")
    return (
        <React.Fragment>
            <CircleButton text={text} />
        </React.Fragment>
    )
})