import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Date from '../../components/atoms/date'
import Badge from '../../components/atoms/badge'
import CustomImg from '../../components/atoms/CustomImg'

const Article = ({frontmatter, text, data}) => (
    <ArticleWrap>
        <Link to={frontmatter.slug} style={{textDecoration: "none"}}>
            <CustomImg filename={frontmatter.thumbnail.name} alt="img" />
            <div style={{padding: "0 0.1rem"}}>
                <H5Wrap>{frontmatter.title}</H5Wrap>
                <RowText>{frontmatter.description}</RowText>
                <RowText>{fromatter(text)}</RowText>
                <div>
                    <Date time={frontmatter.date} /><br />
                    <span role="img" aria-label="tag" style={{verticalAlign: "middle"}}> 🏷 </span><Badge primary label={frontmatter.category} />
                    {frontmatter.tags.map((item, index) => (
                        <Badge key={index} label={item}/>
                    ))}
                </div>
            </div>
        </Link>
    </ArticleWrap>
)


export default Article

const ArticleWrap = styled.div`
    padding: 0;
    margin: 1rem;
    padding: 0.5rem;
`

const H5Wrap = styled.h5`
    color: black;
    border: none;
`
const RowText = styled.p`
    color: black;
    line-height: 1rem;
    font-size: 0.8rem;
`

function fromatter(text) {
    return text.replace(/<.*?>/g, '').substring(0, 100) + '...'
}

