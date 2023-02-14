import styled, { keyframes } from 'styled-components';
import flakeDarkIcon from 'images/icon-dark-flake.png';
import flakeLightIcon from 'images/icon-light-flake.png';
import { ColorModeState } from 'atoms/colorMode';

interface IconProps {
  colorMode: ColorModeState;
}

const getFlakeIconSrc = (colorMode: ColorModeState) =>
  colorMode === 'DARK' ? flakeDarkIcon.src : flakeLightIcon.src;

export const Flakes = styled.div`
  width: 100%;
`;
export const Flake = styled.div`
  display: flex;
  top: -10%;
  z-index: 1000;
  width: 100%;
  padding-top: 13px;
  @media (max-width: 1023px) {
    padding-top: 5px;
  }
`;
const Icon = styled.i`
  display: block;
  width: 8px;
  height: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
`;

const FlakesFall = keyframes`
0% {
    top: -10%;
  }
  100% {
    top: 100%;
  }     
`;
const FlakeShake = keyframes`
 0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(80px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const FlakeIcon = styled(Icon)<IconProps>`
  background-image: url('${({ colorMode }) => getFlakeIconSrc(colorMode)}');
  position: fixed;
  top: -10%;
  z-index: 9999;
  width: 8px;
  height: 8px;
  user-select: none;
  cursor: default;
  animation-name: ${FlakesFall}, ${FlakeShake};
  animation-duration: 10s, 3s;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;

  &:nth-child(1) {
    left: 1%;
    animation-delay: 0s, 0s;
  }
  &:nth-child(2) {
    left: 10%;
    animation-delay: 1s, 1s;
  }
  &:nth-child(3) {
    left: 20%;
    animation-delay: 6s, 0.5s;
  }
  &:nth-child(4) {
    left: 30%;
    animation-delay: 4s, 2s;
  }
  &:nth-child(5) {
    left: 40%;
    animation-delay: 2s, 2s;
  }
  &:nth-child(6) {
    left: 50%;
    animation-delay: 8s, 3s;
  }
  &:nth-child(7) {
    left: 60%;
    animation-delay: 6s, 2s;
  }
  &:nth-child(8) {
    left: 70%;
    animation-delay: 2.5s, 1s;
  }
  &:nth-child(9) {
    left: 80%;
    animation-delay: 1s, 0s;
  }
  &:nth-child(10) {
    left: 90%;
    animation-delay: 3s, 1.5s;
  }
  &:nth-child(10) {
    left: 90%;
    animation-delay: 3s, 1.5s;
  }
`;
