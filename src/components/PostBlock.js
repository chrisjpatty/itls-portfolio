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
          <Title className="title">{title}</Title>
        </Link>
      </Wrapper>
    )
  }
}

const linkCSS = color => css({
  '&:hover': {
    img: {
      transform: 'translate(8px, -8px)',
      boxShadow: `-15px 15px 0px 0px ${color}`
    },
    '& .title': {
      opacity: 1
    }
  }
})

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 30
})

const Preview = styled('img')({
  width: '100%',
  height: '100%',
  maxWidth: 400,
  // maxHeight: 400,
  transition: 'transform 400ms, box-shadow 400ms'
})

const Title = styled('h2')({
  textAlign: 'center',
  color: 'rgb(255, 255, 255)',
  opacity: .7,
  textDecoration: 'none',
  transition: 'opacity 400ms',
  fontWeight: 400
})
