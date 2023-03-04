import styled from 'styled-components';

interface HrProps {
  reverseColor: string;
}

export const HomeObjectSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  position: relative;
`;
interface MessageWrapProps {
  reverseColor: string;
  baseColor: string;
}
export const HomeObjectMessageWrap = styled.div<MessageWrapProps>`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-height: 100vh;
  overflow: scroll;
  pointer-events: auto;
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  p:nth-child(1) {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  p:nth-child(2) {
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 30px;
  }
  button {
    background-color: ${({ baseColor }) => baseColor};
    color: ${({ reverseColor }) => reverseColor};
    border: 2px solid ${({ reverseColor }) => reverseColor};
    padding: 8px 10px;
    border-radius: 20px;
    font-weight: 400;
    font-size: 12px;
  }
  button:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 414px) {
    p:nth-child(1) {
      font-size: 15px;
    }
  }
`;
