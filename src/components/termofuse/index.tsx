import useHiddenMenu from 'hooks/useHiddenMenu';

const Termofuse = () => {
  const { contentDisplay } = useHiddenMenu();
  const isVisible = contentDisplay === 'block';

  return isVisible ? (
    <div>
      <h1> TERM OF USE </h1>
    </div>
  ) : null;
};

export default Termofuse;
