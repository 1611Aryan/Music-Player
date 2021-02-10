import styled from "styled-components";
import { useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");
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
    <StyledDarkModeToggle>
      <label htmlFor="theme">Dark Mode: &nbsp;</label>
      <input onChange={themeToggle} type="checkbox" />
    </StyledDarkModeToggle>
  );
};

const StyledDarkModeToggle = styled.div`
  width: 100%;
  margin-left: 10%;
  label {
    font-size: 1.5rem;
    color: black;
  }
  input {
    position: relative;
    width: 15%;
    height: 1.5rem;
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
      border: 2.5px solid black;
      transition: all ease-in-out 0.5s;
      overflow: hidden;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: calc(50% + 2px);
      transform: translate(10%, -50%);
      border-radius: 100%;

      height: 100%;
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
      transform: translate(150%, -50%);
      background: #e3f355;
    }
  }
`;

export default DarkModeToggle;
