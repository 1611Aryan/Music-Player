const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  isPlaying,
  audioRef,
  setSongs,
}) => {
  const currentSongHandler = async () => {
    setCurrentSong(song);
    const updatedSongs = songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
    await setSongs(updatedSongs);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div
      onClick={currentSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="coverImage" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
