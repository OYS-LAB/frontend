import styled, { keyframes } from 'styled-components';

export const Section = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  padding: 6px 50px 7px;
`;

const slideInLeft = keyframes`
 from { transform: translate(0px, 0px); }
  to { transform: translate(100%, 0px); }
}
`;

export const Header = styled.p`
  font-size: 10px;
  animation-name: ${slideInLeft};
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
`;
