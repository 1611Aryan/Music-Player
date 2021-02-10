import styled from "styled-components";

const AudioQualityToggle = () => {
  return (
    <AudioQualityToggleStyled>
      <label htmlFor="audioQuality">Quality: &nbsp;</label>
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
  width: 100%;
  margin-left: 10%;
  label {
    font-size: 1.5rem;
  }
  select {
    padding: 0.25rem 1rem 0.25rem 0.6rem;
    font-size: 1rem;
    border-radius: 15px;
    border: 2.5px solid black;
    background: #c7c7c7;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    option {
      font-size: 1rem;
    }
  }
`;

export default AudioQualityToggle;
