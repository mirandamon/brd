import { createStore, compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import rootReducer from '../reducers'

const firebaseConfig = {
  apiKey: 'AIzaSyATv9WmZfAIP20vskSnCC0nFOsFLLer73U',
  authDomain: 'brd-firebase.firebaseapp.com',
  databaseURL: 'https://brd-firebase.firebaseio.com',
  projectId: 'brd-firebase',
  storageBucket: 'brd-firebase.appspot.com',
  messagingSenderId: '558155198667'
}

const config = {
  userProfile: 'users',
  enableLogging: false
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebaseConfig, config)
)(createStore)

const store = createStoreWithFirebase(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
