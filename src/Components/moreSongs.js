const MoreSongs = ({ offset, setOffset, newSongs }) => {
  const clickHandler = () => {
    newSongs(offset);
    setOffset((offset += 5));
  };

  return (
    <div className="loadMore">
      <span onClick={clickHandler}>Load More...</span>
    </div>
  );
};

export default MoreSongs;
