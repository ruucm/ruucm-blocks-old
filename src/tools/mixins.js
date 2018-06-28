import { css } from 'styled-components'

export const center = (type) => {
  if (type == 'y')
    return css`
      top: 50%;
      bottom: auto;
      transform: translateY(-50%);
    `
  else if (type == 'x')
    return css`
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    `
  else if (type == 'xy')
    return css`
      left: 50%;
      top: 50%;
      bottom: auto;
      right: auto;
      transform: translateX(-50%) translateY(-50%);
    `
}

export const transition = (type, duration) => {
  return css`
    -webkit-transition: ${type} ${duration + 'ms'}; /* Safari */
    transition: ${type} ${duration + 'ms'};
  `
}