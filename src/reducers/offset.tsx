const offset = (state = 10, action: any) => {
  switch (action.type) {
    case "Increment":
      return (state += 10);

    default:
      return state;
  }
};
export default offset;
