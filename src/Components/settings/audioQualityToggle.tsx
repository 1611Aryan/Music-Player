import styled from "styled-components";

const AudioQualityToggle = () => {
  return (
    <AudioQualityToggleStyled>
      <label htmlFor="audioQuality">AUDIO QUALITY: &nbsp;</label>
      <select name="audioQuality">
        <option value="">Auto</option>
        <option value="">Low (128kbps)</option>
        <option value="">Medium (256kbps)</option>
        <option value="">High (320kbps)</option>
        <option value="">Very High (FLAC)</option>
      </select>
    </AudioQualityToggleStyled>
  );
};

const AudioQualityToggleStyled = styled.div`
  select {
    padding: clamp(0.1rem, 1vw, 0.25rem) clamp(0.6rem, 2vw, 1rem);
    font-size: clamp(0.7rem, 2vw, 1rem);
    border-radius: 15px;
    border: 2.5px solid black;
    background: #e9e8e8;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    option {
      font-size: clamp(0.6rem, 2vw, 1rem);
    }
  }
`;

export default AudioQualityToggle;
