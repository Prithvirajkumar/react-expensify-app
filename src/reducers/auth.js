export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: user.uid,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
