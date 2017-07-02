import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

const NavBar = () => (
  <AppBar
    title='Brd'
    iconElementRight={<div>
      <RaisedButton label='Log In' secondary style={{margin: 5}} href='/login' />
      <RaisedButton label='Sign Up' secondary style={{margin: 5}} />
    </div>}
  />
)

export default NavBar
