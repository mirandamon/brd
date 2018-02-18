import React from 'react'
import {
  Text,
  View,
} from 'react-native'
import Spinkit from 'react-native-spinkit'
import { RoundButton } from 'react-native-button-component'
import { loadingStyles } from '../../styles/Loading'
import { resetAction } from '../generic/helpers/stack-actions'
import Colors from '../../styles/Colors'

const styles = loadingStyles

export default class Loading extends React.Component {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(resetAction('Interests'))
    }, 5000)
  }

  replaceScreen = () => {
    this.props.navigation.dispatch({
      type: 'ReplaceCurrentScreen',
      routeName: 'Interests',
      params: { ...this.props.navigation.state.params },
      key: 'Interests'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinkit size={100} type='Bounce' color={Colors.brandPrimaryDark} />
        <Text style={styles.heading}>Let's get started!</Text>
      </View>
    )
  }
}
