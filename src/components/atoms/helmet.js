import React from 'react'
import Helmet from 'react-helmet'

export default () => (
  <Helmet
      title={ "Takigawa Memo" }
      meta={[
          {
              name: 'description',
              content: '備忘録'
          }
      ]}   
  />
)