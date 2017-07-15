import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { firebaseConnect,
  pathToJS,
  isEmpty
} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import profileStyles from './navigation.css'
import navStyles from './navbar.css'

const handleTouchTap = () => {
  window.location.href = '/'
}

const styles = {
  title: {
    cursor: 'pointer'
  }
}

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
    this.handleTouchTap = this.handleTouchTap.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleTouchTap (event) {
    event.preventDefault()
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    const { firebase, auth } = this.props
    console.log(auth)
    const rightElement = isEmpty(auth) ? (
      <div>
        <RaisedButton label='Log In' secondary style={{margin: 8, display: 'inline-block'}} href='/login' />
        <RaisedButton label='Sign Up' secondary style={{margin: 8, display: 'inline-block'}} />
      </div>
    ) : (
      <div>
        <FlatButton
          label='Submit'
          secondary
          style={{margin: '8px', display: 'inline-block'}}
          onClick={() => {
            this.props.firebase.logout()
            .then(<Redirect to='/' />)
          }
            } />
        <FloatingActionButton mini style={{margin: '8px'}} onTouchTap={this.handleTouchTap}>
          <img src={auth.photoURL} />
        </FloatingActionButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleClose}
        >
          <Menu>
            <MenuItem primaryText='Settings' />
            <MenuItem 
              primaryText='Sign out'
              onTouchTap={() => {
                this.setState({open: false})
                this.props.firebase.logout()
                .then(<Redirect to='/' />)
              }
            }
            />
          </Menu>
        </Popover>
      </div>
    )
    const user = isEmpty(auth) ? null : (
      <div className={profileStyles.content}>
        <div className={profileStyles.card}>
          <div className={profileStyles.firstinfo}>
            <img src={auth.photoURL} />
            <div className={profileStyles.profileinfo}>
              <h1>{auth.displayName}</h1>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Brd</span>}
          onTitleTouchTap={handleTouchTap}
          showMenuIconButton={false}
          // onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={rightElement}
          zDepth={0}
        />
        <div className={navStyles.navigation}>
          <div className={navStyles.navigationCategory}>
            Housing
          </div>
          <div className={navStyles.navigationCategory}>
            Jobs
          </div>
          <div className={navStyles.navigationCategory}>
            Community
          </div>
          <div className={navStyles.navigationCategory}>
            Buy & Sell
          </div>
          <div className={navStyles.navigationCategory}>
            Personals
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({firebase}) => ({
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
})

export default connect(
  mapStateToProps
)(firebaseConnect()(NavBar))
