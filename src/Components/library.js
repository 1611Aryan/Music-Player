import LibrarySong from "./librarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MoreSongs from "./moreSongs";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
  offset,
  setOffset,
  newSongs,
}) => {
  //?Event handler
  const crossHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <div className={`library ${libraryStatus ? "libraryVisible" : ""}`}>
      <div className="libraryNav">
        <h2>Library</h2>
        <FontAwesomeIcon onClick={crossHandler} icon={faArrowRight} />
      </div>
      <div className="songList">
        {songs.map(song => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            key={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
      <MoreSongs offset={offset} setOffset={setOffset} newSongs={newSongs} />
    </div>
  );
};

export default Library;
