import React from 'react'

import {siteMetadata} from '../../../gatsby-config'
import Header from '../organisms/header'

const Layout = ({children}) => (
    <div>
        <Header title={siteMetadata.title}/>
        {children}
    </div>
)

export default Layout
