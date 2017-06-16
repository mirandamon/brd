import React from 'react'
import NavBar from './components/navigation/NavBar'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Brd extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    )
  }
}
