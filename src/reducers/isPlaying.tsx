const isPlaying = (state = false, action: any) => {
  switch (action.type) {
    case "playing":
      return (state = true);
    case "stopped":
      return (state = false);
    default:
      return state;
  }
};

export default isPlaying;
