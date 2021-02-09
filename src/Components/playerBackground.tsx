import styled from "styled-components";
import { playerbg } from "./../interface";

const PlayerBackground: React.FC<playerbg> = ({ currentSong }) => {
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
    background: var(--playerBg);
    backdrop-filter: blur(10px);
  }
`;

export default PlayerBackground;
