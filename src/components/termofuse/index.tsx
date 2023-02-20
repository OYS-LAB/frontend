import useHiddenMenu from 'hooks/useHiddenMenu';

const TermOfUse = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <div>
      <h1> TERM OF USE </h1>
    </div>
  ) : null;
};

export default TermOfUse;
