import useHiddenMenu from 'hooks/useHiddenMenu';

import * as $ from './styles';

const Termofuse = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.Wrap>
      <p>TERM OF US</p>
    </$.Wrap>
  ) : null;
};

export default Termofuse;
