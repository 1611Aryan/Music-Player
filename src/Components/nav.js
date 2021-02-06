import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({
  libraryStatus,
  setLibraryStatus,
  offset,
  setOffset,
  newSongs,
}) => {
  return (
    <nav>
      <h1>
        Music<span>Hive</span>
      </h1>
      <button
        onClick={() => {
          setLibraryStatus(!libraryStatus);
        }}
      >
        Library &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};
export default Nav;
