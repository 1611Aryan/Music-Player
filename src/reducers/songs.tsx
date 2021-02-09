import chillHop from "./../data";

const data = {
  allSongs: chillHop.data,
  currentSong: chillHop.data[0],
};

const songs = (state = data, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default songs;
