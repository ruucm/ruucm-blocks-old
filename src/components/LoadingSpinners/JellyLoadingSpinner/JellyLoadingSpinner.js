import React from 'react'
import styled from 'styled-components'

import { center } from '../../../tools/mixins'

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin: 0 auto;
  ${center('y')} #jelly-loader {
    /* animation: loader 5s linear infinite; <-- horizontal anim */
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
  }
  @keyframes loader {
    0% {
      left: 0px;
    }
    100% {
      left: 110%;
    }
  }
  #jelly-box {
    width: 50px;
    height: 50px;
    background: #fff;
    animation: animate 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }
  #jelly-shadow {
    width: 50px;
    height: 5px;
    background: #f3a536;
    opacity: 1;
    position: absolute;
    top: 59px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }
  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
`

export const JellyLoadingSpinner = ({ size }) => (
  <Wrapper>
    <div id="jelly-loader">
      <div id="jelly-shadow" />
      <div id="jelly-box" />
    </div>
  </Wrapper>
)

export default JellyLoadingSpinner
