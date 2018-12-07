import React from 'react'
import { GlobalHeader } from './Home'
import styled from 'react-emotion'

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <Wrapper>
          <Body>
            <Title>Contact</Title>
            <Paragraph>
              I'm available for freelance or part-time work. You can find more
              of my work on{' '}
              <a href="https://dribbble.com/chrisjpatty">Dribbble</a>, or reach
              out to me on <a href="https://twitter.com/chrisjpatty">Twitter</a>.
            </Paragraph>
          </Body>
        </Wrapper>
      </div>
    )
  }
}

const Wrapper = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const Body = styled('div')({
  width: '100%',
  maxWidth: 600
})

const Title = styled('h1')({
  textAlign: 'center'
})

const Paragraph = styled('p')({
  '& a': {
    color: '#c13eff',
    textDecoration: 'underline',
    textDecorationStyle: 'wavy'
  }
})
