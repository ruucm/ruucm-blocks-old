import { css } from 'styled-components'
import { sizes } from './media'

export const center = type => {
  if (type == 'y')
    return css`
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
      position: absolute;
    `
  else if (type == 'x')
    return css`
      left: 50%;
      right: auto;
      transform: translateX(-50%);
      position: absolute;
    `
  else if (type == 'xy')
    return css`
      left: 50%;
      top: 50%;
      bottom: auto;
      right: auto;
      transform: translateX(-50%) translateY(-50%);
      position: absolute;
    `
}

export const transition = (type, duration) => {
  return css`
    -webkit-transition: ${type} ${duration + 'ms'}; /* Safari */
    transition: ${type} ${duration + 'ms'};
  `
}

export const centerIconA = (iconSize, textSize) => {
  return css`
    > span {
      font-size: ${iconSize};
      vertical-align: middle;
    }
    > a {
      font-size: ${textSize};
      display: inline-block;
      vertical-align: middle;
    }
  `
}

export const wem = pxSize => {
  let baseScreenSize = 1920

  if (screen.width > sizes.phone) return (pxSize / baseScreenSize) * 100 + 'vw'
  else return (pxSize / baseScreenSize) * 2.5 * 100 + 'vw'
}

export const wem2 = pxSize => {
  let baseScreenSize = 1440

  if (screen.width > sizes.phone) return (pxSize / baseScreenSize) * 100 + 'vw'
  else return (pxSize / baseScreenSize) * 2.5 * 100 + 'vw'
}

export const fem2 = pxSize => {
  let baseScreenSize = 1400

  if (screen.width > baseScreenSize) return pxSize + 'px'
  // srceen is bigger than 1400, return original pixel sizes
  else if (screen.width > sizes.phone)
    return (pxSize / baseScreenSize) * 100 + 'vw'
  else return (pxSize / baseScreenSize) * 2.5 * 100 + 'vw'
}
