import React from 'react'
import NavBar from './components/navigation/NavBar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { auth } from 'common/firebase'

export default class Brd extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  componentDidMount () {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser })
    })
  }

  render () {
    const {currentUser} = this.state
    return (
      <Router>
        <div>
          <NavBar currentUser={this.state.currentUser} />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={() => <Login currentUser={currentUser} />} />
        </div>
      </Router>
    )
  }
}
