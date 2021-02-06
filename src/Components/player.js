import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { autoPlaySong, activeSongHandler } from "./../utilFunc";
import styled from "styled-components";

const Player = ({
  currentSong,
  setCurrentSong,
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  //?Ref
  const trackRef = useRef(null);
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
  const timeHandler = e => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const transformPercentage = Math.round((currentTime / duration) * 100);
    setSongInfo({ currentTime, duration, transformPercentage });
  };
  const getTime = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value;
  };

  const changeSong = async direction => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    if (direction === "next") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeSongHandler(
        songs[(currentIndex + 1) % songs.length],
        songs,
        setSongs
      );
    } else {
      if (currentIndex - 1 < 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeSongHandler(songs[songs.length - 1], songs, setSongs);
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeSongHandler(
        songs[(currentIndex - 1) % songs.length],
        songs,
        setSongs
      );
    }
    trackRef.current.style.transform = "translateX(0%)";
    autoPlaySong(isPlaying, audioRef);
  };
  const songEndHandler = async () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeSongHandler(
      songs[(currentIndex + 1) % songs.length],
      songs,
      setSongs
    );
    trackRef.current.style.transform = "translateX(0%)";
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
    <StyledPlayer>
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
          <div ref={trackRef} style={sliderPos} className="thumb"></div>
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
    </StyledPlayer>
  );
};

const StyledPlayer = styled.div`
  min-height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .time-controls {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      width: 5rem;
      padding: 1rem;
      font-size: clamp(1rem, 4vw, 1.5rem);
    }
    .track {
      width: 100%;
      height: 0.5rem;
      position: relative;
      border-radius: 1rem;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      input {
        width: 100%;
        height: 100%;
        cursor: pointer;
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        &:focus {
          border: 0;
          outline: 0;
        }
        &::-webkit-slider-thumb {
          appearance: none;
          height: 14px;
          width: 14px;
        }
        &::-moz-range-thumb {
          appearance: none;
          height: 14px;
          width: 14px;
          background: transparent;
          border: 0;
        }
      }
      .thumb {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(231, 231, 231);
        pointer-events: none;
        transform: translateX(100%);
      }
    }
  }
  .play-controls {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      font-size: clamp(1.25rem, 5vw, 2rem);
      cursor: pointer;
      transition: color ease-out 0.1s;
      &:hover {
        color: #1f1f1f;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .time-controls {
      width: 60%;
    }
    .play-controls {
      width: 40%;
    }
  }

  @media screen and (max-width: 768px) {
    .time-controls {
      width: 70%;
    }
  }

  @media screen and (max-width: 425px) {
    .time-controls {
      width: 95%;
    }
    .play-controls {
      width: 60%;
    }
  }
`;

export default Player;
