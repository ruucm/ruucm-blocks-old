import React from 'react'
import styled, { css } from 'styled-components'
import { center } from '../../../tools/mixins'

const FerryWrapper = styled.span`
  position: absolute;
  ${center('y')};
  left: calc(50% - 43px);
  display: inline-block;
  width: 86px;
  height: 89px;
  border-radius: 3px 0 0 0;
  z-index: 1;
  animation: bop 0.48s ease-in-out alternate infinite;

  @keyframes bop {
    to {
      transform: translateY(-40%);
    }
  }
`
const Ferry = () => {
  return (
    <svg
      width="86"
      height="100"
      viewBox="0 0 86 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.1996 0L85.0675 23.8459L42.2585 46.2713L21.0405 45.8984L0 33.9489L0.266335 22.3366L43.1996 0Z"
        transform="translate(0.35498 33.4161)"
        fill="#E33E33"
      />
      <path
        d="M43.1996 0L85.0675 23.8459L42.2585 46.2713L21.0405 45.8984L0 33.9489L0.266335 22.3366L43.1996 0Z"
        transform="translate(0.35498 33.4161)"
        fill="#E33E33"
      />
      <path
        d="M43.1641 -1.35465e-07L42.8089 20.3303L0 42.7379L0.355114 22.4254L43.1641 -1.35465e-07Z"
        transform="translate(42.2583 57.2621)"
        fill="#992929"
      />
      <path
        d="M43.1641 -1.35465e-07L42.8089 20.3303L0 42.7379L0.355114 22.4254L43.1641 -1.35465e-07Z"
        transform="translate(42.2583 57.2621)"
        fill="#992929"
      />
      <path
        d="M0 20.3125L0.355114 0L21.5732 0.37287L21.218 20.6854L0 20.3125Z"
        transform="translate(21.0405 79.3146)"
        fill="#A82C2C"
      />
      <path
        d="M0 20.3125L0.355114 0L21.5732 0.37287L21.218 20.6854L0 20.3125Z"
        transform="translate(21.0405 79.3146)"
        fill="#A82C2C"
      />
      <path
        d="M21.3956 11.9496L21.0405 32.2621L0 20.3125L0.355114 -5.4186e-07L21.3956 11.9496Z"
        transform="translate(0 67.3651)"
        fill="#CC3232"
      />
      <path
        d="M21.3956 11.9496L21.0405 32.2621L0 20.3125L0.355114 -5.4186e-07L21.3956 11.9496Z"
        transform="translate(0 67.3651)"
        fill="#CC3232"
      />
      <path
        d="M0.355114 11.6122L0.621449 -1.35465e-07L0.266335 20.3303L0 31.9247L0.355114 11.6122Z"
        transform="translate(0 55.7528)"
        fill="#CC3232"
      />
      <path
        d="M0.355114 11.6122L0.621449 -1.35465e-07L0.266335 20.3303L0 31.9247L0.355114 11.6122Z"
        transform="translate(0 55.7528)"
        fill="#CC3232"
      />
      <path
        d="M14.5064 5.4186e-07L42.4716 16.0866L28.1427 23.5973L1.08372e-06 7.59943L14.5064 5.4186e-07Z"
        transform="translate(30.4688 20.6854)"
        fill="#FEFEFE"
      />
      <path
        d="M14.5064 5.4186e-07L42.4716 16.0866L28.1427 23.5973L1.08372e-06 7.59943L14.5064 5.4186e-07Z"
        transform="translate(30.4688 20.6854)"
        fill="#FEFEFE"
      />
      <path
        d="M14.7372 2.7093e-07L14.3288 23.5263L-2.16744e-06 31.0369L0.408376 7.51065L14.7372 2.7093e-07Z"
        transform="translate(58.2031 36.772)"
        fill="#B2B2B2"
      />
      <path
        d="M14.7372 2.7093e-07L14.3288 23.5263L-2.16744e-06 31.0369L0.408376 7.51065L14.7372 2.7093e-07Z"
        transform="translate(58.2031 36.772)"
        fill="#B2B2B2"
      />
      <path
        d="M28.5511 15.9979L28.1428 39.5241L-2.16744e-06 23.5085L0.408382 -2.7093e-07L28.5511 15.9979Z"
        transform="translate(30.0605 28.2848)"
        fill="#E5E5E5"
      />
      <path
        d="M28.5511 15.9979L28.1428 39.5241L-2.16744e-06 23.5085L0.408382 -2.7093e-07L28.5511 15.9979Z"
        transform="translate(30.0605 28.2848)"
        fill="#E5E5E5"
      />
      <path
        d="M7.43963 -1.08372e-06L-1.08372e-06 4.29688L7.43963 8.59375V-1.08372e-06Z"
        transform="translate(43.5723 1.17188)"
        fill="#E33E33"
      />
      <path
        d="M0.30335 33.6825H0.818259C0.97806 33.6825 1.12011 33.5405 1.12011 33.3807V0.301847C1.12011 0.142045 0.97806 -2.16744e-06 0.818259 -2.16744e-06H0.30335C0.143549 -2.16744e-06 0.00150167 0.142045 0.00150167 0.301847V33.3807C-0.016254 33.5582 0.125794 33.6825 0.30335 33.6825Z"
        transform="translate(50.9575)"
        fill="#E5E5E5"
      />
    </svg>
  )
}

const Waves = styled.span`
  position: absolute;
  bottom: -37px;
  display: block;
  left: 0;
  width: 100px;
  height: 50px;
  background-size: 133% 144%;
  animation: sail 4s linear infinite;

  ${props =>
    props.waveColor &&
    css`
      background-image: url(${getWaveImage(props.waveColor)});
    `};

  @keyframes sail {
    to {
      background-position: 400px 0;
    }
  }
`

export const LittleFerryLoader = props => (
  <FerryWrapper>
    <Ferry />
    <Waves {...props} />
  </FerryWrapper>
)

function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(
      match,
      p1
    ) {
      return String.fromCharCode('0x' + p1)
    })
  )
}

function getWaveImage(color) {
  const waveString =
    '<svg width="155" height="85" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="none" id="canvas_background" height="87" width="157" y="-1" x="-1"/><g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid"><rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/></g></g><g><title>Layer 1</title><g id="svg_9"><ellipse ry="26" rx="26" id="svg_1" cy="33.5" cx="34.5" stroke-width="1.5" fill="' +
    color +
    '"/><ellipse ry="26" rx="26" id="svg_3" cy="33.5" cx="63.868493" stroke-width="1.5" fill="' +
    color +
    '"/><ellipse ry="26" rx="26" id="svg_6" cy="33.5" cx="91.71888" stroke-width="1.5" fill="' +
    color +
    '"/><ellipse ry="26" rx="26" id="svg_7" cy="33.5" cx="121.087373" stroke-width="1.5" fill="' +
    color +
    '"/><rect id="svg_8" height="46" width="140.000006" y="32.5" x="7.5" stroke-width="1.5" fill="' +
    color +
    '"/></g></g></svg>'
  const waveImage = 'data:image/svg+xml;base64,' + b64EncodeUnicode(waveString)

  return waveImage
}

export default LittleFerryLoader
