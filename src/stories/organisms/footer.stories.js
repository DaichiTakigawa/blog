import {storiesOf} from '@storybook/react'
import { withKnobs, boolean, number, text } from "@storybook/addon-knobs"
import React from 'react'

import Footer from '../../components/organisms/footer'

const stories = storiesOf("organisms", module)

stories.addDecorator(withKnobs)

stories.add("Footer", () => {
    return (
        <React.Fragment>
            <Footer />
        </React.Fragment>
    )
})