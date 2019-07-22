import React from 'react'

import Layout from '../components/templates/layout'
import Container from '../components/atoms/container'
import ProfileImg from '../components/atoms/profileImg'

const Index = () => (
    <Layout>
        <Container>
            <div style={{textAlign: "center", padding: "0 1.2rem"}}>
                <h1>Profile</h1>
                <div style={{height: "2rem"}} />
                <ProfileImg size="200" />
                <h2 style={{border: "none", lineHeight: "4rem"}}>Daichi Takigawa</h2>
                <p>I'm a software engineer in Tokyo, Japan &nbsp;<span role="img" aria-label="japan">🇯🇵</span></p>
                <p>
                    都内に住む大学生が備忘録としてまとめたブログです。
                </p>
                <h4 style={{border: "none", lineHeight: "3rem"}}>About</h4>
                <p>
                    競技プログラミングもやっています。(AtCoder: Bobyama, 青色, Rating1760)<br />
                </p>
            </div>
            <div style={{height: "500px"}}></div>
        </Container>
    </Layout>
)

export default Index
