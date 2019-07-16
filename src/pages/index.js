import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'

import Layout from '../components/templates/layout'
import Container from '../components/atoms/container'

// import CircleButton from '../components/atoms/circleButton'
import Heading from '../components/atoms/heading'

import Article from '../components/organisms/article'
import GridLayout from '../components/organisms/gridLayout'


const Index = ({data}) => { 
    console.log(data)
    return (<Layout>
        <Container>
            <Heading>Home</Heading>
            <p style={{padding: "0 1rem"}}>ダメ人間はダメ人間として頑張る。</p>
            <GridLayout>
                {data.allMarkdownRemark.edges.map((item, index) => (
                    <Article key={index} frontmatter={item.node.frontmatter} text={item.node.rawMarkdownBody} />
                ))}
            </GridLayout>
            <div style={{ height: "1000px" }}></div>
        </Container>
    </Layout>)
}

export default Index

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
        node {
            frontmatter {
            title
            tags
            slug
            date
            category
            thumbnail {
                absolutePath
                name
            }
            }
            rawMarkdownBody
        }
        }
    }
}
`