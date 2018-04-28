import { createStore } from 'redux';
import { combineReducers } from 'redux'
import newTwitt from './new-twitt.js'
import allTwitt from './all-twitt.js'

const reducer =  combineReducers({
  newTwitt,
  allTwitt
})

const store = createStore(reducer);
export default store;