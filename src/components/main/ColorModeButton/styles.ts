import styled from 'styled-components';
import darkLightIcon from 'images/icon-dark-light.png';

interface DarkMode {
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  backgroundColor2: string;
  textColor2: string;
  colorButtonDisplay: string;
}

export const Button = styled.button<DarkMode>`
  background-color: transparent;
  border: none;
  padding: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-bottom: 38px;
  &:hover {
    cursor: pointer;
  }
  &: active, focus {
    border: none;
  }
  margin: ${({ colorButtonDisplay }) => colorButtonDisplay};
`;

const Icon = styled.i`
  display: block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
`;

export const DarkLightIcon = styled(Icon)`
  background-image: url('${darkLightIcon.src}');
`;
