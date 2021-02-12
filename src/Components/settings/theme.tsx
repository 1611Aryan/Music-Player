import styled from "styled-components";

const Theme = () => {
  return (
    <StyledTheme>
      <label htmlFor="theme">THEME: &nbsp;</label>
      <select name="theme">
        <option value="">DEFAULT</option>
        <option value="">THEME 1</option>
        <option value="">THEME 2</option>
        <option value="">THEME 3</option>
        <option value="">THEME 4</option>
      </select>
    </StyledTheme>
  );
};

const StyledTheme = styled.div`
  select {
    padding: clamp(0.1rem, 1vw, 0.25rem) clamp(0.6rem, 2vw, 1rem);
    font-size: clamp(0.65rem, 2vw, 1rem);
    border-radius: 15px;
    border: 2.5px solid black;
    background: #e9e8e8;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    option {
      font-size: clamp(0.6rem, 2vw, 1rem);
    }
  }
`;

export default Theme;
