import React from 'react'
import NavBar from './components/navigation/NavBar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Submit from './components/submit/Submit'
import MyAccount from './components/account'
import NotFound from './components/404'
import Post from './components/post'
import {
  BrowserRouter as Router,
  Route,
  Switch
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/submit' component={Submit} />
            <Route exact path='/account' component={MyAccount} />
            <Route exact path='/post' component={Post} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
