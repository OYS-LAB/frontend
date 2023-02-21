import styled from 'styled-components';

interface Props {
  borderColor: string;
}

export const Wrap = styled.section`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const AboutMain = styled.div`
  display: flex;
  justify-content: center;
`;
export const AboutImageWrap = styled.div`
  width: 30%;
  display: flex;
`;
export const AboutImage = styled.img`
  width: 100%;
  object-fit: fill;
`;
export const AboutDescription = styled.div<Props>`
  display: flex;
  flex-flow: coloumn;
  width: 475px;
  padding-left: 45px;
  p {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    position: fixed;
    width: 430px;
    padding: 100px 0 30px 0;
    border-bottom: 1px solid ${({ borderColor }) => borderColor};
  }
`;
export const AboutFooter = styled.div`
  width: 100%;
  position: fixed;
  bottom: 28px;
  ul {
    text-align: center;
    justify-content: center;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 700;
    font-size: 26px;
    padding-bottom: 28px;
    li {
      display: inline-block;
      width: 33%;
    }
  }
`;
