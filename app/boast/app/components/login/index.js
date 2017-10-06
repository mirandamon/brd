import React from 'react'
import {
  Text,
  Keyboard,
  View
} from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { RoundButton } from 'react-native-button-component'
import * as _ from 'lodash'
import Colors from '../../styles/Colors'
import { loginStyles } from '../../styles/Login'
import { globals } from '../../styles/Globals'
import firebase from '../../firebase/config'

const styles = loginStyles

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginButtonState: 'login',
      errors: {}
    }
    this.onSubmitUsername = this.onSubmitUsername.bind(this)
    this.onSubmitPassword = this.onSubmitPassword.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.login = this.login.bind(this)
  }

  onChangeText(text) {
    let errors = _.merge({}, this.state.errors);
    ['username', 'password'].map((field) => {
      if (this[field].isFocused()) {
        this.setState({ [field]: text })
        errors[field] = ''
        this.setState({ errors })
      }
    })
  }

  onSubmitUsername() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.login()
  }

  login() {
    Keyboard.dismiss()
    let errors = {}
    this.setState({ loginButtonState: 'logging_in' })
    if (!this.state.username) {
      this.setState({ loginButtonState: 'login' })
      errors.username = 'Username cannot be empty'
      this.setState({ errors })
    }
    if (!this.state.password) {
      this.setState({ loginButtonState: 'login' })
      errors.password = 'Password cannot be empty'
      this.setState({ errors })
    } else {
      firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(() =>
          this.setState({ loginButtonState: 'login' })
        )
        .catch(
          (error) => {
            const errorCode = error.code
            const errorMessage = error.message
            switch (errorCode) {
              case 'auth/invalid-email':
                errors.username = 'Please enter a valid email address.'
                break
              case 'auth/user-not-found':
                errors.username = 'Can\'t find an account for this email.'
                break
              default:
                errors.password = errorMessage
            }
            this.setState({ errors })
            this.setState({ loginButtonState: 'login' })
          }
        )
    }
  }

  render() {
    const { errors = {} } = this.state
    return (
      <View>

        <View style={{flexDirection:'column'}}>
          <View style={styles.topLogo} />
          <View style={styles.username}>
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
            <TextField
              label='Password'
              ref={(input) => { this.password = input }}
              tintColor={Colors.brandPrimary}
              secureTextEntry
              onChangeText={this.onChangeText}
              error={errors.password}
              enablesReturnKeyAutomatically
              onSubmitEditing={this.onSubmitPassword}
            />
          </View>

        </View>
        <View style={styles.loginButton}>
          <RoundButton
            buttonState={this.state.loginButtonState}
            gradientStart={{ x: 0.5, y: 1 }}
            gradientEnd={{ x: 1, y: 1 }}
            backgroundColors={[Colors.brandPrimary, Colors.brandPrimaryDarker]}
            states={{
              login: {
                onPress: () => {
                  this.login()
                },
                text: 'Login'
              },
              logging_in: {
                spinner: true,
                text: 'Logging In'
              }
            }}
          />
        </View>
      </View>
    )
  }
}
