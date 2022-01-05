import React from 'react';
import styled from 'styled-components';

const Background = ({ children }) => {
  return <Bg>{children}</Bg>;
};

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  background: radial-gradient(
      60% 55% at 50% 8%,
      var(--deepdarkred) 0%,
      var(--black) 100%
    ),
    var(--violet);
  min-height: calc(100vh - 100px);
  ${({ theme }) => theme.device.tablet} {
    min-height: calc(120vh - 100px);
  }
`;

export default Background;
