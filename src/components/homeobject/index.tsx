import useHiddenMenu from 'hooks/useHiddenMenu';
import * as $ from './styles';

const Homeobject = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? <div>Hello</div> : null;
};

export default Homeobject;
