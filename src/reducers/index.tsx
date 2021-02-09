import libraryStatus from "./libraryStatus";
import isPlaying from "./isPlaying";
import offset from "./offset";
import { combineReducers } from "redux";
import songs from "./songs";

const allReducers = combineReducers({
  libraryStatus,
  isPlaying,
  offset,
  songs,
});

export default allReducers;
