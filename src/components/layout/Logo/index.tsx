import useColorMode from 'hooks/useColorMode';
import * as $ from './styles';

const MainHeader = () => {
  const { colorMode } = useColorMode();
  return (
    <$.MainHeader>
      <$.Logo>
        <$.Img colorMode={colorMode} aria-label="OYS-LAB" />
      </$.Logo>
    </$.MainHeader>
  );
};

export default MainHeader;
