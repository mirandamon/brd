import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Brd from './Brd'
import {theme} from './theme/theme'

injectTapEventPlugin()

export default class BrdApp extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Brd />
      </MuiThemeProvider>
    )
  }
}
