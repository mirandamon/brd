import React from 'react'
import {
  Text,
  Keyboard,
  View
} from 'react-native'
import Hr from 'react-native-hr'
import DatePicker from '../generic/datepicker'
import { TextField } from 'react-native-material-textfield'
import { RoundButton } from 'react-native-button-component'
import { registerStyles } from '../../styles/Register'
import Colors from '../../styles/Colors'
import firebase from '../../firebase/config'
import * as _ from 'lodash'

const styles = registerStyles

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      registerButtonState: 'register'
    }
  }

  onChangeText = (text) => {
    let errors = _.merge({}, this.state.errors);
    ['email', 'password', 'username'].map((field) => {
      if (this[field].isFocused()) {
        this.setState({ [field]: text })
        errors[field] = ''
        this.setState({ errors })
      }
    })
  }

  register = () => {
    let errors = {}
    this.setState({ registerButtonState: 'registering' })
    if (!this.state.email) {
      this.setState({ registerButtonState: 'register' })
      errors.email = 'Email cannot be empty'
      this.setState({ errors })
    }
    if (!this.state.username) {
      this.setState({ registerButtonState: 'register' })
      errors.username = 'Username cannot be empty'
      this.setState({ errors })
    }
    if (!this.state.password) {
      this.setState({ registerButtonState: 'register' })
      errors.password = 'Password cannot be empty'
      this.setState({ errors })
    } 
    if (!this.state.date) {
      this.setState({ registerButtonState: 'register' })
      errors.birthday = 'Password cannot be empty'
      this.setState({ errors })
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() =>
          this.setState({ loginButtonState: 'login' })
        )
        .catch(
          (error) => {
            const errorCode = error.code
            const errorMessage = error.message
            switch (errorCode) {
              case 'auth/invalid-email':
                errors.email = 'Please enter a valid email address.'
                break
              default:
                errors.password = errorMessage
            }
            this.setState({ errors })
            this.setState({ registerButtonState: 'register' })
          }
        )
    }
  }

  render() {
    const { errors = {} } = this.state
    return (
      <View style={{backgroundColor:'white', height: '100%'}}>
        <View style={{flexDirection:'column'}}>
          <View style={styles.registerContainer}>
            <View style={styles.facebookButton}>
              <RoundButton
                gradientStart={{ x: 0.5, y: 1 }}
                gradientEnd={{ x: 1, y: 1 }}
                backgroundColors={[Colors.brandPrimary, Colors.brandPrimaryDarker]}
                text="Sign up with Facebook"
              />
            </View>
            <View style={styles.registerForm}>
              <Hr lineColor='#b3b3b3' text='or with email' />
              <TextField
                autoCapitalize='none'
                label='Email'
                keyboardType='email-address'
                ref={(input) => { this.email = input }}
                tintColor={Colors.brandPrimary}
                returnKeyType='next'
                enablesReturnKeyAutomatically
                onSubmitEditing={this.onSubmitEmail}
                onChangeText={this.onChangeText}
                autoCorrect={false}
                error={errors.email}
              />
              <TextField
                autoCapitalize='none'
                label='Username'
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
                autoCapitalize='none'
                label='Password'
                ref={(input) => { this.password = input }}
                tintColor={Colors.brandPrimary}
                returnKeyType='next'
                secureTextEntry
                enablesReturnKeyAutomatically
                onSubmitEditing={this.onSubmitUsername}
                onChangeText={this.onChangeText}
                autoCorrect={false}
                error={errors.password}
              />
              <DatePicker
                date={this.state.date}
                mode="date"
                placeholder="Birthday"
                format="YYYY-MM-DD"
                minDate="1921-01-01"
                maxDate={new Date().toISOString().split('T')[0]}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => {this.setState({date: date})}}
                showIcon={false}
              />
              <View style={styles.facebookButton}>
                <RoundButton
                  buttonState={this.state.registerButtonState}
                  gradientStart={{ x: 0.5, y: 1 }}
                  gradientEnd={{ x: 1, y: 1 }}
                  backgroundColors={[Colors.brandPrimary, Colors.brandPrimaryDarker]}
                  states={{
                    register: {
                      onPress: () => {
                        this.register()
                      },
                      text: 'Sign up'
                    },
                    registering: {
                      spinner: true,
                      text: 'Signing up'
                    }
                  }}
                />
              </View>
              <View>
                <Text style={styles.legalStuff}>By signing up, you agree to the Terms of Service and Privacy Policy.</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
