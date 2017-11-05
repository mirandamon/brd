import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyATv9WmZfAIP20vskSnCC0nFOsFLLer73U',
  authDomain: 'brd-firebase.firebaseapp.com',
  databaseURL: 'https://brd-firebase.firebaseio.com',
  projectId: 'brd-firebase',
  storageBucket: 'brd-firebase.appspot.com',
  messagingSenderId: '558155198667'
}

const firebaseInstance = firebase.initializeApp(config)
export const firebaseDb = firebaseInstance.database()

export default firebaseInstance
