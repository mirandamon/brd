import React from 'react'
import NavBar from './components/navigation/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {fade} from 'material-ui/utils/colorManipulator'

import {
  grey50,
  blueGrey200,
  blueGrey300,
  red500,
  red600,
  white,
  darkBlack
} from 'material-ui/styles/colors'

injectTapEventPlugin()

const theme = getMuiTheme({
  palette: {
    primary1Color: blueGrey200,
    primary2Color: blueGrey300,
    textColor: darkBlack,
    alternateTextColor: white,
    accent1Color: red500,
    accent2Color: red600,
    canvasColor: grey50,
    secondaryTextColor: darkBlack,
  }
})

export default class Brd extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <NavBar />
      </MuiThemeProvider>
    )
  }
}
