import * as $ from './styles';
import mainImage from 'images/img-main.jpeg';

const Contents = () => {
  return (
    <$.Wrap>
      <$.MainImage src={mainImage.src} />
    </$.Wrap>
  );
};

export default Contents;