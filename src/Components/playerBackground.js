import styled from "styled-components";

const PlayerBackground = ({ currentSong }) => {
  return (
    <StyledPlayerBackground>
      <img src={currentSong.cover} alt="" />
    </StyledPlayerBackground>
  );
};

const StyledPlayerBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(39, 39, 39);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(148, 148, 148, 0.35);
    backdrop-filter: blur(10px);
  }
`;

export default PlayerBackground;
