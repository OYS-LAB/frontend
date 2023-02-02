import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentState,
  DarkState,
  LightState,
} from '../../../store/atoms/darkMode';
import * as $ from './DarkMode.styles';

const DarkMode = () => {
  const [mode, setMode] = useRecoilState(currentState);
  const lightMode = useRecoilValue(LightState);
  const darkMode = useRecoilValue(DarkState);

  const handleDark = () => {
    console.log('click');
    if (mode === lightMode) {
      setMode(darkMode);
    } else {
      setMode(lightMode);
    }
  };
  const current = useRecoilValue(currentState);
  const backgroundColor = current.backgroundColor;
  const textColor = current.color;
  const textColor2 = current.color2;
  const backgroundColor2 = current.backgroundColor2;
  const borderColor = current.borderColor;

  return (
    <$.Button
      aria-label="dark-light"
      onClick={handleDark}
      backgroundColor={backgroundColor}
      textColor={textColor}
      backgroundColor2={backgroundColor2}
      textColor2={textColor2}
      borderColor={borderColor}
    >
      <$.DarkLightIcon />
    </$.Button>
  );
};

export default DarkMode;
