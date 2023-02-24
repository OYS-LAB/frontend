import useHiddenMenu from 'hooks/useHiddenMenu';

import * as $ from './styles';

const Termofuse = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.TermofuseWrap>
      <p>TERM OF US</p>
    </$.TermofuseWrap>
  ) : null;
};

export default Termofuse;
