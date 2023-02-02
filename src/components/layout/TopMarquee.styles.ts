import styled, { keyframes } from 'styled-components';

interface Props {
  borderColor: string;
}

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 30px;
  padding: 6px 0 7px;
  top: 0;
`;

const slideInLeft = keyframes`
 from { transform: translate(0%, 0px); }
  to { transform: translate(100%, 0px); }
}
`;

export const Header = styled.div<Props>`
  width: calc(100% - 50px);
  padding-bottom: 5px;
  border-bottom: 1px solid ${props => props.borderColor};
`;

export const Message = styled.p`
  display: inline-block;
  width: 100%;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 10px;
  animation-name: ${slideInLeft};
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  text-transform: uppercase;
`;
