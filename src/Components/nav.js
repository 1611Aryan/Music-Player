import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { addSongs } from "./../data";
const Nav = ({ libraryStatus, setLibraryStatus, offset, setOffset }) => {
  return (
    <nav>
      <h1
        onClick={() => {
          console.log(offset);
          addSongs(offset);
          setOffset((offset += 5));
        }}
      >
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
