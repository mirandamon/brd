import React from 'react'
import {
  AppRegistry,
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import Landing from './app/components/landing'
import Login from './app/components/login'
import Register from './app/components/register'


const boast = StackNavigator(
  {
    Home: { screen: Landing },
    Login: { screen: Login },
    Register: { screen: Register },
  },
  {
    mode: 'modal',
  },
)

export default boast

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('boast', () => boast)
