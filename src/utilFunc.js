export const autoPlaySong = (isPlaying, audioRef) => {
  if (isPlaying) {
    audioRef.current.play();
    if (audioRef.current.play() !== undefined) {
      audioRef.current.play().then(s => {
        audioRef.current.play();
      });
    }
  }
};

export const activeSongHandler = async (changedSong, songs, setSongs) => {
  const updatedSongs = songs.map(s => {
    if (s.id === changedSong.id) {
      return { ...s, active: true };
    } else {
      return { ...s, active: false };
    }
  });
  await setSongs(updatedSongs);
};
