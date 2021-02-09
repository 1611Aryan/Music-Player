import styled from "styled-components";

import { moreSongs } from "./../interface";

const MoreSongs: React.FC<moreSongs> = ({
  offset,
  setOffset,
  newSongs,
  setSongs,
}) => {
  const clickHandler = () => {
    newSongs(offset, setSongs);
    setOffset((offset += 10));
  };

  return (
    <StyledLoadMore>
      <span onClick={clickHandler}>Load More...</span>
    </StyledLoadMore>
  );
};

const StyledLoadMore = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform ease-out 0.3s, background ease-in 0.3s;

  span {
    padding: 1rem;
    cursor: pointer;
    font-size: 1.25rem;
  }

  &:hover {
    background: rgb(219, 242, 255);
    transform: scale(1.2);
  }
`;

export default MoreSongs;
