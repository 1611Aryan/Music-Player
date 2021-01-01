import { autoPlaySong, activeSongHandler } from "./../utilFunc";
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
    activeSongHandler(song, songs, setSongs);
    autoPlaySong(isPlaying, audioRef);
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
