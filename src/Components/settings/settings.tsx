import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "./darkModeToggle";
import AudioQualityToggle from "./audioQualityToggle";
import Theme from "./theme";
import PlayBackGain from "./playbackGain";

const Setting: React.FC<{
  settings: boolean;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ settings, setSettings }) => {
  const closeSettings = () => {
    setSettings(!settings);
  };

  return (
    <SettingsStyle className={` ${settings ? "settingsVisible" : ""}`}>
      <StyledHeader>
        <FontAwesomeIcon icon={faArrowLeft} onClick={closeSettings} />
        <h1>SETTINGS</h1>
      </StyledHeader>
      <StyledOverlay></StyledOverlay>
      <StyledSettingsList>
        <StyledSettingListItem>
          <StyledSettingListHeading>
            <h3>DESIGN</h3>
            <div></div>
          </StyledSettingListHeading>
          <p>
            <DarkModeToggle />
          </p>
          <p>
            <Theme />
          </p>
        </StyledSettingListItem>

        <StyledSettingListItem>
          <StyledSettingListHeading>
            <h3>AUDIO</h3>
            <div></div>
          </StyledSettingListHeading>
          <p>
            <AudioQualityToggle />
          </p>
          <p>
            <PlayBackGain />
          </p>
        </StyledSettingListItem>

        <StyledSettingListItem>
          <StyledSettingListHeading>
            <h3>MISC</h3>
            <div></div>
          </StyledSettingListHeading>
          <p>
            MISC SETTING 1: &nbsp; <input type="checkbox" className="misc" />
          </p>
          <p>
            MISC SETTING 2: &nbsp; <input type="checkbox" className="misc" />
          </p>
        </StyledSettingListItem>
      </StyledSettingsList>
    </SettingsStyle>
  );
};

const SettingsStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 5;
  transition: all ease 0.2s;
  background: var(--settingsBg);
  backdrop-filter: blur(15px);
  transform: translate(-100%);
  opacity: 0;
`;
const StyledHeader = styled.header`
  margin-top: 2rem;
  color: white;
  svg {
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin: 0 2rem;
    cursor: pointer;
  }
  h1 {
    display: inline;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 400;
    letter-spacing: 0.1rem;
  }
`;
const StyledOverlay = styled.div`
  position: absolute;
  top: 4rem;
  left: 2rem;
  width: 95%;
  height: 100%;
  transition: all ease 0.2s;
  background: var(--settingsOverlay);
  z-index: -1;
  border-radius: 0 15px 0 0;
  @media (max-width: 750px) {
    border-radius: 15px 0 0 0;
  }
`;
const StyledSettingsList = styled.div`
  color: white;
  margin: 3rem 0 0 clamp(4rem, 7vw, 6rem);
`;
const StyledSettingListItem = styled.div`
  margin-top: 2rem;
  p {
    margin: 1.5rem 0 0 0.7rem;
    font-size: clamp(0.75rem, 3vw, 1.25rem);
    font-weight: 200;
  }
  .misc {
    transform: scale(1.5);
  }
  @media (max-width: 750px) {
    .misc {
      transform: scale(1.2);
    }
  }
`;
const StyledSettingListHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 300;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }
  div {
    margin: 0 3rem 0 1rem;
    width: 100%;
    height: 0.5px;
    background: white;
    border-radius: 1px;
  }
`;
export default Setting;
