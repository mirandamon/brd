import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Landing from './app/components/landing'
import Welcome from './app/components/landing/welcome'
import Login from './app/components/login'
import Register from './app/components/register'
import Loading from './app/components/setup/loading'
import Interests from './app/components/setup/interests'

const HomeNav = StackNavigator(
  {
    Home: { screen: Landing },
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    mode: 'modal'
  }
)

const SetupNav = StackNavigator({
  Loading: { screen: Loading },
  Interests: { screen: Interests }
})

const boast = StackNavigator(
  {
    Home: { screen: HomeNav },
    Login: { screen: Login },
    Register: { screen: Register },
    Welcome: { screen: Welcome },
    Setup: { screen: SetupNav }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default boast

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('boast', () => boast)
