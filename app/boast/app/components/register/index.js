import React from 'react'
import {
  Text,
  Keyboard,
  View
} from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { registerStyles } from '../../styles/Register'
import Colors from '../../styles/Colors'

const styles = registerStyles

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {}
    }
  }

  render() {
    const { errors = {} } = this.state
    return (
      <View>
        <View style={{flexDirection:'column'}}>
          <Text>or with email</Text>
          <TextField
            autoCapitalize='none'
            label='Email'
            keyboardType='email-address'
            ref={(input) => { this.username = input }}
            tintColor={Colors.brandPrimary}
            returnKeyType='next'
            enablesReturnKeyAutomatically
            onSubmitEditing={this.onSubmitUsername}
            onChangeText={this.onChangeText}
            autoCorrect={false}
            error={errors.username}
          />
        </View>
      </View>
    )
  }
}
