import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

const NavBar = () => (
  <AppBar
    title='Brd'
    iconElementLeft={<RaisedButton label="Default" primary={true}/>}
  />
)

export default NavBar
