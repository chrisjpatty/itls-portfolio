import React from 'react'
import styled from 'react-emotion'
import { Link } from 'react-static'
import { css } from 'emotion'
import * as Vibrant from 'node-vibrant'

export default class PostBlock extends React.Component{
  state = {
    color: '#fff'
  }
  componentDidMount = () => {
    Vibrant.from(this.props.post.data.thumbnail).getPalette().then(palette => {
      const { Vibrant: {r,g,b} } = palette;
      this.setState({color: `rgba(${r},${g},${b},.8)`})
    })
  }
  render(){
    const { post } = this.props;
    const { thumbnail, title, slug } = post.data;
    console.log(post);
    return(
      <Wrapper>
        <Link to={`/${slug}`} className={linkCSS(this.state.color)}>
          <Preview src={thumbnail}/>
          <Title>{title}</Title>
        </Link>
      </Wrapper>
    )
  }
}

const linkCSS = color => css({
  '&:hover': {
    img: {
      transform: 'scale(1.03)',
      boxShadow: `0px 0px 100px -4px ${color}`
    }
  }
})

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const Preview = styled('img')({
  width: '100%',
  height: '100%',
  maxWidth: 400,
  // maxHeight: 400,
  transition: 'transform 500ms, box-shadow 400ms'
})

const Title = styled('h2')({
  textAlign: 'center',
  color: '#fff',
  textDecoration: 'none'
})
