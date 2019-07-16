import {storiesOf} from '@storybook/react'
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs"
import React from 'react'

import Header from '../../components/organisms/header'

const stories = storiesOf("organisms", module)

stories.addDecorator(withKnobs)

stories.add("Header", () => {
    const label = text("label", "MEMO")
    return (
        <React.Fragment>
            <Header title={label} />
        </React.Fragment>
    )
})