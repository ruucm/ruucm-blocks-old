import React from 'react'
import styled from 'styled-components'

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateX(-23px) translateY(-50%);
  -ms-transform: translateX(-50%) translateX(-23px) translateY(-50%);
  transform: translateX(-50%) translateX(-23px) translateY(-50%);
  height: 46px;
  &:before {
    position: absolute;
    content: '';
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 500rem;
    border: 0.2em solid rgba(0, 0, 0, 0.1);
  }
  &:after {
    position: absolute;
    content: '';
    top: 0%;
    left: 50%;
    width: 100%;
    height: 100%;
    animation: loader 0.6s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 0.2em;
    box-shadow: 0px 0px 0px 1px transparent;
  }
  &:before,
  &:after {
    width: 46px;
    height: 46px;
    margin: 0em;
  }

  /* Active Animation */

  @-webkit-keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export const SimpleLoadingSpinner = ({ size }) => <Loader />

export default SimpleLoadingSpinner
