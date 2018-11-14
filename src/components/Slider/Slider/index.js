/**
 *
 * Slider
 *
 */

import React from 'react'
import Slider from 'react-slick'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

import slickStyle from './slick-style'
import { center } from 'ruucm-blocks/tools/mixins'

const StyledArrow = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  z-index: 1;
  ${center('y')};
  ${props =>
    props.next &&
    css`
      right: 0;
    `} ${props =>
    props.prev &&
    css`
      left: 0;
    `};
`
const DotsWrapper = styled.div`
  background: beige;
  text-align: center;
  > li {
    list-style: none;
    display: inline-block;
    &.slick-active {
      button {
        background: blue;
      }
    }
  }
`
const SampleNextArrow = props => {
  return <StyledArrow next onClick={props.onClick} />
}
const SamplePrevArrow = props => {
  return <StyledArrow prev onClick={props.onClick} />
}
const SampleAppendDots = dots => {
  return <DotsWrapper>{dots}</DotsWrapper>
}
const defaultSpeed = 500
const defaultAutoplaySpeed = 2000

const Wrapper = styled.div`
  ${slickStyle};
`

const SliderComp = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children
  var settings = {
    dots: true,
    appendDots: props.appendDots ? props.appendDots : SampleAppendDots,
    infinite: true,
    speed: props.speed ? props.speed : defaultSpeed,
    autoplay: props.autoplay == false ? false : true,
    autoplaySpeed: props.autoplaySpeed
      ? props.autoplaySpeed
      : defaultAutoplaySpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: props.nextArrow ? props.nextArrow : <SampleNextArrow />,
    prevArrow: props.prevArrow ? props.prevArrow : <SamplePrevArrow />,
  }
  return (
    <Wrapper style={props.style}>
      {props.children ? (
        <Slider {...settings}>{props.children}</Slider>
      ) : (
        'add slider items first'
      )}
    </Wrapper>
  )
}

export default SliderComp
