import React from 'react'

import {siteMetadata} from '../../../gatsby-config'
import Header from '../organisms/header'
import Footer from '../organisms/footer'

const Layout = ({children}) => (
    <div>
        <Header title={siteMetadata.title}/>
        {children}
        <Footer />
    </div>
)

export default Layout
