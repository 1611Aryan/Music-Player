import styled from "styled-components";
import { useState } from "react";
import SettingIcon from "./settingsIcon";
import DarkModeToggle from "./darkModeToggle";
import AudioQualityToggle from "./audioQualityToggle";

const Setting: React.FC = () => {
  const [settings, setSettings] = useState(false);

  return (
    <>
      <SettingIcon settings={settings} setSettings={setSettings} />
      <SettingsStyle>
        <div className={`options ${settings ? "visible" : ""}`}>
          <DarkModeToggle />
          <br />
          <AudioQualityToggle />
        </div>
      </SettingsStyle>
    </>
  );
};

const SettingsStyle = styled.div`
  .options {
    position: absolute;
    top: 0;
    right: 0;
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    z-index: 5;
    transition: all ease-out 0.5s;
    background: var(--library);
    transform: translateX(100%);
    opacity: 0;
  }
  .visible {
    transform: translateX(0%);

    opacity: 1;
  }
`;

export default Setting;
