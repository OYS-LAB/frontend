import styled from 'styled-components';

interface Props {
  borderColor: string;
}

export const Wrap = styled.section`
  margin-top: auto;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const AboutMain = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const AboutImageWrap = styled.div`
  width: 30%;
  display: flex;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;
export const AboutImage = styled.img`
  width: 100%;
`;
export const AboutDescription = styled.div<Props>`
  display: flex;
  width: 475px;
  padding-left: 45px;
  @media (max-width: 600px) {
    padding: 0;
  }
  p {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    position: fixed;
    width: 430px;
    padding: 100px 0 30px 0;
    border-bottom: 1px solid ${({ borderColor }) => borderColor};

    @media (max-width: 600px) {
      width: 100%;
      padding: 28px 23px 25px 23px;
      margin: 0 auto;
      line-height: 16px;
    }
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
