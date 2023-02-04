import useColorMode from 'hooks/useColorMode';

import * as $ from './styles';

const Flakes = () => {
  const { flakeColor } = useColorMode();
  return (
    <$.Flakes aria-hidden="true">
      <$.Flake>
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
        <$.FlakeIcon flakeColor={flakeColor} />
      </$.Flake>
    </$.Flakes>
  );
};

export default Flakes;
