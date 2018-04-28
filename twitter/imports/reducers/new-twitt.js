export default function newTwitt(state = [], action) {
  if (state === undefined) {
    state = [];
  }
  if (action.type === 'ADD_VALUE') {
    state.push(action.text);
  }
  return state;
}
