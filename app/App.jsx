import React from 'react'
import { NavBar } from './components/navigation/NavBar'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

export default class Brd extends React.Component {
  render() {
    return (
      <NavBar />
    )
  }
}
