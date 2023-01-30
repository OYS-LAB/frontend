import * as $ from './TopMarquee.styles';
import styled, { keyframes } from 'styled-components';

const Header = () => {
  const welcomeMsg = 'welcome! soft open will be coming soon';
  const welcome = welcomeMsg.toUpperCase();

  return (
    <$.Section>
      <$.Header>{welcome}</$.Header>
    </$.Section>
  );
};

export default Header;
