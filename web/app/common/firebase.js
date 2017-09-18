import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyATv9WmZfAIP20vskSnCC0nFOsFLLer73U',
  authDomain: 'brd-firebase.firebaseapp.com',
  databaseURL: 'https://brd-firebase.firebaseio.com',
  projectId: 'brd-firebase',
  storageBucket: 'brd-firebase.appspot.com',
  messagingSenderId: '558155198667'
}

firebase.initializeApp(config)

export default firebase
export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
