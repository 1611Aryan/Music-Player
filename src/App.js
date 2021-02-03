import { useState, useRef } from "react";
import PlayerBackground from "./Components/playerBackground";
import Nav from "./Components/nav";
import Music from "./Components/music";
import Player from "./Components/player";
import Library from "./Components/library";
import chillHop from "./data";
import { autoPlaySong, activeSongHandler } from "./utilFunc";
// import Visualiser from "./Components/visualiser";
import "./Style/app.css";
function App() {
  //?Ref
  const audioRef = useRef(null);
  //?
  //?State
  const [songs, setSongs] = useState(chillHop);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [offset, setOffset] = useState(0);
  //?
  //?Events
  let touchStartTime, initX, distX, finX, delTime;
  const touchStart = e => {
    touchStartTime = new Date().getTime();
    initX = e.changedTouches[0].clientX;
    distX = 0;
  };
  const touchEnd = e => {
    finX = e.changedTouches[0].clientX;
    delTime = new Date().getTime() - touchStartTime;
    distX = finX - initX;
    if (delTime > 150 && Math.abs(distX) > 50) {
      const currentIndex = songs.findIndex(song => song.id === currentSong.id);
      if (distX > 0) {
        if (currentIndex - 1 < 0) {
          setCurrentSong(songs[songs.length - 1]);
          autoPlaySong(isPlaying, audioRef);
          activeSongHandler(songs[songs.length - 1], songs, setSongs);
          return;
        }
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeSongHandler(
          songs[(currentIndex - 1) % songs.length],
          songs,
          setSongs
        );
      } else {
        setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        activeSongHandler(
          songs[(currentIndex + 1) % songs.length],
          songs,
          setSongs
        );
      }
      autoPlaySong(isPlaying, audioRef);
    }
  };
  //?
  return (
    <div
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      className={`App ${libraryStatus ? "adjust" : ""}`}
    >
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        offset={offset}
        setOffset={setOffset}
      />
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
      {/* <Visualiser currentSong={currentSong} isPlaying={isPlaying} /> */}
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
