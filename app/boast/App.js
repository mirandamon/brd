import React from 'react'
import {
  AppRegistry,
  Text,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Landing from './app/components/landing'
import Login from './app/components/login'


const boast = StackNavigator(
  {
    Home: { screen: Landing },
    Login: { screen: Login },
  },
  {
    mode: 'modal',
  },
)

export default boast

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('boast', () => boast)
