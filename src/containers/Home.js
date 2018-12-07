import React from 'react'
import { withSiteData, withRouteData, Link } from 'react-static'
import PostBlock from '../components/PostBlock'
import AboutBlock from '../components/AboutBlock'
import styled from 'react-emotion'

class Home extends React.Component{
  render(){
    const { posts } = this.props;
    return (
      <div>
        <GlobalHeader/>
        <AboutBlock/>
        <PostsWrapper>
          {
            posts.map((post, i) => (
              <PostBlock post={post} key={i} />
            ))
          }
        </PostsWrapper>
      </div>
    )
  }
}
Home = withRouteData(withSiteData(Home))

export const GlobalHeader = () => (
  <Header>
    <Link to='/'>
      <Title>Chris Patty's ITLS 5230 Portfolio</Title>
    </Link>
    <RightAlign>
      <Link to='/contact'>Contact</Link>
    </RightAlign>
  </Header>
)

const PostsWrapper = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 900,
  margin: '0 auto'
})

const RightAlign = styled('div')({
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: 30,
  '& a': {
    color: '#ffffff'
  }
})

const Title = styled('h1')({
  padding: 30,
  margin: 0
})

const Header = styled('header')({
  marginBottom: 50,
  display: 'flex',
  flexDirection: 'row',
  '& a': {
    color: '#ffffff'
  }
})

export default Home
