import styled from "styled-components";
import { autoPlaySong, activeSongHandler } from "./../utilFunc";
import { librarySong } from "./../interface";

const LibrarySong: React.FC<librarySong> = ({
  song,
  setCurrentSong,
  songs,
  isPlaying,
  audioRef,
  setSongs,
  setLibraryStatus,
  trackRef,
}) => {
  const clickHandler = () => {
    currentSongHandler();
    CloseLibrary();
    if (trackRef.current) trackRef.current.style.transform = "translateX(0%)";
  };
  const currentSongHandler = async () => {
    setCurrentSong(song);
    activeSongHandler(song, songs, setSongs);
    autoPlaySong(isPlaying, audioRef);
  };
  const CloseLibrary = () => {
    if (window.innerWidth <= 768) {
      setLibraryStatus(false);
    }
  };

  return (
    <StyledLibrarySong
      onClick={clickHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img loading="lazy" src={song.cover} alt="coverImage" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </StyledLibrarySong>
  );
};

const StyledLibrarySong = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: transform ease-out 0.3s, background ease-in 0.3s;
  color: var(--librarySongText);
  &:hover {
    background: var(--librarySongHover);
    transform: scale(1.1);
  }
  img {
    border-radius: 15px;
    width: 40%;
    object-fit: cover;
    display: inline-block;
    background: #4e4e4e;
    filter: var(--coverImageFilter);
  }
  .song-description {
    width: 50%;
    h3 {
      font-size: 1.15rem;
      font-weight: 400;
    }
    h4 {
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 35%;
    }
    .song-description {
      width: 50%;
      h3 {
        font-size: clamp(1rem, 5vw, 1.5rem);
        font-weight: 400;
      }
      h4 {
        font-size: clamp(0.7rem, 3vw, 1.1rem);
        font-weight: 300;
      }
    }
  }
`;

export default LibrarySong;
