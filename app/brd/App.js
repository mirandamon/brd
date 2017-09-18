import React from 'react'
import {
  AppRegistry,
  Text,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return <Text>Hello, Navigation!</Text>
  }
}

const brd = StackNavigator({
  Home: { screen: HomeScreen },
})

export default brd

// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('brd', () => brd)
