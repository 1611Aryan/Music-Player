const PlayerBackground = ({ currentSong }) => {
  return (
    <div className="playerBg">
      <img src={currentSong.cover} alt="" />
    </div>
  );
};

export default PlayerBackground;
