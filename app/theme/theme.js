import getMuiTheme from 'material-ui/styles/getMuiTheme'

import {
  grey50,
  blueGrey300,
  red500,
  red600,
  white,
  darkBlack
} from 'material-ui/styles/colors'

export const theme = getMuiTheme({
  appBar: {
    textColor: darkBlack,
    titleFontWeight: 300
  },
  palette: {
    primary1Color: white,
    primary2Color: blueGrey300,
    textColor: darkBlack,
    alternateTextColor: white,
    accent1Color: red500,
    accent2Color: red600,
    canvasColor: grey50,
    secondaryTextColor: darkBlack
  },
  textField: {
    hintColor: blueGrey300,
    focusColor: blueGrey300
  },
  raisedButton: {
    fontWeight: 300
  }
})
