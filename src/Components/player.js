import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  //?Effect
  useEffect(() => {
    // const updatedSongs = songs.map((s) => {
    //   if (s.id === currentSong.id) {
    //     return { ...s, active: true };
    //   } else {
    //     return { ...s, active: false };
    //   }
    // });
    // setSongs(updatedSongs);
  }, [currentSong]);
  //?
  //?Event Handlers
  const playHandler = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  const timeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const transformPercentage = Math.round((currentTime / duration) * 100);
    setSongInfo({ currentTime, duration, transformPercentage });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  const activeSongHandler = (changedSong) => {
    const updatedSongs = songs.map((s) => {
      if (s.id === changedSong.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
    setSongs(updatedSongs);
  };
  const changeSong = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "next") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeSongHandler(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (currentIndex - 1 < 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeSongHandler(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeSongHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  //?
  //?State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    transformPercentage: 100,
  });
  //?
  //?Style
  const sliderPos = {
    transform: `translateX(${songInfo.transformPercentage}%)`,
  };
  //?
  return (
    <div className="player">
      <div className="time-controls">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]} ,${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={sliderPos} className="thumb"></div>
        </div>

        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-controls">
        <FontAwesomeIcon
          onClick={() => changeSong("previous")}
          className="icon prev"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="icon play"
          icon={!isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          onClick={() => changeSong("next")}
          className="icon next"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};
export default Player;
