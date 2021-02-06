import styled from "styled-components";

const Music = ({ currentSong, isPlaying }) => {
  return (
    <SongContainer>
      <img
        className={isPlaying ? "rotateCover" : " "}
        src={currentSong.cover}
        alt="coverImage"
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </SongContainer>
  );
};

const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    display: inline-block;
    width: 20%;
    border-radius: 50%;
    transform-origin: center;
    transition: all ease 0.4s;
    background: #666666;
  }
  h2 {
    padding: 3rem 1rem 0rem 1rem;
    font-weight: 600;
    font-size: clamp(1.25rem, 5vw, 2rem);
  }
  h3 {
    padding: 0rem 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
  .rotateCover {
    animation: rotate 15s infinite linear;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 30%;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 40%;
    }
  }

  @media screen and (max-width: 425px) {
    img {
      width: 50%;
    }
  }
`;

export default Music;
