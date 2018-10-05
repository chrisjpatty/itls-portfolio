import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import PostBlock from '../components/PostBlock'
import styled from 'react-emotion'

class Home extends React.Component{
  render(){
    const { posts } = this.props;
    return (
      <div>
        <Header>
          <Title>Chris Patty's ITLS 5230 Portfolio</Title>
        </Header>
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

const PostsWrapper = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 900,
  margin: '0 auto'
})

const Title = styled('h1')({
  padding: 30,
  margin: 0
})

const Header = styled('header')({
  marginBottom: 50
})

export default Home
