import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading'
import { firebaseConnect,
  isLoaded,
  isEmpty,
  pathToJS
} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

export class Login extends React.Component {
  constructor (props) {
    super(props)
    this.componentWillMount = this.componentWillMount.bind(this)
    this.googleLogin = this.googleLogin.bind(this)
    this.state = {
      loading: false
    }
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
  }

  componentWillMount () {
  }

  googleLogin (loginData) {
    this.setState({ loading: true })
    return this.props.firebase
      .login({ provider: 'google', type: 'popup' })
      .then(() => {
        this.setState({ loading: false })
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.log('Error: ', error)
      })
  }

  render () {
    const { firebase, auth } = this.props
    if (!isLoaded(auth)) {
      return (
        <ReactLoading type='cylon' color='#f44336' height='667' width='375' className='loading' />
      )
    } else if (isEmpty(auth)) {
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
              onClick={this.googleLogin}
              fullWidth />
          </form>
        </div>
      )
    }
    return (
      <Redirect to='/' />
    )
  }
}

export default connect(
  ({firebase}) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  })
)(firebaseConnect()(Login))
