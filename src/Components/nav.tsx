import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { nav } from "./../interface";
import ProfileMenu from "./profileMenu";
import { useState } from "react";
const Nav: React.FC<nav> = ({
  libraryStatus,
  setLibraryStatus,
  settings,
  setSettings,
  logoutVisible,
  setLogoutVisible,
}) => {
  const libraryHandler = () => {
    //Toggles the library
    setLibraryStatus(!libraryStatus);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNav>
      <h1>
        Music<span>Hive</span>
      </h1>
      <div className="btnContainer">
        <button className="library" onClick={libraryHandler}>
          Library &nbsp;
          <FontAwesomeIcon icon={faMusic} />
        </button>
        <button className="profile">
          <div>
            <FontAwesomeIcon
              icon={faUserCircle}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          <ProfileMenu
            menuOpen={menuOpen}
            setSettings={setSettings}
            settings={settings}
            setMenuOpen={setMenuOpen}
            logoutVisible={logoutVisible}
            setLogoutVisible={setLogoutVisible}
          />
        </button>
      </div>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  position: relative;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;

  h1 {
    margin-left: 10%;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: var(--logoColor);
    span {
      color: #ff4b5c;
    }
  }

  .btnContainer {
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10%;
  }

  .library {
    font-size: clamp(0.9rem, 3vw, 1.5rem);
    background: transparent;
    padding: 0.7rem 0.8rem;
    outline: 0;
    border: 2px solid rgb(58, 58, 58);
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: black;
    transition: all ease 0.5s;
    &:hover {
      background: rgb(58, 58, 58);
      color: white;
    }
  }
  .profile {
    background: transparent;
    border: 0;
    cursor: pointer;
    .userName {
      opacity: 0;
      font-size: clamp(0.9rem, 3vw, 1.5rem);
    }
    svg {
      transition: color ease-in-out 0.5s;
      font-size: clamp(2rem, 4vw, 2.5rem);
      z-index: 2;
    }
    &:focus,
    &:hover {
      outline: none;
      svg {
        color: #303030;
      }
    }
    &:focus {
      span {
        opacity: 1;
      }
    }
  }
  .menuOpen {
    transform: translateY(0%);
  }
  @media screen and (max-width: 768px) {
    .library {
      font-size: clamp(0.9rem, 4vw, 1.5rem);
      background: transparent;
      padding: 0.6rem 0.7rem;
    }
    .btnContainer {
      width: 40%;
    }
  }
`;
export default Nav;
