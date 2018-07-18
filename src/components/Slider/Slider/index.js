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
import slickThemeStyle from './slick-theme-style'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return <div className={className + ' next-arrow'} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return <div className={className + ' prev-arrow'} onClick={onClick} />
}

const Wrapper = styled.div`
  ${slickStyle};
  ${slickThemeStyle};
`

const SliderComp = props => {
  const otherProps = Object.assign({}, props)
  delete otherProps.children
  var settings = {
    // dots: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
