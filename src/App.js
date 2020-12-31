import { useState, useRef } from "react";
import PlayerBackground from "./Components/playerBackground";
import Nav from "./Components/nav";
import Music from "./Components/music";
import Player from "./Components/player";
import Library from "./Components/library";
import chillHop from "./data";
import "./Style/app.css";
function App() {
  //?Ref
  const audioRef = useRef(null);
  //?State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  return (
    <div className={`App ${libraryStatus ? "adjust" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <PlayerBackground currentSong={currentSong} />
      <Music currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </div>
  );
}

export default App;
