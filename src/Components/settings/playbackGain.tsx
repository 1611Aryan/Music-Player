import { useState } from "react";
import styled from "styled-components";

const PlayBackGain = () => {
  const [gain, setGain] = useState(0);
  const changeGain = (increase: boolean) => {
    increase ? setGain(gain + 1) : setGain(gain - 1);
  };
  return (
    <StyledPlaybackGain>
      <label htmlFor="playbackGain">PLAYBACK GAIN: &nbsp;</label>{" "}
      <span onClick={() => changeGain(false)} className="button">
        -
      </span>
      <span>&nbsp; {gain}dB &nbsp;</span>
      <span onClick={() => changeGain(true)} className="button">
        +
      </span>
    </StyledPlaybackGain>
  );
};

const StyledPlaybackGain = styled.div`
  .button {
    cursor: pointer;
    padding: 0rem 0.5rem;
    width: 1rem;
    aspect-ratio: 1/1;
    &:hover,
    &:focus {
      border: 1px solid white;
    }
  }
`;
export default PlayBackGain;
