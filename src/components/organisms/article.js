import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {rhythm} from '../../utils/typography'

import Date from '../../components/atoms/date'
import Badge from '../../components/atoms/badge'
import CustomImg from '../../components/atoms/CustomImg'

const Article = ({frontmatter, text, data}) => (
    <ArticleWrap>
        <Link to={frontmatter.slug} style={{textDecoration: "none"}}>
            <CustomImg filename={frontmatter.thumbnail.name} alt="img" />
            <H5Wrap>{frontmatter.title}</H5Wrap>
            <RowText>{fromatter(text)}</RowText>
            <div>
                <Date time={frontmatter.date} />
                <span> 🏷 </span><Badge primary label={frontmatter.category} />
                {frontmatter.tags.map((item, index) => (
                    <Badge key={index} label={item}/>
                ))}
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
    let lines = text.split('\n');
    lines = lines.map((line) => (
        line.replace(/^[#.-\s1]+/g, '')
    ))
    console.log(lines.join(''))
    return lines.join('')
}

