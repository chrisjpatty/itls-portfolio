import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import styled from 'react-emotion'

export default withRouteData(({ post }) => (
  <Wrapper className="blog-post">
    <ImageWrapper>
      <Image className="image" src={post.data.image} alt="" />
    </ImageWrapper>
    <TextWrapper>
      <Title>{post.data.title}</Title>
      <Markdown source={post.content} escapeHtml={false} />
    </TextWrapper>
  </Wrapper>
))

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

const TextWrapper = styled('article')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 800,
  alignSelf: 'center',
  marginTop: 20,
  padding: '0px 15px'
})

const ImageWrapper = styled('div')({
  alignSelf: 'center'
})

const Image = styled('img')({
  maxWidth: '100%',
  maxHeight: '100vh'
})

const Title = styled('h1')({
  width: '100%'
})
