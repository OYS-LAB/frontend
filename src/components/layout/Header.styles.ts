import styled from 'styled-components';

interface NavigationProps {
  colorType: string;
}

export const Navigation = styled.nav<NavigationProps>`
  width: 100%;
  background-color: ${({ colorType }) => colorType};
`;
