export default function allTwitt(state = [], action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === 'ADD_TWITT') {
    state.push(action.twitt);
  }
  return state;
}
