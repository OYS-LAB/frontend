import * as $ from './styles';
import mainImage from 'images/img-main.jpeg';
import useSideMenuMode from 'hooks/useSideMenuMode';

const Contents = () => {
  const { contentDisplay } = useSideMenuMode();
  return (
    <$.Wrap contentDisplay={contentDisplay}>
      <$.MainImage src={mainImage.src} />
    </$.Wrap>
  );
};

export default Contents;
