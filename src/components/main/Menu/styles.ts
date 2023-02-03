import styled from 'styled-components';
import darkLightIcon from 'images/icon-dark-light.png';
import searchIcon from 'images/icon-search.png';

interface iProps {
  searchButtonDisplay: string;
}
export const Main = styled.section`
  text-align: center;
  clear: both;
  margin-top: 30px;
`;
export const MenuSec = styled.div`
  display: inline-block;
`;
export const BtnSec = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 20px;
  height: 20px;
  &:first-child {
    // border: 1px solid red;
  }
  &:last-child {
    // border: 1px solid blue;
  }
  margin-bottom: 38px;
  &:hover {
    cursor: pointer;
  }
  &: active, focus {
    border: none;
  }
`;
export const picSec = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Icon = styled.i<iProps>`
  display: ${({ searchButtonDisplay }) => searchButtonDisplay};
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center, center;
`;

export const SearchIcon = styled(Icon)<iProps>`
  background-image: url('${searchIcon.src}');
`;

export const DarkLightIcon = styled(Icon)`
  background-image: url('${darkLightIcon.src}');
`;
