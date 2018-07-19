import { css } from 'styled-components'

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
