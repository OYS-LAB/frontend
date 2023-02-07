import styled, { keyframes } from 'styled-components';

interface Props {
  borderColor: string;
}

export const Wrap = styled.div`
  position: fixed;
  width: 100%;
  padding: 3px 0;
  top: 0;
`;

const slideInLeft = keyframes`
 from { transform: translate(-18%, 0px); }
  to { transform: translate(104%, 0px); }
}
`;

export const Header = styled.div<Props>`
  width: calc(100% - 50px);
  padding-bottom: 5px;
  border-bottom: 1px solid ${props => props.borderColor};
  @media (max-width: 1023px) {
    border-bottom-width: 0.4px;
  }
`;

export const Message = styled.p`
  display: inline-block;
  width: 100%;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: 10pt;
  animation-name: ${slideInLeft};
  animation-duration: 25s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  text-transform: uppercase;
  @media (max-width: 1023px) {
    font-size: 10px;
  }
`;
