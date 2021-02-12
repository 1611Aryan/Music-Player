import LibrarySong from "./librarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MoreSongs from "./moreSongs";
import styled from "styled-components";

import { library } from "./../interface";

const Library: React.FC<library> = ({
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
  trackRef,
}) => {
  //?Event handler
  const crossHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <StyledLibrary
      style={{
        transform: `${libraryStatus ? "translateX(0%)" : "translateX(-100%)"}`,
        opacity: `${libraryStatus ? "1" : "0"}`,
      }}
    >
      <StyledLibraryNav>
        <h2>Library</h2>
        <FontAwesomeIcon onClick={crossHandler} icon={faArrowRight} />
      </StyledLibraryNav>
      <StyledSongList>
        {songs.map(song => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            key={song.id}
            setSongs={setSongs}
            setLibraryStatus={setLibraryStatus}
            trackRef={trackRef}
          />
        ))}
      </StyledSongList>
      <MoreSongs
        offset={offset}
        setOffset={setOffset}
        newSongs={newSongs}
        setSongs={setSongs}
      />
    </StyledLibrary>
  );
};

const StyledLibrary = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 25%;
  height: 100%;
  z-index: 4;
  opacity: 1;
  background: var(--library);
  box-shadow: 5px 2px 15px 10px rgba(black, 0.2);
  transition: all 0.5s ease-in-out;
  overflow: hidden scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #909090;
    border-radius: 20px;
    border: transparent;
  }
  scrollbar-width: thin;
  scrollbar-color: #909090 transparent;

  @media screen and (max-width: 1024px) {
    width: 30%;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;

    background: var(--libraryMobile);
  }
`;

const StyledLibraryNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0.5rem 0 1rem 3rem;
    font-size: 1.75rem;
  }

  svg {
    display: none;
    font-size: 1.5rem;
    margin: 0.5rem 2rem 1rem 0;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: clamp(1.75rem, 7vw, 3rem);
    }

    svg {
      display: block;
    }
  }
`;

const StyledSongList = styled.div`
  width: 100%;
  .selected {
    transform: scale(1.1);
    background: var(--librarySongSelected);

    &:hover {
      transform: scale(1.2);
      background: var(--librarySongSelected);
    }
  }
`;

export default Library;
