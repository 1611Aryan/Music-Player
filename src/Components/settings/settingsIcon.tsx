import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SettingIcon: React.FC<{
  settings: boolean;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ settings, setSettings }) => {
  return (
    <SettingIconStyle>
      <FontAwesomeIcon className="settings" icon={faCog} />
    </SettingIconStyle>
  );
};

const SettingIconStyle = styled.div`
  display: none;
  svg {
    position: absolute;
    top: 2%;
    font-size: 2rem;
    right: 5%;
    cursor: pointer;
    transition: all ease-out 0.5s;
    z-index: 6;
    &:hover {
      transform: rotate(360deg);
    }
  }
`;

export default SettingIcon;
