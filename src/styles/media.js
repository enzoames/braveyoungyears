// Copyright 2019 BraveYoungYears Inc. All Rights Reserved.

import { css } from 'styled-components';

export const breakpoints = {
  xxs: 375,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
