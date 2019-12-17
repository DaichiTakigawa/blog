import React from 'react'

import {siteMetadata} from '../../../gatsby-config'
import Header from '../organisms/header'
import Footer from '../organisms/footer'
import Helmet from '../atoms/helmet'

const Layout = ({children}) => (
    <div>
        <Helmet/>
        <Header title={siteMetadata.title}/>
        {children}
        <Footer />
    </div>
)

export default Layout
