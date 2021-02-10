import { useState, useRef, useEffect } from "react";
import PlayerBackground from "./Components/playerBackground";
import Nav from "./Components/nav";
import Settings from "./Components/settings/settings";
import Music from "./Components/music";
import Player from "./Components/player";
import Library from "./Components/library";
import chillHop from "./data";
import { autoPlaySong, activeSongHandler } from "./utilFunc";

// import Visualiser from "./Components/visualiser";

import GlobalStyle from "./globalStyle";
function App() {
  //?Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  //?
  //?State

  const [songs, setSongs] = useState<
    {
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: string[];
      id: any;
      active: boolean;
    }[]
  >(chillHop.data);
  const [currentSong, setCurrentSong] = useState<{
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  }>(songs[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [libraryStatus, setLibraryStatus] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(10);
  //?
  //?Use Effect
  useEffect(() => {
    chillHop.addSongs(0, setSongs);
  }, []);

  //?
  //?Events
  let touchStartTime = 0;
  let initX = 0;
  let distX = 0;
  let finX = 0;
  let delTime = 0;

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartTime = new Date().getTime();
    initX = e.changedTouches[0].clientX;
    distX = 0;
  };
  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
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
      <GlobalStyle />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Settings />
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
        trackRef={trackRef}
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
        offset={offset}
        setOffset={setOffset}
        newSongs={chillHop.addSongs}
        trackRef={trackRef}
      />
    </div>
  );
}

export default App;
