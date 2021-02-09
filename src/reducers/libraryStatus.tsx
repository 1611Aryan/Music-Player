const libraryStatus = (state = false, action: any) => {
  switch (action.type) {
    case "open":
      return (state = true);
    case "closed":
      return (state = false);
    default:
      return state;
  }
};

export default libraryStatus;
