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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: props.vertical ? props.vertical : false,
    verticalSwiping: props.verticalSwiping ? props.verticalSwiping : false,
    afterChange: props.afterChange ? props.afterChange : void 0,
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
