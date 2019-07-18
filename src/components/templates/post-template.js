import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import Layout from '../../components/templates/layout'
import Container from '../../components/atoms/container'
import CustomImg from '../../components/atoms/CustomImg'
import Date from '../../components/atoms/date'
import Badge from '../../components/atoms/badge'


const PostTemplate = ({data}) => {
    console.log(data)
    const post = data.markdownRemark
    return (
    <Layout>
        <Container>
          <div style={{padding: "0 1.4rem"}}>
              <Title>{post.frontmatter.title}</Title>
              <Date time={post.frontmatter.date} />
              <span style={{paddingLeft: "1rem", verticalAlign: "middle"}}> 🏷 </span><Badge primary label={post.frontmatter.category} />
                  {post.frontmatter.tags.map((item, index) => (
                      <Badge key={index} label={item}/>
              ))}
              <p style={{marginTop: "2rem"}}>{post.frontmatter.description}</p>
              <CustomImg filename={post.frontmatter.thumbnail.name} alt="thumbnail" />
              <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            </div>
        </Container>
    </Layout>)
}

export default PostTemplate

const Title = styled.h1`
    color: #212121;
    border: none;
`

export const query = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      slug
      category
      date
      tags
      title
      description
      thumbnail {
        name
      }
    }
    html
  }
}
`