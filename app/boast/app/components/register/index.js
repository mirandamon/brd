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
import firebase, { firebaseDb } from '../../firebase/config'
import * as _ from 'lodash'

const styles = registerStyles

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.checkIfUsernameAlreadyExists = this.checkIfUsernameAlreadyExists.bind(this)
    this.state = {
      errors: {},
      registerButtonState: 'register',
      usernameTaken: false
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

  writeUserData = (username, birthday) => {
    firebaseDb.ref(`users/${username}`).set({
      birthday
    })
    firebaseDb.ref(`usernames/${username}`).set(true)
  }

  async checkIfUsernameAlreadyExists(username) {
    await firebaseDb.ref(`usernames/${username}`).once('value')
      .then(async (snapshot) => {
        this.setState({ usernameTaken: snapshot.exists() })
      })
  }

  register = async () => {
    let errors = {}
    await this.checkIfUsernameAlreadyExists(this.state.username)
    this.setState({ registerButtonState: 'registering' })
    if (!this.state.email) {
      this.setState({ registerButtonState: 'register' })
      errors.email = 'Email cannot be empty'
      this.setState({ errors })
    } else if (!this.state.username) {
      this.setState({ registerButtonState: 'register' })
      errors.username = 'Username cannot be empty'
      this.setState({ errors })
    } else if (!this.state.password) {
      this.setState({ registerButtonState: 'register' })
      errors.password = 'Password cannot be empty'
      this.setState({ errors })
    } else if (this.state.usernameTaken) {
      this.setState({ registerButtonState: 'register' })
      errors.username = 'This username is taken.'
      this.setState({ errors })
    } else if (!this.state.birthday) {
      this.setState({ registerButtonState: 'register' })
      errors.birthday = 'Password cannot be empty'
      this.setState({ errors })
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.setState({ registerButtonState: 'register' })
          const user = firebase.auth().currentUser
          user.updateProfile({
            displayName: this.state.username,
          }).then(() => this.writeUserData(this.state.username, this.state.birthday))
            .then(() => this.props.navigation.navigate('Welcome'))
        })
        .catch(
          (error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(error)
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
                date={this.state.birthday}
                mode="date"
                placeholder="Birthday"
                format="YYYY-MM-DD"
                minDate="1921-01-01"
                maxDate={new Date().toISOString().split('T')[0]}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(birthday) => { this.setState({ birthday }) }}
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
                <Text style={styles.legalStuff}>
                  By signing up, you agree to the Terms of Service and Privacy Policy.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
