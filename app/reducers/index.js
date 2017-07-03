import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
// import { LOGIN, LOG_OUT, REGISTER } from './actions'

const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

export default rootReducer
