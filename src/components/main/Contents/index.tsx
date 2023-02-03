import * as $ from './styles';
import mainImage from 'images/img-main.jpeg';
import useSideMenu from 'hooks/useSideMenu';

const Contents = () => {
  const { contentDisplay } = useSideMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.Wrap>
      <$.MainImage src={mainImage.src} />
    </$.Wrap>
  ) : null;
};

export default Contents;
