import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { firebaseConnect,
  pathToJS,
  isEmpty
} from 'react-redux-firebase'

class NavBar extends React.Component {
  render () {
    const { firebase, auth } = this.props
    if (isEmpty(auth)) {
      return (
        <AppBar
          title='Brd'
          iconElementRight={(
            <div>
              <RaisedButton label='Log In' secondary style={{margin: 5}} href='/login' />
              <RaisedButton label='Sign Up' secondary style={{margin: 5}} />
            </div>)
          }
        />
      )
    } else {
      return (
        <AppBar
          title='Brd'
          iconElementRight={(
            <div>
              <RaisedButton
                label='Sign Out'
                secondary
                style={{margin: 5}}
                onClick={() => {
                  this.props.firebase.logout()
                  .then(console.log(firebase.auth))
                }
                  } />
            </div>)
          }
        />
      )
    }
  }
}

const mapStateToProps = ({firebase}) => ({
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
})

export default connect(
  mapStateToProps
)(firebaseConnect()(NavBar))
