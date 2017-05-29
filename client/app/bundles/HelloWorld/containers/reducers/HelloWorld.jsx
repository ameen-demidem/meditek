export default (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return action.value;
    default:
      return state;
  }
}
