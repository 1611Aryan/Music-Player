import styled from "styled-components";

const Logout: React.FC<{
  logoutVisible: boolean;
  setLogoutVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ logoutVisible, setLogoutVisible }) => {
  const exitPrompt = () => {
    setLogoutVisible(!logoutVisible);
  };
  return (
    <StyledLogout className={`${logoutVisible ? "logoutVisible" : ""}`}>
      <StyledLogoutPrompt>
        <h1>ARE YOU SURE YOU WANT TO LOGOUT?</h1>
        <div className="btnContainer">
          <button onClick={exitPrompt}>LOGOUT</button>
          <button onClick={exitPrompt}>CANCEL</button>
        </div>
      </StyledLogoutPrompt>
    </StyledLogout>
  );
};

const StyledLogout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity linear 0.2s;
`;

const StyledLogoutPrompt = styled.div`
  width: 35%;
  height: 40%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  border: 3px solid lightblue;
  position: relative;
  background: rgba(46, 46, 46, 0.8);
  backdrop-filter: blur(2px);
  h1 {
    color: #ececec;
    text-align: center;
    width: 55%;
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 400;
    margin-bottom: 4rem;
  }
  .btnContainer {
    position: absolute;
    bottom: 0;
    left: 0;
    align-self: flex-end;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 100%;
      font-size: clamp(1rem, 3vw, 1.25rem);
      padding: 1.25rem;
      background: rgba(37, 37, 37, 0.8);
      color: #ececec;
      border: none;
      border-top: 3px solid lightblue;
      cursor: pointer;
      &:focus,
      &:hover {
        background: #181818;
        outline: 0;
      }
    }
    button + button {
      border-left: 3px solid lightblue;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 30%;
    h1 {
      width: 70%;
    }
  }
`;
export default Logout;
