import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'
import { currentPageReducer } from './currentPage'
// import { LOGIN, LOG_OUT, REGISTER } from './actions'

const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  currentPage: currentPageReducer
})

export default rootReducer
