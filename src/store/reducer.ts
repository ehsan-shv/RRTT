import { combineReducers } from 'redux'
import counterReducers from './counter'

export default combineReducers({
  counter: counterReducers,
})
