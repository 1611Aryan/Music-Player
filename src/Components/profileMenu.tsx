import { userInfo } from "os";
import styled from "styled-components";
const ProfileMenu: React.FC<{
  menuOpen: boolean;
  settings: boolean;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  logoutVisible: boolean;
  setLogoutVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  menuOpen,
  settings,
  setSettings,
  setMenuOpen,
  logoutVisible,
  setLogoutVisible,
}) => {
  const closeProfileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <StyledProfileMenu className={`${menuOpen ? "menuOpen" : ""}`}>
      <ul>
        <li className="userName">
          Aryan
          <br />
        </li>
        <li onClick={closeProfileMenu}>
          <span>Liked Songs</span>
        </li>
        <li
          onClick={() => {
            setSettings(!settings);
            closeProfileMenu();
          }}
        >
          <span>Settings</span>
        </li>
        <li
          onClick={() => {
            closeProfileMenu();
            setLogoutVisible(!logoutVisible);
          }}
        >
          <span> Log Out</span>
        </li>
      </ul>
    </StyledProfileMenu>
  );
};

const StyledProfileMenu = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 7.5%;
  width: 15%;
  background: rgba(255, 255, 255, 0.8);
  color: #424242;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  transition: transform ease 0.3s;
  transform: translateY(-100%);

  ul {
    width: 100%;
    list-style-type: none;
    .username {
      opacity: 1;
    }
  }
  li {
    width: 100%;
    font-size: clamp(0.7rem, 3vw, 1.25rem);
    cursor: pointer;
    padding: 1rem 1rem;
    text-align: left;
  }
  ul :not(:last-child) {
    border-bottom: 1px solid #424242;
  }
  @media screen and (max-width: 768px) {
    right: 0;
    width: 23%;
    .username {
      opacity: 0;
    }
  }
`;

export default ProfileMenu;
