import * as $ from './styles';
import mainImage from 'images/img-main.png';
import useHiddenMenu from 'hooks/useHiddenMenu';

const Contents = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.Wrap>
      <$.MainImage src={mainImage.src} />
    </$.Wrap>
  ) : null;
};

export default Contents;
