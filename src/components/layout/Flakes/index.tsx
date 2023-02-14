import useColorMode from 'hooks/useColorMode';

import * as $ from './styles';

const Flakes = () => {
  const { colorMode } = useColorMode();
  return (
    <$.Flakes aria-hidden="true">
      <$.Flake>
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
        <$.FlakeIcon colorMode={colorMode} />
      </$.Flake>
    </$.Flakes>
  );
};

export default Flakes;
