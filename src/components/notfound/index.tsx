import useColorMode from 'hooks/useColorMode';
import useHiddenMenu from 'hooks/useHiddenMenu';
import Path from 'models/Path';
import Link from 'next/link';
import * as $ from './styles';

const NotFound = () => {
  const { contentDisplay } = useHiddenMenu();
  const { reverseColor, baseColor } = useColorMode();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <$.HomeObjectSection>
      <$.HomeObjectMessageWrap
        reverseColor={reverseColor}
        baseColor={baseColor}
      >
        <p>SORRY!</p>
        <p>We cannot find the page you are looking for!</p>
        <Link href={Path.MAIN}>
          <button>Home</button>
        </Link>
      </$.HomeObjectMessageWrap>
    </$.HomeObjectSection>
  ) : null;
};

export default NotFound;
