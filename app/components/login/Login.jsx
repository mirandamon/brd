import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { auth, googleAuthProvider } from '../../common/firebase'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  componentWillMount () {
  }

  render () {
    return (
      <div>
        <h1 className='loginHeading'>It's good to see you again!</h1>
        <form className='loginForm'>
          <div className='loginGroup'>
            <TextField floatingLabelText='Email' type='email' fullWidth />
          </div>
          <div className='loginGroup'>
            <TextField floatingLabelText='Password' type='password' fullWidth />
          </div>
          <RaisedButton label='Login' secondary fullWidth style={{margin: 10}} />
          <RaisedButton label='Login with Facebook'
            icon={<FontIcon className='fa fa-facebook-official' />}
            style={{margin: 10}}
            backgroundColor='navy'
            labelColor='white'
            fullWidth />
          <RaisedButton label='Login with Google'
            icon={<FontIcon className='fa fa-google' />}
            style={{margin: 10}}
            backgroundColor='lightgrey'
            onClick={() => auth.signInWithPopup(googleAuthProvider)}
            fullWidth />
        </form>
      </div>
    )
  }
}
