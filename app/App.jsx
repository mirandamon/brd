import React from 'react'
import NavBar from './components/navigation/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {theme} from './theme/theme'

injectTapEventPlugin()

export default class Brd extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <NavBar />
      </MuiThemeProvider>
    )
  }
}
