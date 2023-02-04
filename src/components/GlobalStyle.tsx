import useColorMode from 'hooks/useColorMode';
import { createGlobalStyle } from 'styled-components';
interface GlobalStyleProps {
  backgroundColor: string;
  textColor: string;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
* {
    	margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	text-decoration:none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	width: 100%;
    height: 100vh;
	color : ${props => props.textColor};
  	background-color : ${props => props.backgroundColor};
	transition: background 0.4s ease, color 0.4s ease;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#__next {
	width: 100%;
    height: 100%;
}

`;

const GlobalStyleComponent = () => {
  const { backgroundColor1: backgroundColor, textColor1: textColor } =
    useColorMode();

  return (
    <GlobalStyle backgroundColor={backgroundColor} textColor={textColor} />
  );
};
export default GlobalStyleComponent;
