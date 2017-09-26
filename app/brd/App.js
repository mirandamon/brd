import React from 'react'
import {
  AppRegistry,
  Text,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Landing from './app/components/landing'


const brd = StackNavigator({
  Home: { screen: Landing },
})

export default brd

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('brd', () => brd)
