import React from 'react'
import styled from 'react-emotion'
import selfieSrc from '../selfie.jpg'

const AboutBlock = () => (
  <Wrapper>
    <Column style={{maxWidth: 300}}>
      <Photo src={selfieSrc} />
    </Column>
    <Column style={{paddingLeft: 20}}>
      <Title>Christopher Patty</Title>
      <Description>
        I'm a web developer and designer specializing in building beautiful, robust React applications. I also contribute to the open-source community with over 10k downloads on NPM. Reach out to me on <a href="https://twitter.com/chrisjpatty">Twitter</a> if you want something designed.
      </Description>
    </Column>
  </Wrapper>
)
export default AboutBlock

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 40
})

const Column = styled('div')({
  width: '50%',
  maxWidth: 400
})

const Photo = styled('img')({
  maxWidth: '100%'
})

const Title = styled('h2')({
  // textAlign: 'center'
  fontSize: 30
})

const Description = styled('p')({
  fontSize: 21,
  lineHeight: 1.6,
  '& a': {
    color: '#c13eff',
    textDecoration: 'underline',
    textDecorationStyle: 'wavy'
  }
})
