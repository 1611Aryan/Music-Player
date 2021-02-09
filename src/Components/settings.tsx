import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const Setting: React.FC = () => {
  const [theme, setTheme] = useState("light");
  const [settings, setSettings] = useState(false);
  const themeToggle = () => {
    if (theme === "light") {
      document.getElementsByTagName("html")[0].setAttribute("theme", "dark");
      setTheme("dark");
    } else {
      document.getElementsByTagName("html")[0].setAttribute("theme", "light");
      setTheme("light");
    }
  };
  return (
    <SettingsStyle>
      <FontAwesomeIcon
        className="settings"
        icon={faCog}
        onClick={() => {
          setSettings(!settings);
        }}
      />
      <div className={`options ${settings ? "visible" : ""}`}>
        <label htmlFor="theme">Dark Mode: &nbsp;</label>
        <input onChange={themeToggle} type="checkbox" />
      </div>
    </SettingsStyle>
  );
};

const SettingsStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  z-index: 999;
  svg {
    position: absolute;
    top: 2%;
    font-size: 2rem;
    right: 5%;
    cursor: pointer;
    transition: all ease-out 0.5s;
    z-index: 999;
    &:hover {
      transform: rotate(360deg);
    }
  }
  .options {
    width: 100%;
    height: 100%;
    transition: all ease-out 0.5s;
    background: var(--library);
    transform: translateX(100%);
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      font-size: 2rem;
      color: black;
    }
    input {
      position: relative;
      width: 10%;
      height: 1.75rem;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0c2442;
        border-radius: 25px;
        border: 2px solid black;
        transition: all ease-in-out 0.5s;
        overflow: hidden;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: calc(50% + 2px);
        transform: translate(0, -50%);
        border-radius: 100%;
        //height: 100%;
        width: 50%;
        aspect-ratio: 1/1;
        background: #ecf881;
        transition: all ease-in-out 0.5s;
      }
    }
    input:checked {
      &::before {
        background: #8dbeff;
      }
      &::after {
        transform: translate(110%, -50%);
        background: #e3f355;
      }
    }
  }
  .visible {
    transform: translateX(0%);

    opacity: 1;
  }
`;

export default Setting;
