import styled, { keyframes } from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 30px;
  padding: 6px 0 7px;
  top: 0;
`;

const slideInLeft = keyframes`
 from { transform: translate(0px, 0px); }
  to { transform: translate(100%, 0px); }
}
`;

export const Header = styled.div`
  width: calc(100% - 100px);
  border-bottom: 1px solid #000;
  margin: 0 auto;
`;

export const Message = styled.p`
  display: inline-block;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 10px;
  animation-name: ${slideInLeft};
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  text-transform: uppercase;
`;
