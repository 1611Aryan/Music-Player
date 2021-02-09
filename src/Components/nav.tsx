import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { nav } from "./../interface";

const Nav: React.FC<nav> = ({ libraryStatus, setLibraryStatus }) => {
  const libraryHandler = () => {
    //Toggles the library
    setLibraryStatus(!libraryStatus);
  };

  return (
    <StyledNav>
      <h1>
        Music<span>Hive</span>
      </h1>
      <button onClick={libraryHandler}>
        Library &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  position: relative;
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 998;
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: var(--logoColor);
    span {
      color: #ff4b5c;
    }
  }

  button {
    font-size: 1.5rem;
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
  .settings {
    font-size: 2.5rem;
    cursor: pointer;
    transition: 1s ease;
    &:hover {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 768px) {
    button {
      font-size: clamp(0.9rem, 4vw, 1.5rem);
      background: transparent;
      padding: 0.6rem 0.7rem;
    }
  }
`;
export default Nav;
